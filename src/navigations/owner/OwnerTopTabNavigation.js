import React from 'react';
import { Image } from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {withStyles} from '@ui-kitten/components';

import {AttentionScreen, ServiceScreen, MedicationsScreen} from '../../screens';
import {hp} from '../../assets/styles/variables';

import {AttentionTab, ServiceTab, MedicinesTab} from '../../assets/images';

const OwnerTab = createMaterialTopTabNavigator();

const OwnerTopTabNavigation = ({eva}) => {
  const {backgroundColor, colorPrimary, colorInactive} = eva.style.tabStyle;

  return (
    <OwnerTab.Navigator
      tabBarPosition='bottom'
      sceneContainerStyle={{
        backgroundColor: 'transparent',
      }}
      tabBarOptions={{
        showIcon: true,
        labelStyle: {
          fontSize: hp(1.9),
          lineHeight: hp(2.8),
          textTransform: 'none',
        },
        activeTintColor: colorPrimary,
        inactiveTintColor: colorInactive,
        indicatorStyle: {
          backgroundColor: colorPrimary,
        },
        style: {
          backgroundColor: backgroundColor,
          borderBottomColor: colorPrimary,
        },
      }}>
      <OwnerTab.Screen
        name='attention_tab'
        options={{
          showIcon: true,
          tabBarLabel: '',
          tabBarIcon: ({ color }) => {
            return (
              <Image source={AttentionTab} width={24} height={24} tintColor={color} style={{tintColor: color}} />
            );
          },
        }}
        component={AttentionScreen}
      />
      <OwnerTab.Screen
        name='medications_tab'
        options={{
          showIcon: true,
          tabBarLabel: '',
          tabBarIcon: ({ color }) => {
            return (
              <Image source={MedicinesTab} width={24} height={24} tintColor={color} style={{tintColor: color}} />
            );
          },
        }}
        component={MedicationsScreen}
      />
      <OwnerTab.Screen
        name='service_tab'
        options={{
          showIcon: true,
          tabBarLabel: '',
          tabBarIcon: ({ color }) => {
            return (
              <Image source={ServiceTab} width={24} height={24} tintColor={color} style={{tintColor: color}} />
            );
          },
        }}
        component={ServiceScreen}
      />
    </OwnerTab.Navigator>
  );
};

export default withStyles(OwnerTopTabNavigation, theme => ({
  tabStyle: {
    backgroundColor: theme['background-basic-color-1'],
    colorPrimary: theme['color-info-500'],
    colorInactive: theme['color-basic-600'],
  },
}));
