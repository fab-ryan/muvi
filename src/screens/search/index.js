import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as icons from "@expo/vector-icons";
import { styles } from "./styles";
import SearchNavigation from "../../navigation/search.navigate";
function Search(props) {
  return (
    <SafeAreaView style={styles.main}>
      <View style={{ paddingHorizontal: 20 }}>
        <View style={[styles.input, { marginTop: 20 }]}>
          <TextInput
            placeholder="Search..."
            placeholderTextColor={"rgba(255,255,255,0.7)"}
            style={{ color: "white" }}
            autoCorrect={true}
            autoCapitalize="none"
          />
          <TouchableOpacity>
            <icons.Feather
              name="search"
              style={{ color: "#fed130", fontSize: 19, paddingRight: 12 }}
            />
          </TouchableOpacity>
        </View>
      </View>
      {/* <SearchNavigation /> */}
    </SafeAreaView>
  );
}

export default Search;
