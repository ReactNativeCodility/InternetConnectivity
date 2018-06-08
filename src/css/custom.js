import {Platform,StyleSheet,Dimensions} from 'react-native';
const { width } = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    ButtonContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: '#F5FCFF',
        top:50
    },
    welcome: {
        fontSize: 30,
        margin: 10,
        top:40,
        color:'green'
    },
    instructions: {
        fontSize: 18,
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
        top:50
    },
    offlineContainer: {
        backgroundColor: '#b52424',
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width,
        position: 'absolute',
    },
    onlineContainer: {
        backgroundColor: 'green',
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width,
        position: 'absolute',
    },

      offlineText: { color: '#fff' }
  });
  