import React from "react";
import { SafeAreaView, View, Text, Image, Alert } from 'react-native';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';

import Button from "../../components/Button/Button";
import Input from "../../components/Input";
import styles from './LoginStyle';
import usePost from "../../hooks/usePost/usePost";

const Login = ({ navigation }) => {

    const { data, loading, error, post } = usePost();

    const dispatch = useDispatch();

    function handleLogin(values) {
        post('https://fakestoreapi.com/auth/login', values);
    }

    if (error) {
        Alert.alert('Dükkan', 'Bir Hata Oluştu!')
    }

    if (data) {
        if (data.status === "Error") {
            Alert.alert('Dükkan', 'Kullanıcı bulunumadı!')
        }
        else {
            dispatch({ type: 'SET_USER', payload: { user } })

        }
        console.log(data);
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.logo_container}>
                <Image style={styles.logo} source={require('../../assets/astronaut-bag.png')} />
            </View>
            <Formik
                initialValues={{ username: '', password: '' }}
                onSubmit={handleLogin}
            >
                {({ handleSubmit, handleChange, values }) => (
                    <View style={styles.body_container}>
                        <Input
                            placeholder="Kullanıcı adını giriniz..."
                            value={values.username}
                            onType={handleChange('username')}
                            iconName="account"
                        />
                        <Input
                            placeholder="Şifrenizi giriniz..."
                            value={values.password}
                            onType={handleChange('password')}
                            iconName="key"
                            isSecure
                        />
                        <Button text="Giriş Yap" onPress={handleSubmit} loading={loading} />
                    </View>
                )}
            </Formik>
            <View>
                <Image source={require('../../assets/earth.png')} />
            </View>
        </SafeAreaView>
    );
};

export default Login;

const user = { "address": { "geolocation": { "lat": "-37.3159", "long": "81.1496" }, "city": "kilcoole", "street": "new road", "number": 7682, "zipcode": "12926-3874" }, "id": 1, "email": "john@gmail.com", "username": "johnd", "password": "m38rmF$", "name": { "firstname": "john", "lastname": "doe" }, "phone": "1-570-236-7033", "__v": 0 }