import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    padding: 30,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgba(36,39,43,255)",
  },
  white: {
    color: "#fff",
  },
  size18: {
    fontSize: 18,
  },
  fontBold: {
    fontWeight: "bold",
  },
  bgimg: {
    width: "100%",
    height: 170,
  },
  imgDiv: {
    width: 130,
    height: 130,
    alignSelf: "center",
    borderRadius: 90,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  imgCircle: {
    resizeMode: "cover",
    width: "100%",
    height: "100%",
    overflow: "hidden",
    alignItems: "center",
    alignContent: "center",
    borderRadius: 90,
    paddingTop: 20,
    marginTop: 0,
  },
  borderRadiusTop: {
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    backgroundColor: "rgba(36,39,43,255)",
    height: "100%",
  },
  intro: {
    borderBottomColor: "rgba(255,255,255,0.3)",
    borderWidth: 1,
    borderBottomWidth: 0.4,
    marginBottom: 20,
    paddingBottom: 20,
  },
  settings: {
    marginHorizontal: 30,
    margin: 10,
  },
  single: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 14,
  },
});
