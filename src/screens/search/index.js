import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as icons from "@expo/vector-icons";
import { styles } from "./styles";
import SearchNavigation from "../../navigation/search.navigate";
import { useState, useEffect } from "react";
function Search(props) {
  const [search, setSearch] = useState("");
  const handleSearch = (value) => {
    setSearch(value);
  };
  return (
    <SafeAreaView style={styles.main}>
      <View style={{ paddingHorizontal: 20 }}>
        <View style={[styles.input, { marginTop: 20 }]}>
          <TextInput
            placeholder="Search..."
            placeholderTextColor={"rgba(255,255,255,0.7)"}
            style={{ color: "white", width: 300 }}
            autoCorrect={true}
            autoCapitalize="none"
            value={search}
            onChangeText={(e) => {
              handleSearch(e);
            }}
          />
          <TouchableOpacity>
            <icons.Feather
              name="search"
              style={{ color: "#fed130", fontSize: 19, paddingRight: 12 }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <SearchNavigation searchText={search} props={props} />
    </SafeAreaView>
  );
}

export default Search;
