import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Modal,
  Touchable,
  TouchableOpacity,
  Button,
  ImageBackground,
} from "react-native";
import * as icons from "@expo/vector-icons";
import { useDispatch, connect } from "react-redux";
import {
  getSingleMovies,
  addMyList,
  MovieDetailAdded,
  removeToMyList,
  playVideo,
} from "../../redux/actions";
import Trailer from "../../components/trailer";
import { useEffect, useState } from "react";
function DetailScreen(props) {
  const { movieId } = props.route.params;
  const detail = props.details;
  var hours = Math.floor(detail.runtime / 60);
  var minutes = detail.runtime % 60;
  const [playing, setPlaying] = useState(false);
  useEffect(() => {
    dispatch(getSingleMovies(movieId));
    dispatch(playVideo(movieId));
    props.MovieDetailAdded(movieId, props.userData.uid);
  }, []);

  const handlePlay = () => {
    setPlaying(!playing);
  };
  console.log(props.video.video);
  const dispatch = useDispatch();
  const payload = {
    movieDetail: detail,
    userId: props.userData.uid,
    movieId,
  };
  let youtubekey = props.video.video.results?.filter(
    ({ name }) => name === "Official Trailer" || name === "Trailer"
  );
  console.log(youtubekey);
  const handleAddMyList = () => {
    props.addMyList(payload);
  };
  const handleRemoveMyList = () => {
    props.removeToMyList(movieId);
  };
  return (
    <ScrollView style={{ backgroundColor: "rgba(36,39,43,255)" }}>
      <View
        style={{
          backgroundColor: "#26272b",
          width: "100%",
          height: 600,
          alignItems: "center",
          flex: 1,
        }}
      >
        <ImageBackground
          source={{
            uri: `https://image.tmdb.org/t/p/w500${detail.poster_path}`,
          }}
          style={{ width: "100%", height: "100%" }}
          blurRadius={0}
        >
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Home")}
            style={{ position: "absolute", top: 50, left: 20 }}
          >
            <icons.Ionicons
              name="arrow-back-outline"
              size={26}
              color="#fed130"
            />
          </TouchableOpacity>
          <View
            style={{
              paddingHorizontal: 10,
              flex: 1,
              top: "55%",
              marginVertical: 50,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 1,
              shadowRadius: 1.41,
              elevation: 2,
              backgroundColor: "rgba(36,39,43,0.6)",
            }}
            // blurRadius={3}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: 20,
                fontWeight: "900",
              }}
            >
              {detail.original_title}
            </Text>
            <Text style={{ color: "grey", paddingTop: 5 }}>
              {hours + "h " + minutes + " min"} HD
            </Text>
            <View style={{ flexDirection: "row" }}>
              {detail.genres?.map((genre, idx) => {
                return (
                  <Text
                    style={{
                      color: "grey",
                      paddingTop: 5,
                      paddingHorizontal: 3,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <View
                      style={{
                        width: 5,
                        height: 5,
                        borderRadius: 90,
                        backgroundColor: "#fed130",
                        alignSelf: "center",
                        marginBottom: 10,
                      }}
                    ></View>
                    {genre.name}
                  </Text>
                );
              })}
            </View>

            <View style={{ flexDirection: "row" }}>
              {props.isAdded ? (
                <TouchableOpacity
                  onPress={() => handleRemoveMyList()}
                  style={{
                    flexDirection: "row",
                    height: 40,
                    width: 150,
                    backgroundColor: "#fed130",
                    borderWidth: 1,
                    borderColor: "#000",
                    marginHorizontal: 20,
                    marginVertical: 15,
                    borderRadius: 5,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <icons.AntDesign name="minus" size={16} color="black" />
                  <Text style={{ paddingHorizontal: 5, color: "black" }}>
                    Remove
                  </Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => handleAddMyList()}
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
                  <Text style={{ paddingHorizontal: 5, color: "#fff" }}>
                    My List
                  </Text>
                </TouchableOpacity>
              )}
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  height: 40,
                  width: 150,
                  backgroundColor: "#fed130",
                  marginVertical: 15,
                  borderWidth: 1,
                  borderColor: "#000",
                  borderRadius: 5,
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={handlePlay}
              >
                {playing ? (
                  <icons.AntDesign name="pause" size={16} color="black" />
                ) : (
                  <icons.AntDesign name="play" size={16} color="black" />
                )}
                <Text style={{ paddingHorizontal: 5, color: "black" }}>
                  {playing ? "Stop" : "Play"}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
      <View style={{ marginTop: 12 }}>
        <Text style={{ color: "#fff", marginHorizontal: 35 }}>
          {detail.overview}
        </Text>
        {playing ? (
          <View
            style={{
              color: "grey",
              marginVertical: 0,
              width: "100%",
              height: 300,
            }}
          >
            {youtubekey?.map((video, index) => {
              return <Trailer key={index} movie={video.key} />;
            })}
          </View>
        ) : (
          <Text></Text>
        )}
        <View>
          <Text style={{ color: "#fff", marginHorizontal: 35, marginTop: 10 }}>
            Related Movies
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
const mapToState = ({ details, login, play }) => ({
  details: details.movieDetail,
  userData: login.userData,
  isAdded: details.movieAddedToMyList,
  video: play,
});
export default connect(mapToState, {
  addMyList: addMyList,
  MovieDetailAdded: MovieDetailAdded,
  removeToMyList: removeToMyList,
})(DetailScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
