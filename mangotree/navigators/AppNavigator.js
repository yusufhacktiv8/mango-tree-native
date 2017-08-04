import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import MainScreen from '../screens/Main';
import GameOverScreen from '../screens/GameOver';


export const AppNavigator = StackNavigator({
  Main: { screen: MainScreen },
  GameOver: { screen: GameOverScreen },
});

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);


const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Main'));
