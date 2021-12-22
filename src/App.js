import React from 'react';
import { SafeAreaView, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
 
import Product from './pages/Products';
import Detail from './pages/Detail';
import Login from './pages/Login';
import Loading from './components/Loading';

const Stack = createNativeStackNavigator();

const App = () => {

  const userSession = useSelector(s => s.user);
  const isAuthLoading = useSelector(s => s.isAuthLoading);

  return (
    <NavigationContainer>
      {isAuthLoading ? (
        <Loading />
      ) :
        !userSession ?
          <Stack.Navigator>
            <Stack.Screen
              name="LoginPage"
              component={Login}
              options={{
                headerShown: false
              }} />
          </Stack.Navigator>
          :
          <>
            <Stack.Navigator> 
              <Stack.Screen
                name="ProductsPage"
                component={Product}
                options={{
                  title: 'Dükkan',
                  headerStyle: { backgroundColor: '#42a5f5' },
                  headerTitleAlign: 'center'
                }} />
              <Stack.Screen
                name="DetailPage"
                component={Detail}
                options={{
                  title: 'Ürün Sayfası',
                  headerStyle: { backgroundColor: '#42a5f5' },
                  headerTitleAlign: 'center'
                }}
              />
            </Stack.Navigator>
          </>
      }
    </NavigationContainer>
  );
};
export default App;