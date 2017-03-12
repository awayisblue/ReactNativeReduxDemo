/**
 * Created by John on 2017/2/28.
 */
export default {
    state:"default text",
    reducers:{
        change(state,action){
            let text = action.text
            return text;
        },
        clear(state,action){
            return '';
        }
    }
}