import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import a from '../../screens/a';
import HomeScreen from '../../screens/HomeScreen';


const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="Notifications" component={a} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}


export default DrawerNavigation;