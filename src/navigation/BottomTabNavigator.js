import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../modules/home/HomeScreen';
import ProfileScreen from '../modules/profile/ProfileScreen';
import SettingsScreen from '../modules/settings/SettingsScreen';
import DashBoard from '../modules/dashboard/DashBoard';

// Import custom SVG icons
import HomeIcon from '../../asset/svg/bottom-tab/home-icon.svg';
import ExploreIcon from '../../asset/svg/bottom-tab/user-icon.svg';
import MessageIcon from '../../asset/svg/bottom-tab/message-icon.svg';
import ProfileIcon from '../../asset/svg/bottom-tab/profile-icon.svg';

import ActiveHomeIcon from '../../asset/svg/bottom-tab/active-home.svg';
import ActiveExploreIcon from '../../asset/svg/bottom-tab/active-explorer.svg';
import ActiveMessageIcon from '../../asset/svg/bottom-tab/active-message.svg';
import ActiveProfileIcon from '../../asset/svg/bottom-tab/active-profile.svg';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size, focused}) => {
          let IconComponent;

          // Choose the appropriate icon for each tab based on focus state
          if (route.name === 'Home') {
            IconComponent = focused ? ActiveHomeIcon : HomeIcon;
          } else if (route.name === 'Profile') {
            IconComponent = focused ? ActiveProfileIcon : ProfileIcon;
          } else if (route.name === 'Settings') {
            IconComponent = focused ? ActiveMessageIcon : MessageIcon;
          } else if (route.name === 'Dashboard') {
            IconComponent = focused ? ActiveExploreIcon : ExploreIcon;
          }

          // Render the SVG icon, passing the necessary color and size props
          return <IconComponent width={size} height={size} fill={color} />;
        },
        tabBarShowLabel: false, // Disable tab labels
        headerShown: false, // Disable screen headers
        tabBarStyle: {
          position: 'absolute',
          bottom: 20,
          backgroundColor: '#140034',
          left: 20,
          right: 20,
          marginBottom: 10,
          borderRadius: 20,
          paddingBottom: 10, // Adjust padding at the bottom
          paddingTop: 10,
          elevation: 5,
          height: 60,
        },
        tabBarActiveTintColor: '#2f95dc', // Active icon color
        tabBarInactiveTintColor: 'gray', // Inactive icon color
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Dashboard" component={DashBoard} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
