import { StyleSheet, LogBox } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import RootNavigator from "./src/navigation/root.navigate";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
LogBox.ignoreAllLogs();
export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  app: {
    backgroundColor: "#121212",
  },
});
