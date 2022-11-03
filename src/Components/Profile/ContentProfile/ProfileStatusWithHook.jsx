import React, { useState } from "react";

const ProfileStatusWithHook = (props) => {
    
// Развёрнутый код
    // let stateWithSetState = useState(false);
    // let editMode = stateWithSetState[0];
    // let setEditMode = stateWithSetState[1]

// Код refuctoring                  // hooks
    let [ editMode, setEditMode ] = useState(false);
    let [ status, setStatus  ]    = useState(props.status);

    const activateEditMode = () =>{
        setEditMode( true );
    }
    
    const deActivateEditMode = () =>{
        setEditMode( false );
 
        props.updateStatus(status);
    }

    const onStatusChange = (e) => { 
        setStatus(e.currentTarget.value);
    }

    


    // componentDidUpdate(prevProps, prevState){
    //     if(prevProps.status !== props.status){
    //         setState({
    //             status: props.status
    //         });
    //     }

    //     //console.log('componentDidUpdated');
    // }

    
    return (
        <div>
            { !editMode && 
                <div>
                    <span onDoubleClick={ activateEditMode }>
                        { status ||  'Статус не указан :)'}
                    </span>
                </div>
            }

            { editMode &&
                <div>
                    <input type='text' 
                        autoFocus={ true }
                        //    ref={ statusInputRef }
                        onChange={ onStatusChange } // и вносим изменения в
                        value={ status }  //меняем реф на value
                        onBlur={ deActivateEditMode } 
                    />
                </div>
            }
        </div>
    )
    
}

export default ProfileStatusWithHook;