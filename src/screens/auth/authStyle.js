import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  container: {
    backgroundColor: "#27262a",
    flex: 1,
    paddingHorizontal: 20,
  },
  touchable: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  logo: {
    width: 180,
    height: 80,
    paddingVertical: 40,
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  text_white: {
    color: "white",
  },
  align_center: {
    justifyContent: "center",
    textAlign: "center",
  },
  input: {
    borderColor: "rgba(255,255,255,0.5)",
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    color: "white",
    paddingVertical: 1,
  },
  forgot: {
    alignItems: "flex-end",
    marginTop: 10,
  },
  SignUp: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
});
