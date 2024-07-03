import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './pages/HomePage';
import Checkout from './pages/Checkout';

const Stack = createStackNavigator();

const App = () => {
    const [cart, setCart] = useState([]);

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home">
                    {props => <HomePage {...props} cart={cart} setCart={setCart} />}
                </Stack.Screen>
                <Stack.Screen name="Checkout">
                    {props => <Checkout {...props} cart={cart} setCart={setCart} />}
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
