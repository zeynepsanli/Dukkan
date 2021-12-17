import React from "react";
import { View, Text, Image } from 'react-native';

import useFetch from "../../hooks/useFetch/useFetch";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import styles from './DetailStyle';

const Detail = ({ route }) => {
    const { id } = route.params;
    const { loading, data, error } = useFetch(`${'https://fakestoreapi.com/products'}/${id}`);

    if (loading) {
        return <Loading />
    }

    if (error) {
        return <Error />
    }

    return (
        <View style={styles.container}>
            <Image source={{uri: data.image}} style={styles.image} />
            <View style={styles.bodyContainer}>
             <Text style={styles.title} >{data.title}</Text>
            <Text style={styles.description} >{data.description}</Text>
                <Text style={styles.price}>{data.price} ₺ </Text>               
            </View>

        </View>
    );
};
export default Detail;