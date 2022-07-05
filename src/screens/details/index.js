import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Modal,
  Touchable,
  TouchableOpacity,
  Button,
} from "react-native";
import { Image } from "react-native";
import * as icons from "@expo/vector-icons";
import { useDispatch, connect } from "react-redux";
import { getSingleMovies } from "../../redux/actions";
import { useEffect } from "react";
function DetailScreen(props) {
  const { movieId } = props.route.params;
  const detail = props.details;
  var hours = Math.floor(detail.runtime / 60);
  var minutes = detail.runtime % 60;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSingleMovies(movieId));
  }, []);
  return (
    <ScrollView>
      <View
        style={{
          backgroundColor: "#26272b",
          width: "100%",
          height: "100%",
          alignItems: "center",
        }}
      >
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500${detail.poster_path}`,
          }}
          style={{ width: "100%", height: 250 }}
          blurRadius={6}
        />
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Home")}
          style={{ position: "absolute", top: 20, left: 20 }}
        >
          <icons.Ionicons name="arrow-back-outline" size={26} color="#fed130" />
        </TouchableOpacity>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500${detail.poster_path}`,
          }}
          style={{ position: "absolute", width: 150, height: 250, top: 80 }}
        />
        <Text
          style={{
            color: "#fff",
            paddingTop: 100,
            fontSize: 20,
            fontWeight: "900",
          }}
        >
          {detail.original_title}
        </Text>
        <Text style={{ color: "grey", paddingTop: 5 }}>
          {hours + "h " + minutes + " min"}
        </Text>
        <View style={{ flexDirection: "row" }}>
          {detail.genres?.map((genre, idx) => {
            return (
              <Text
                style={{ color: "grey", paddingTop: 5, paddingHorizontal: 3 }}
              >
                {genre.name}
              </Text>
            );
          })}
        </View>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            height: 40,
            minWidth: 340,
            backgroundColor: "#fed130",
            marginHorizontal: 20,
            marginVertical: 15,
            borderRadius: 5,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <icons.Feather name="play" size={16} color="black" />
          <Text style={{ paddingHorizontal: 5 }}>Play</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              height: 40,
              width: 150,
              backgroundColor: "#26272b",
              borderWidth: 1,
              borderColor: "#000",
              marginHorizontal: 20,
              marginVertical: 15,
              borderRadius: 5,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <icons.AntDesign name="plus" size={16} color="#fed130" />
            <Text style={{ paddingHorizontal: 5, color: "#fff" }}>My List</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              height: 40,
              width: 150,
              backgroundColor: "#26272b",
              marginHorizontal: 20,
              marginVertical: 15,
              borderWidth: 1,
              borderColor: "#000",
              borderRadius: 5,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <icons.Feather name="download" size={16} color="#fed130" />
            <Text style={{ paddingHorizontal: 5, color: "#fff" }}>
              Download
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={{ color: "#fff", marginHorizontal: 35 }}>
          {detail.overview}
        </Text>
        <Text
          style={{ color: "grey", marginHorizontal: 35, marginVertical: 10 }}
        >
          Cast: Tom Holland, Mark Wahlberg, Antonio Banderas, Sophia Ali, Tati
          Gabrielle, Steven Waddington, Pingi Moli, Tiernan Jones, Rudy Pankow,
          Jesús Evita, Georgia Goodman, Diarmaid Murtagh, Joseph Balderrama,
          Serena Posadino, Alana Boden, Jonathan Failla, Anthony Thomas, Peter
          Seaton-Clark
        </Text>
      </View>
    </ScrollView>
  );
}
const mapToState = ({ details }) => ({
  details: details.movieDetail,
});
export default connect(mapToState)(DetailScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
