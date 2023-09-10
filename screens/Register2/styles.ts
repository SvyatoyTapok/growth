import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
    },
    centerContainer: {
        marginTop: '32%'
    },
    buttonContainer: {
        marginTop: 20,
    },
    bottomContainer: {
        marginTop: 50,
        paddingBottom: 20,
        alignSelf: 'center',
    },
    bottomText: {
        color: '#FFF',
        alignSelf: 'center',
        marginBottom: 20,
        fontFamily: 'InterLight'
    },
    progressContainer: {
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'space-between',
        width: '80%',
    },
    warningContainer: {
        marginTop: 16,
        width: '80%',
        alignSelf: 'center',
    },
    warningText: {
        color: '#666680'
    },
})