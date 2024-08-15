import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View } from 'react-native';
import React from 'react';
import { Feather } from '@expo/vector-icons';
import globalStyles from './styles';


import Home from '@/app/(tabs)/index';
import SavedScreen from './(tabs)/saved';
import Settings from './(tabs)/settings';


const Tab = createBottomTabNavigator();
const screenOptions = {
    tabBarShowLabel:false,
    headerShown:false,
    tabBarStyle:globalStyles.bottomNav
}

const BottomTab = () => {
  return (
        <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen name='Home' component={Home} options={{
                tabBarIcon: ({focused}) => (
                    <View style={[globalStyles.bottomNavItem]}>
                        <Feather name="home" size={24} style={{color:focused ? 'black' : 'grey'}}/>
                        <Text style={[{color:focused ? 'black' : 'grey'}, globalStyles.text]}>Home</Text>
                    </View>
                )
            }}/>
            {/* <Tab.Screen name='Saved' component={SavedScreen} options={{
                tabBarIcon: ({focused}) => (
                    <View style={globalStyles.bottomNavItem}>
                        <Feather name="save" size={24} style={{color:focused ? 'black' : 'grey'}}/>
                        <Text style={[{color:focused ? 'black' : 'grey'}, globalStyles.text]}>Saved</Text>
                    </View>
                )
            }}/> */}
            {/* <Tab.Screen name='Settings' component={Settings} options={{
                tabBarIcon: ({focused}) => (
                    <View style={globalStyles.bottomNavItem}>
                        <Feather name="settings" size={24} style={{color:focused ? 'black' : 'grey'}}/>
                        <Text style={[{color:focused ? 'black' : 'grey'}, globalStyles.text]}>Settings</Text>
                    </View>
                )
            }}/>                         */}
        </Tab.Navigator>
  )
}

export default BottomTab