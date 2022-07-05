import {
  View,
  Image,
  StyleSheet,
  ImageBackground,
  Text,
  TouchableHighlight,
} from "react-native";
import logo from "../../../assets/logo.png";
import { SafeAreaView } from "react-native-safe-area-context";
import bg from "../../../assets/bg.png";
import { Button, CustomButton, AppleButton } from "../../components/button";
import * as icons from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { SignUpWithGoogle } from "../../redux/actions";
function IntroLogin(props) {
  const dispatch = useDispatch();
  const handleSignUpWithGoogle = () => {
    dispatch(SignUpWithGoogle());
  };
  return (
    <SafeAreaView style={{ flex: 1, color: "white" }}>
      <ImageBackground
        source={bg}
        style={[styles.main, { width: "101%", height: "100%" }]}
      >
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image source={logo} style={styles.logo} />
        </View>
        <View style={styles.introBody}>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 25 }}>
            Welcome to Muvi{" "}
          </Text>
          <Text
            style={{
              color: "white",
              fontWeight: "300",
              fontSize: 17,
              textAlign: "center",
            }}
          >
            Look back and reflect on your memories and growth over Time
          </Text>
          <AppleButton title="Sign up with Apple">
            <icons.Zocial name="appstore" style={{ color: "white" }} />
          </AppleButton>
          <CustomButton
            title="Sign up with Google"
            onPress={handleSignUpWithGoogle}
          >
            <icons.Zocial name="google" style={{ color: "black" }} />
          </CustomButton>
          <Button
            title="Sign up"
            onPress={() => props.navigation.navigate("Register")}
          ></Button>
          <View style={{ flexDirection: "row", marginTop: 19 }}>
            <Text style={{ color: "white", marginRight: 10 }}>
              Already have account?
            </Text>
            <TouchableHighlight
              onPress={() => props.navigation.navigate("Login")}
            >
              <Text style={{ color: "#fed130" }}>Sign In</Text>
            </TouchableHighlight>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
export default IntroLogin;
const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  logo: {
    width: 220,
    height: 80,
    paddingVertical: 40,
    marginTop: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  introBody: {
    marginTop: 180,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  title: {},
});
