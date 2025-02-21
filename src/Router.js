import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./Home";
import TodoDetails from "./TodoDetails";

const Stack = createNativeStackNavigator();
const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Todo App" }}
        />
        <Stack.Screen name="Todo Details" component={TodoDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
