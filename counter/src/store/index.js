import {createStore} from "redux"

const reducerFn=(state={counter:0},action)=>{
    
    if(action.type=="inc"){
return {counter : state.counter+1};}else{
    return {counter : state.counter-1};
}

}
const store= createStore(reducerFn);
export default store;