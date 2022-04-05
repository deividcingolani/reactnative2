import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import OwnerTopTabNavigation from './OwnerTopTabNavigation';

const OwnerStack = createStackNavigator();

const OwnerStackNavigation = () => {
  return (
    <OwnerStack.Navigator headerMode='screen' initialRouteName='waiting_room'>
      <OwnerStack.Screen
        name='owner_top_tab'
        component={OwnerTopTabNavigation}
        options={{headerShown: false}}
      />
    </OwnerStack.Navigator>
  );
};

export default OwnerStackNavigation;
