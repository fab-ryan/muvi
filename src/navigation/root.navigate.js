import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./app.navigate";
function RootNavigator() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
export default RootNavigator;
