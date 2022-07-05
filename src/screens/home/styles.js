import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  header: {
    width: "100%",
    height: 40,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
    marginBottom: 20,
    alignContent: "center",
  },
  logo: {
    width: 80,
    height: 80,
    resizeMode: "contain",
  },
  icons: {
    flexDirection: "row",
    paddingTop: 29,
    width: 80,
    height: 80,
    justifyContent: "space-between",
  },
});
