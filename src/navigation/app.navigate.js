import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import OnBoardScreen from "../screens/onboard";
import Intro from "../screens/intro";
import IntroLogin from "../screens/auth/introLogin";
import Login from "../screens/auth/login";
import Register from "../screens/auth/register";
import MainNavigator from "./main.navigate";
import DetailScreen from "../screens/details";
import { useSelector } from "react-redux";
const Stack = createStackNavigator();
function AppNavigator() {
  const { login } = useSelector((state) => state.login);
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {login ? (
        <>
          <Stack.Screen name="Main" component={MainNavigator} />
          <Stack.Screen name="Details" component={DetailScreen} />
        </>
      ) : (
        <>
          <Stack.Screen name="Intro" component={Intro} />
          <Stack.Screen name="OnBoard" component={OnBoardScreen} />
          <Stack.Screen name="IntroLogin" component={IntroLogin} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
        </>
      )}
    </Stack.Navigator>
  );
}
export default AppNavigator;
