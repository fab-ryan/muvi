import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  main: {
    backgroundColor: "#121212",
    flex: 1,
  },

  containerStyle: {
    justifyContent: "center",
    alignContent: "center",
    paddingBottom: 110,
    flex: 1,
  },
  title: {
    color: "#fff",
    fontSize: 27,
    fontWeight: "900",
    paddingHorizontal: 20,
    width: "80%",
  },
  description: {
    color: "#fff",
    textAlign: "justify",
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
    fontWeight: "300",
    fontSize: 17,
  },
  getStarted: {
    bottom: 10,
    padding: 10,
  },
});
export default styles;
