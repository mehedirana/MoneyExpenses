import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../../screens/HomeScreen';
import a from '../../screens/MonthlyScreen';


const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
       screenOptions={{
        headerStyle: {
          backgroundColor: "#9AC4F8",
        },
        headerTintColor: "white",
        headerBackTitle: "Back",
      }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        

        {/* <Stack.Screen name="drawer" component={DrawerNavigation} /> */}
        <Stack.Screen name="account" component={a} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
