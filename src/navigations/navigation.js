import * as React from 'react';
import {StackActions, CommonActions} from '@react-navigation/native';

export const isReadyRef = React.createRef();
export const navigationRef = React.createRef();

export function navigate(name, params) {
  if (isReadyRef.current && navigationRef.current) {
    navigationRef.current.navigate(name, params);
  }
}

export function goBack() {
  if (isReadyRef.current && navigationRef.current) {
    navigationRef.current.goBack();
  }
}

export function replace(name, params) {
  if (isReadyRef.current && navigationRef.current) {
    navigationRef.current.dispatch(StackActions.replace(name, params));
  }
}

export function reset(name, params) {
  if (isReadyRef.current && navigationRef.current) {
    navigationRef.current.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name, params}],
      }),
    );
  }
}

export function popToTop() {
  if (isReadyRef.current && navigationRef.current) {
    navigationRef.current.dispatch(StackActions.popToTop());
  }
}

export function resetWithHome(name, params, route_initial = 'owner_top_tab') {
  if (isReadyRef.current && navigationRef.current) {
    navigationRef.current.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{name: route_initial}, {name, params}],
      }),
    );
  }
}
