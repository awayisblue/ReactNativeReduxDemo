/**
 * Created by John on 2017/2/28.
 */
import {createStore,combineReducers} from 'redux'
import reduxShape from 'redux-shape'
import text from './reducers/text'

let shape = {
    text:()=>text,// a leaf should be returned inside a function.
}

let reducer = reduxShape(combineReducers,{shape:shape})
let store = createStore(reducer)
export let dispatch = store.dispatch
export let getState =  store.getState
export default store