import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import CustomerLogin from './screens/CustomerLogin';
import WorkerLogin from './screens/WorkerLogin';
import CustomerRegisterPage from './screens/CustomerRegisterPage';
import WorkerRegisterPage from './screens/WorkerRegisterPage';
import Dashboard from './screens/Dashboard';
import WorkerDashboard from './screens/WorkerDashboard';

import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';


const Stack = createStackNavigator();

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="HomeScreen" component={HomeScreen}  options= {{title:'Flat-Bait'}} />
          <Stack.Screen name="CustomerLogin" component={CustomerLogin} />
          <Stack.Screen name="WorkerLogin" component={WorkerLogin} />
          <Stack.Screen name="CustomerRegisterPage" component={CustomerRegisterPage} />
          <Stack.Screen name="WorkerRegisterPage" component={WorkerRegisterPage} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="WorkerDashboard" component={WorkerDashboard} />
        </Stack.Navigator>      
      </NavigationContainer>
    );
  }
}
