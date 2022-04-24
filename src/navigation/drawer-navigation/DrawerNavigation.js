import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../../screens/HomeScreen';
import MonthlyScreen from '../../screens/MonthlyScreen';
import WeeklyScreen from '../../screens/WeeklyScreen';
import AddExpenseScreen from '../../screens/AddExpenseScreen';
import {COLORS} from '../../styles.js/theme'

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
    return (
        <NavigationContainer >
            <Drawer.Navigator screenOptions={{
                headerStyle: {
                    backgroundColor: COLORS.primary,
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }} initialRouteName="Home">
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="AddExpense" component={AddExpenseScreen} />
                <Drawer.Screen name="Monthly Expense" component={MonthlyScreen} />
                <Drawer.Screen name="Weekly Expense" component={WeeklyScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}


export default DrawerNavigation;