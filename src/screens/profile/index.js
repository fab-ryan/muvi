import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as icons from "@expo/vector-icons";
import { styles } from "./styles";
import profile from "../../../assets/profile.jpeg";
import { logOut } from "../../redux/actions";
import { useDispatch } from "react-redux";
function Profile(props) {
  const dispatch = useDispatch();
  const logout = () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
      },
      {
        fontSize: 20,
        text: "OK",
        onPress: () => {
          dispatch(logOut());
        },
      },
    ]);
  };
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.header}>
        <Text style={[styles.white, styles.size18, styles.fontBold]}>More</Text>
        <icons.FontAwesome
          name="drivers-license-o"
          style={[styles.white, styles.size18, styles.fontBold]}
        />
      </View>
      <View>
        <ImageBackground
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/muvi-62bbf.appspot.com/o/Screen%20Shot%202022-07-08%20at%2011.42.32.png?alt=media&token=a149728b-083d-490f-9a55-d212fff06936",
          }}
          style={styles.bgimg}
        >
          <View style={styles.imgDiv}>
            <Image source={profile} style={styles.imgCircle} />
          </View>
        </ImageBackground>
        <View style={styles.borderRadiusTop}>
          <View style={styles.intro}>
            <Text
              style={{
                color: "white",
                fontSize: 24,
                marginHorizontal: 20,
                fontWeight: "bold",
              }}
            >
              Hi, Ryan Fabrice 👋🏾
            </Text>
            <Text
              style={{
                color: "rgba(255,255,255,0.5)",
                marginHorizontal: 20,
                fontSize: 12,
              }}
            >
              48 times watch movie on Muvi
            </Text>
          </View>
          <View style={styles.settings}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("AccountSetting")}
            >
              <View style={styles.single}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    fontSize: 17,
                  }}
                >
                  <icons.FontAwesome name="user-o" color={"white"} size={19} />
                  <Text
                    style={{ color: "white", fontSize: 17, paddingLeft: 10 }}
                  >
                    Account Settings
                  </Text>
                </View>
                <icons.AntDesign name="right" color={"white"} size={19} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("AppSetting")}
            >
              <View style={[styles.single, { marginTop: 15 }]}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    fontSize: 17,
                  }}
                >
                  <icons.Ionicons
                    name="settings-outline"
                    color={"white"}
                    size={19}
                  />
                  <Text
                    style={{ color: "white", fontSize: 17, paddingLeft: 10 }}
                  >
                    App Settings
                  </Text>
                </View>
                <icons.AntDesign name="right" color={"white"} size={19} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("RateusSetting")}
            >
              <View style={[styles.single, { marginTop: 15 }]}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    fontSize: 17,
                  }}
                >
                  <icons.AntDesign name="like2" color={"white"} size={19} />
                  <Text
                    style={{ color: "white", fontSize: 17, paddingLeft: 10 }}
                  >
                    Rate us on Appstore
                  </Text>
                </View>
                <icons.AntDesign name="right" color={"white"} size={19} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("HelpSetting")}
            >
              <View style={[styles.single, { marginTop: 15 }]}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    fontSize: 19,
                  }}
                >
                  <icons.Feather
                    name="alert-circle"
                    color={"white"}
                    size={19}
                  />
                  <Text
                    style={{ color: "white", fontSize: 17, paddingLeft: 10 }}
                  >
                    Help
                  </Text>
                </View>
                <icons.AntDesign name="right" color={"white"} size={19} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={logout}>
              <View style={[styles.single, { marginTop: 15 }]}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    fontSize: 19,
                  }}
                >
                  <icons.MaterialIcons
                    name="logout"
                    color={"white"}
                    size={19}
                  />
                  <Text
                    style={{ color: "white", fontSize: 17, paddingLeft: 10 }}
                  >
                    Log out
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Profile;
