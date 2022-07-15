import {
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import * as icons from "@expo/vector-icons";

export const AddedList = (props) => {
  //   const num = new Number(props.rate);
  console.log(props.image, "image");
  return (
    <TouchableOpacity style={styles.main} onPress={props.onPress}>
      <ImageBackground
        imageStyle={{ borderRadius: 2 }}
        style={styles.image}
        source={{
          uri: `https://image.tmdb.org/t/p/w500${props.image}`,
        }}
      >
        <View style={styles.description}>
          <icons.MaterialIcons
            name="hd"
            size={24}
            color="#fed130"
            style={{ top: 70 }}
          />
          {/* <Text style={styles.date} numberOfLines={1}>
            Date
          </Text> */}
        </View>
      </ImageBackground>
      <View>
        <Text
          style={{
            color: "white",
            fontSize: 16,
            fontWeight: "bold",
            flexWrap: "wrap",
          }}
        >
          {props.title}
        </Text>
        <Text style={{color: "rgba(255,255,255,0.5)", }}>{props.descrption.split("", 30)}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  main: {
    width: 200,
    height: 100,
    flex: 1,
    paddingHorizontal: 9,
    borderRadius: 2,
    marginBottom: 10,
    display: "flex",
    flexDirection: "row",
  },
  bgImage: {
    borderRadius: 2,
    width: "100%",
    height: 150,
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
  },
  rateContainer: {
    backgroundColor: "#f2b917",
    width: 30,
    height: 20,
    marginTop: 10,
    marginRight: 10,
    justifyContent: "flex-end",
    alignItems: "center",
    alignSelf: "flex-end",
    borderRadius: 2,
  },
});
