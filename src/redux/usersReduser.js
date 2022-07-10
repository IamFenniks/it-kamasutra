const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";

let initialState = {
    users: [
        { 
            id: 0,
            followed: true,
            userImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyOa31A3Sstz7vDPuZQ_Q0exSI9K6oKIVtig&usqp=CAU',
            name: 'Андрей',
            status: 'Команда',
            location: { country: 'Россия' , city: 'Мариуполь' } 
        },
        { 
            id: 1,
            followed: false,
            userImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZC5LyXIKd6CkjtmgegFMd5qpCPhy22gGWzA&usqp=CAU',
            name: 'Иван',
            status: 'Команда',
            location: { country: 'Россия' , city: 'Мариуполь' } 
        },
        { 
            id: 2,
            followed: true,
            userImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJKvGaF13ty4bRwZmOTGf4mkwBEIx85bLK9A&usqp=CAU',
            name: 'Марья',
            status: 'Команда',
            location: { country: 'Россия' , city: 'Мариуполь' } 
        }
    ]
};

export const usersReduser = (state = initialState, action) => {
    
    
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
               users: state.users.map(u => {
                   if(u.id === action.id){
                       return {...u, followed: true}
                   }
                   return u;
               })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.id){
                        return {...u, followed: false}
                    }
                    return u;
                })
            }

        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
            
        default: return state;
    }
};

export const followAC = (userId) => {
    return { type: FOLLOW, id: userId };
};

export const unfollowAC = (userId) => {
    return { type: UNFOLLOW, id: userId };
};

export const setUsersAC = (users) => {
    return { type: SET_USERS, users: users };
};

export default usersReduser;
