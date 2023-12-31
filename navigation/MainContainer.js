import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import SettingsScreen from './screens/SettingsScreen';

//Screen names
const homeName = "Home";
const detailsName = "Details";
const settingsName = "Settings";

const Tab = createBottomTabNavigator();

function MainContainer() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={homeName}

                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        let rn = route.name;

                        if (rn === homeName) {
                            iconName = focused ? 'home' : 'home-outline';
                        } else if (rn === detailsName) {
                            iconName = focused ? 'list' : 'list-outline';
                        } else if (rn === settingsName) {
                            iconName = focused ? 'settings' : 'settings-outline';
                        }

                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'grey',
                    tabBarLabelStyle: { paddingBottom: 10, fontSize: 10 },
                    tabBarStyle: { padding: 10, height: 70 },
                })}
            >

                <Tab.Screen name={homeName} component={HomeScreen} options={{ headerShown: false }} />
                <Tab.Screen name={detailsName} component={DetailsScreen} options={{ headerShown: false }} />
                <Tab.Screen name={settingsName} component={SettingsScreen} options={{ headerShown: false }} />

            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default MainContainer;
