/**
 * Created by John on 2017/2/28.
 */
import React from 'react'
import {connect} from 'react-redux'
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
class App extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        let {text,onPress} = this.props
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    {text}
                </Text>
                <Text style={styles.instructions} onPress={onPress}>
                    press me to change text!
                </Text>
                <Text style={styles.instructions}>
                    Double tap R on your keyboard to reload,{'\n'}
                    Shake or press menu button for dev menu
                </Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
const mapStateToProps = (state, ownProps) => {
    return {
        text: state.text
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onPress: () => {
            dispatch({type:'text.change',text:'change text'})
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(App)