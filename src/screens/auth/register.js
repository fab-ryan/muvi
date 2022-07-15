import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, CustomButton, AppleButton } from "../../components/button";
import { styles } from "./authStyle";
import * as icons from "@expo/vector-icons";
import logo from "../../../assets/logo.png";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { RegisterUser } from "../../redux/actions";
function Register(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailValidError, setEmailValidError] = useState("");

  const handleValidEmail = (val) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

    if (val.length === 0) {
      setEmailValidError("email address must be enter");
    } else if (reg.test(val) === false) {
      setEmailValidError("enter valid email address");
    } else if (reg.test(val) === true) {
      setEmailValidError("");
    }
  };
  const handleRegister = () => {
    if (password != confirmPassword)
      return Alert.alert("Error", "Password not match");
    else if (password == "" || confirmPassword == "") {
      return Alert.alert("Error", "Password must be at least be 8 characters");
    } else if (password.length < 8) {
      return Alert.alert("Error", "Password  is less than 8 characters");
    } else {
      props.RegisterUser(email, password);
    }
  };
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.touchable}
          onPress={() => props.navigation.navigate("IntroLogin")}
        >
          <icons.Ionicons
            name="arrow-back-outline"
            style={{ color: "#fed130", fontSize: 20, width: 40 }}
          />
          <Text style={{ color: "white", fontSize: 26, fontWeight: "800" }}>
            Register
          </Text>
        </TouchableOpacity>
        <View>
          <Image source={logo} style={styles.logo} />
          <Text
            style={[
              styles.text_white,
              styles.align_center,
              { fontSize: 15, marginTop: 25 },
            ]}
          >
            Sign Up to discover all our movies and enjoy our features
          </Text>
          {emailValidError ? (
            <Text style={{ color: "red", marginTop: 30 }}>
              {emailValidError}
            </Text>
          ) : null}
          <View style={[styles.input, { marginTop: 13 }]}>
            <TextInput
              placeholder="Email Address"
              placeholderTextColor={"rgba(255,255,255,0.5)"}
              style={{ color: "white", width: "90%" }}
              value={email}
              onChangeText={(value) => {
                setEmail(value);
                handleValidEmail(value);
              }}
            />
            <icons.Zocial
              name="email"
              style={{ color: "#fed130", fontSize: 19, paddingRight: 12 }}
            />
          </View>
          <View style={[styles.input, { marginTop: 13 }]}>
            <TextInput
              secureTextEntry={true}
              style={{ color: "white", width: "90%" }}
              placeholder="Password"
              placeholderTextColor={"rgba(255,255,255,0.5)"}
              value={password}
              onChangeText={setPassword}
            />
            <icons.FontAwesome
              name="lock"
              style={{ color: "#fed130", fontSize: 19, paddingRight: 12 }}
            />
          </View>
          <View style={[styles.input, { marginTop: 13 }]}>
            <TextInput
              secureTextEntry={true}
              style={{ color: "white", width: "90%" }}
              placeholder="Confirm Password"
              placeholderTextColor={"rgba(255,255,255,0.5)"}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
            <icons.FontAwesome
              name="lock"
              style={{ color: "#fed130", fontSize: 19, paddingRight: 12 }}
            />
          </View>
          <View style={{ marginTop: 17 }}>
            <Button title="Sign up" onPress={handleRegister} />
            <View style={{ flexDirection: "row", marginTop: 10 }}>
              <Text style={{ color: "white", fontSize: 12 }}>
                By signing up I accept{" "}
              </Text>
              <Text style={{ color: "#f2b917", fontSize: 12 }}>
                {" "}
                Terms of use
              </Text>
              <Text style={{ color: "white", fontSize: 12 }}> and </Text>
              <Text style={{ color: "#f2b917", fontSize: 12 }}>
                {" "}
                privacy policy
              </Text>
            </View>
            <Text
              style={{
                color: "rgba(255,255,255,0.5)",
                textAlign: "center",
                paddingVertical: 10,
              }}
            >
              or simply Login with{" "}
            </Text>
            <AppleButton title="Sign up with Apple">
              <icons.Zocial name="appstore" style={{ color: "white" }} />
            </AppleButton>
            <CustomButton title="Sign up with Google">
              <icons.Zocial name="google" style={{ color: "black" }} />
            </CustomButton>
          </View>
          <View style={styles.SignUp}>
            <Text style={{ color: "white" }}>I already have an account? </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Login")}
            >
              <Text style={{ color: "#f2b917" }}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
const mapToState = ({ login }) => ({
  login: login,
});
export default connect(mapToState, { RegisterUser: RegisterUser })(Register);
