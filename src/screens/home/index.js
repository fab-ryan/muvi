import { View, Text, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import logo from "../../../assets/smallest.png";
import * as icons from "@expo/vector-icons";
import HomeNavigation from "../../navigation/home.navigate";
function Home(props) {
  return (
    <SafeAreaView style={styles.main}>
      <View style={{ flex: 1 }}>
        <View style={styles.header}>
          <Image source={logo} style={styles.logo} />

          <View style={styles.icons}>
            <TouchableOpacity>
              <icons.Feather
                name="bookmark"
                color="rgb(255,255,255)"
                size={19}
                style={{ paddingRight: 15 }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <icons.Feather name="bell" color="rgb(255,255,255)" size={19} />
            </TouchableOpacity>
          </View>
        </View>

        <HomeNavigation />
      </View>
    </SafeAreaView>
  );
}

export default Home;
