export const FETCH_POPULAR = 'FETCH_POPULAR';
export const FETCH_TOP_RATED = 'FETCH_TOP_RATED';
export const FETCH_TRENDING = 'FETCH_TRENDING';
export const SHOW_MOVIE = 'SHOW_MOVIE';
export const SHOW_TV_SERIAL = 'SHOW_TV_SERIAL';
export const SET_INPUT = 'SET_INPUT';
export const SET_SELECTION = 'SET_SELECTION';
export const SET_VIDEO = 'SET_VIDEO';
export const STOP_MOUNT = 'STOP_MOUNT';
export const SET_TOSEE = 'SET_TOSEE';


function setPopular(data){
    return{
        type: FETCH_POPULAR,
        payload: data,
    };
}
function setTopRated(data){
    return{
        type: FETCH_TOP_RATED,
        payload: data,
    };
}

function setTrending(data){
    return{
        type: FETCH_TRENDING,
        payload: data,
    }
}

function getMovie(){
    return{
        type: SHOW_MOVIE
    }
}
 
function getSerial(){
    return{
        type: SHOW_TV_SERIAL
    }
}

function setInput(value){
    return{
        type: SET_INPUT,
        payload: value.target.value
    }
}


function setSelection(value){
    return{
        type: SET_SELECTION,
        payload: value
    }
}

function setVideo(value){
    return{
        type: SET_VIDEO,
        payload: value
    }
}
function setMount(){
    return{
        type: STOP_MOUNT,
    }
}

function setToSee(show){
    return{
        type: SET_TOSEE,
        payload: show
    }
}


export { setPopular, setTopRated, setTrending, getMovie, getSerial, setInput, setSelection, setVideo,setMount, setToSee};