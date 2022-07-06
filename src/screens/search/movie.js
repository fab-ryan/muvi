import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { styles } from "./styles";
import search from "../../../assets/search.png";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { FlatGrid } from "react-native-super-grid";
import { getSearchAllMovies } from "../../redux/actions";
function MovieSearch(props) {
  const searchText = props.searchText;
  const data = props.results.result;

  useEffect(() => {
    if (searchText.lenght !== 1) props.getSearchAllMovies(searchText);
  }, [searchText]);
  return (
    <>
      {searchText ? (
        <Text style={styles.textplaceholder}>
          showing result of {searchText}
        </Text>
      ) : (
        <Text></Text>
      )}

      <View>
        {data && searchText !== "" ? (
          <FlatGrid
            itemDimension={130}
            data={data.results}
            // style={styless.gridView}
            spacing={10}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                style={styles.main}
                onPress={() =>
                  props.props.navigation.navigate("Details", {
                    movieId: item.id,
                  })
                }
              >
                <ImageBackground
                  source={{
                    uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
                  }}
                  style={styles.bgImage}
                >
                  <View style={styles.rateContainer}>
                    <Text style={{ fontWeight: "bold" }}>HD</Text>
                  </View>
                </ImageBackground>
                <View>
                  <Text style={{ color: "rgba(255,255,255,1)" }}>
                    {item.original_title}
                  </Text>
                  <Text
                    style={{ color: "rgba(255,255,255,0.5)", fontSize: 11 }}
                  >
                    {item.overview?.split("", 30)}....
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          />
        ) : (
          <ImageBackground
            source={search}
            style={styles.search}
          ></ImageBackground>
        )}
      </View>
    </>
  );
}
const mapState = ({ search }) => ({
  results: search,
});

export default connect(mapState, { getSearchAllMovies: getSearchAllMovies })(
  MovieSearch
);
