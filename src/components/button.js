import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
export const Button = (props) => {
  return (
    <TouchableOpacity style={styles.mainButton} onPress={props.onPress}>
      <Text style={{ color: "#121212", fontSize: 16 }}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export const CustomButton = (props) => {

  return (
    <TouchableOpacity style={styles.CustomButton} onPress={props.onPress}>
      {props.children}
      <Text style={{ color: "#121212", fontSize: 16, marginLeft: 12 }}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};
export const AppleButton = (props) => {
  return (
    <TouchableOpacity
      style={[styles.CustomButton, { backgroundColor: "#121212" }]}
      onPress={props.onPress}
    >
      {props.children}
      <Text style={{ color: "white", fontSize: 16, marginLeft: 12 }}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};
export const GenresButton = (props) => {
  return (
    <TouchableOpacity
      key={props.id}
      style={[styles.genrbtn, { backgroundColor: "#202022" }]}
      onPress={props.onPress}
    >
      <Text style={{ color: "white", fontSize: 16, paddingHorizontal: 10 }}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#fed130",
  },
  mainButton: {
    backgroundColor: "#fed130",
    width: "90%",
    height: 40,
    borderRadius: 7,
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center",
    alignItems: "center",
    color: "#121212",
  },
  CustomButton: {
    backgroundColor: "white",
    width: "90%",
    height: 40,
    borderRadius: 7,
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center",
    alignItems: "center",
    color: "#121212",
    flexDirection: "row",
    margin: 10,
  },
  genrbtn: {
    height: 40,
    borderRadius: 7,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    color: "#121212",
    flexDirection: "row",
    margin: 5,
    borderColor: "rgba(255,255,255,0.3)",
    borderWidth: 1,
  },
});
