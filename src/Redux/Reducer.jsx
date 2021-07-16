import { combineReducers } from 'redux';
import { FETCH_POPULAR, FETCH_TOP_RATED, FETCH_TRENDING, SHOW_MOVIE, SHOW_TV_SERIAL, SET_INPUT, SET_SELECTION, SET_VIDEO, STOP_MOUNT,SET_TOSEE } from './Action';

const InitialState = {
    popular: [],
    topRated: [],
    trending: [],
    toShow: 'movie',
    searchName: '',
    selected: [],
    video:[],
    mount: false,
    show: '',
}


const fetchReducer=(state= InitialState, action)=>{
    switch (action.type) {
        case FETCH_POPULAR:
            return{
                ...state,
                popular: action.payload,
            };
        case FETCH_TOP_RATED:
            return{
                ...state,
                topRated:action.payload,
            }
        case FETCH_TRENDING:
            return{
                ...state,
                trending: action.payload,
            }        
        default:
            return state;
    }
};

const changeCateogaryReducer=(state= InitialState, action)=>{
   switch (action.type) {
        case SHOW_MOVIE:
           return{
               ...state,
               toShow : 'movie'
        };
        case SHOW_TV_SERIAL:
            return{
                ...state,
                toShow : 'tv'
        }
   
       default:
           return state
   }
    
};

const setInputReducer=(state= InitialState, action)=>{
    switch (action.type) {
        case SET_INPUT:
            return {
                ...state,
                searchName : action.payload
            }
        default:
            return state
    }
}

const setSelectionReducer=(state= InitialState, action)=>{
    switch (action.type) {
        case SET_SELECTION:
            return {
                ...state,
                selected : action.payload,
                mount : true,
            }
        case STOP_MOUNT:
            return{
                ...state,
                mount: false,
            }
        case SET_TOSEE:
            return{
                ...state,
                
            }
        default:
            return state
    }
}

const setVideoReducer=(state= InitialState, action)=>{
    switch (action.type) {
        case SET_VIDEO:
            return {
                ...state,
                video : action.payload
            }
        default:
            return state
    }
}

const setToSeeReducer=(state= InitialState, action)=>{
    switch (action.type) {
        case SET_TOSEE:
            return{
                ...state,
                show: action.payload
            }
    
        default:
            return{
                ...state,
                show: ''
            }
    }
}


const rootReducer = combineReducers({fetchReducer, changeCateogaryReducer, setInputReducer,setSelectionReducer, setVideoReducer,setToSeeReducer});

export {rootReducer};