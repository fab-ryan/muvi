import { View, Image, StyleSheet } from "react-native";
import logo from "../../../assets/logo.png";
function Intro(props) {
  setTimeout(() => {
    props.navigation.navigate("OnBoard");
  }, 2000);
  return (
    <View style={styles.main}>
      <Image source={logo} style={styles.image} />
    </View>
  );
}
export default Intro;
const styles = StyleSheet.create({
  main: {
    backgroundColor: "#27262a",
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  image: {
    height: 100,
    width: 300,
  },
});
