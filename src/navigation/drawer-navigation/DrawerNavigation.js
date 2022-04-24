import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import a from '../../screens/MonthlyScreen';
import HomeScreen from '../../screens/HomeScreen';
import MonthlyScreen from '../../screens/MonthlyScreen';
import WeeklyScreen from '../../screens/WeeklyScreen';


const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="Monthly Expense" component={MonthlyScreen} />
                <Drawer.Screen name="Weekly Expense" component={WeeklyScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}


export default DrawerNavigation;