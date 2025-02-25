// App.js
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/Home';
import TodoDetails from './src/TodoDetails';
import store from './src/Redux/store'; // Import the Redux store

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Todo Details" component={TodoDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}