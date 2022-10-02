import React from "react";

class ProfileStatus extends React.Component {
    // statusInputRef = React.createRef(); - реф фиксирует value инпута, поэтом он не подходит

    state = {
        editMode: false,
        status: this.props.status // Вместо реф заносим в лок status глоб
    }

    activateEditMode = () =>{
        this.setState({
            editMode: true
        });
    }

    deActivateEditMode = () =>{
        this.setState({
            editMode: false    
        });
        // this.props.updateStatus(this.statusInputRef.current.value); здесь тоже убираем реф
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) => { // ставим обра обработчик события "е"
        this.setState({
            status: e.currentTarget.value
        });
    }

    componentDidUpdate(prevState, prevProps){
        debugger;
        let a = this.state;
        let b = this.props;

        console.log('componentDidUpdated');
    }

    render (){
        console.log('render');
        return (
            <div>
                { !this.state.editMode && 
                    <div>
                        <span onDoubleClick={ this.activateEditMode }>
                            { this.state.status }
                        </span>
                    </div>
                }

                { this.state.editMode &&
                    <div>
                        <input type='text' 
                            autoFocus={ true }
                            //    ref={ this.statusInputRef }
                            onChange={ this.onStatusChange } // и вносим изменения в
                            value={ this.state .status } // меняем реф на value
                            onBlur={ this.deActivateEditMode } />
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;