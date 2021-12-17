import React, {useState, useEffect} from "react";
import { SafeAreaView, Text, FlatList, ActivityIndicator } from 'react-native';
import Config from "react-native-config";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

import ProductCard from "../../components/ProductCard/ProductCard";
import useFetch from "../../hooks/useFetch/useFetch";

const Product = ({navigation}) => {

    const {loading, data, error} = useFetch('https://fakestoreapi.com/products');

    const handleProduct = id => {
        navigation.navigate('DetailPage', {id});
    };

    const renderProduct = ({ item }) => (<ProductCard product={item} onSelect={() => handleProduct(item.id)} />);

    if (loading) {
        return <Loading />
    }

    if (error) {
        return <Error />
    }

    return (
        <SafeAreaView>
            <FlatList data={data} renderItem={renderProduct} />
        </SafeAreaView>
    );
};
export default Product;