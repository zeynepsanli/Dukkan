import { StyleSheet, Dimensions, ImageBackgroundBase } from "react-native";

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
    container: {flex:1,},
    bodyContainer: {padding: 10,},
    image: {
        width: deviceSize.width,
        height: deviceSize.height / 3,
        resizeMode: 'contain',
        backgroundColor: 'white',        
    },
    title: { fontWeight: 'bold', fontSize: 25,},
    description: {fontStyle: 'italic', marginVertical: 5, },
    price: {fontWeight: 'bold', fontSize: 22, textAlign: 'right' }
})