import { View, Text, ScrollView, TouchableHighlight } from "react-native";
import { GenresButton, CardMovie, TopRate } from "../../../components/";
import { connect } from "react-redux";
import {
  getAllGenresMovies,
  getAllLatestMoviesTvSeries,
  getTopRateMovies,
  getAllPopularMovies,
  getAllPopularSeries,
} from "../../../redux/actions";
import { useState, useEffect } from "react";
import { styles } from "./styles";
function Featured(props) {
  const { genres } = props.genres;
  const { results } = props.latest;

  useEffect(() => {
    props.getAllGenresMovies();
    props.getAllLatestMoviesTvSeries();
    props.getTopRateMovies();
    props.getAllPopularMovies();
    props.getAllPopularSeries();
  }, []);

  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ paddingHorizontal: 20 }}
      >
        {props.isLoaded ? (
          genres.map((genre, idx) => {
            return <GenresButton title={genre.name} id={idx} key={idx} />;
          })
        ) : (
          <Text></Text>
        )}
      </ScrollView>
      <ScrollView>
        <View style={[styles.new_movies, { marginTop: 12 }]}>
          <Text style={styles.bold}>New Release</Text>
          <TouchableHighlight>
            <Text style={styles.normal}>View more</Text>
          </TouchableHighlight>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ paddingHorizontal: 15, marginTop: 5 }}
        >
          {props.isLoadedLatest ? (
            results.map((late, idx) => {
              return (
                <CardMovie
                  image={late.backdrop_path}
                  key={idx}
                  rate={late.vote_average}
                  id={late.id}
                  onPress={() =>
                    props.navigation.navigate("Details", { movieId: late.id })
                  }
                />
              );
            })
          ) : (
            <Text>""</Text>
          )}
        </ScrollView>
        <View style={[styles.new_movies, { marginTop: -25 }]}>
          <Text style={styles.bold}>Made for you</Text>
          <TouchableHighlight>
            <Text style={styles.normal}>View more</Text>
          </TouchableHighlight>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ paddingHorizontal: 15, marginTop: 5 }}
        >
          {props.isLoadedTop ? (
            props.toprate.results.map((late, idx) => {
              return (
                <TopRate
                  image={late.backdrop_path}
                  key={idx}
                  rate={late.vote_average}
                  id={late.id}
                  onPress={() =>
                    props.navigation.navigate("Details", { movieId: late.id })
                  }
                />
              );
            })
          ) : (
            <Text>""</Text>
          )}
        </ScrollView>
        <View style={[styles.new_movies, { marginTop: -25 }]}>
          <Text style={styles.bold}>Popural Movies</Text>
          <TouchableHighlight>
            <Text style={styles.normal}>View more</Text>
          </TouchableHighlight>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ paddingHorizontal: 15, marginTop: 5 }}
        >
          {props.isLoadedPopular ? (
            props.movies.results?.map((late, idx) => {
              return (
                <TopRate
                  image={late.backdrop_path}
                  key={idx}
                  rate={late.vote_average}
                  id={late.id}
                  onPress={() =>
                    props.navigation.navigate("Details", { movieId: late.id })
                  }
                />
              );
            })
          ) : (
            <Text>""</Text>
          )}
        </ScrollView>
        <View style={[styles.new_movies, { marginTop: -25 }]}>
          <Text style={styles.bold}>Popural Series</Text>
          <TouchableHighlight>
            <Text style={styles.normal}>View more</Text>
          </TouchableHighlight>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ paddingHorizontal: 15, marginTop: 5 }}
        >
          {props.isLoadedPopular ? (
            props.series.results?.map((late, idx) => {
              return (
                <TopRate
                  image={late.backdrop_path}
                  key={idx}
                  rate={late.vote_average}
                  id={late.id}
                />
              );
            })
          ) : (
            <Text>""</Text>
          )}
        </ScrollView>
      </ScrollView>
    </View>
  );
}
const mapToSate = ({ genres, latest, toprate, popular }) => ({
  genres: genres.response,
  isLoaded: genres.isLoaded,
  isLoading: genres.isLoading,
  latest: latest.response,
  isLoadedLatest: latest.isLoaded,
  isLoadingLatest: latest.isLoading,
  isLoadedTop: toprate.isLoaded,
  toprate: toprate.response,
  isLoadingTop: toprate.response,
  isLoadedPopular: popular.isLoaded,
  isLoadingPopular: popular.isLoading,
  movies: popular.movies,
  series: popular.series,
});
const mapToProps = {
  getAllGenresMovies: getAllGenresMovies,
  getAllLatestMoviesTvSeries: getAllLatestMoviesTvSeries,
  getTopRateMovies: getTopRateMovies,
  getAllPopularMovies: getAllPopularMovies,
  getAllPopularSeries: getAllPopularSeries,
};
export default connect(mapToSate, mapToProps)(Featured);
