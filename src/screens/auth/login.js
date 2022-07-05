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
import { loginUser, UserStateChange } from "../../redux/actions";
import { connect } from "react-redux";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailValidError, setEmailValidError] = useState("");
  const [showPassword, setShowPassword] = useState(true);

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
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handlerLogin = () => {
    if (email.length === 0) {
      return Alert.alert("Error", "Enter your email address");
    } else {
      props.loginUser(email, password);
      {
        props.UserStateChange();

        if (props.login.login === true) {
          props.UserStateChange();
          Alert.alert("Success", "Login successful.", [
            {
              text: "OK",
            },
          ]);
        }
      }
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
            Login
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
            Please login to enjoy more benefits and we won't let you go.
          </Text>
          {emailValidError ? (
            <Text style={{ color: "red", marginTop: 30 }}>
              {emailValidError}
            </Text>
          ) : null}
          <View style={[styles.input, { marginTop: 20 }]}>
            <TextInput
              placeholder="Email Address"
              placeholderTextColor={"rgba(255,255,255,0.5)"}
              style={{ color: "white" }}
              value={email}
              autoCorrect={true}
              autoCapitalize="none"
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
          <View style={[styles.input, { marginTop: 40 }]}>
            <TextInput
              secureTextEntry={showPassword}
              style={{ color: "white" }}
              placeholder="Password"
              placeholderTextColor={"rgba(255,255,255,0.5)"}
              onChangeText={setPassword}
              value={password}
            />
            {password.length !== 0 ? (
              <icons.FontAwesome
                name="eye"
                style={{ color: "#fed130", fontSize: 19, paddingRight: 12 }}
                onPress={handleShowPassword}
              />
            ) : (
              <icons.FontAwesome
                name="lock"
                style={{ color: "#fed130", fontSize: 19, paddingRight: 12 }}
              />
            )}
          </View>
          <TouchableOpacity style={styles.forgot}>
            <Text style={{ color: "#f2b917", paddingRight: 12 }}>
              Forget Password?
            </Text>
          </TouchableOpacity>
          <View style={{ marginTop: 17 }}>
            <Button title="Get Started" onPress={handlerLogin} />
            <Text
              style={{
                color: "rgba(255,255,255,0.5)",
                textAlign: "center",
                paddingVertical: 10,
              }}
            >
              or simply Login with{" "}
            </Text>
            <AppleButton title="Sign in with Apple">
              <icons.Zocial name="appstore" style={{ color: "white" }} />
            </AppleButton>
            <CustomButton title="Sign in with Google">
              <icons.Zocial name="google" style={{ color: "black" }} />
            </CustomButton>
          </View>
          <View style={styles.SignUp}>
            <Text style={{ color: "white" }}>Don't have account? </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Register")}
            >
              <Text style={{ color: "#f2b917" }}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
const mapToSate = ({ login }) => ({
  login: login,
});
export default connect(mapToSate, {
  loginUser: loginUser,
  UserStateChange: UserStateChange,
})(Login);
