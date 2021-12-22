import { StyleSheet, Dimensions, } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#42a5f5',
    },
    logo: {
        height: Dimensions.get('window').height / 3,
        width: Dimensions.get('window').width,
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    logo_container: {
        margin: 10,
        padding: 10,
    },
    body_container: {},
})