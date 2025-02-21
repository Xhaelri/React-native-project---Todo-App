import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Router from "./src/Router";

export default function App() {
  const [todo, setTodo] = useState([
    {
      id: 1,
      title: "Todo 1",
    },
    {
      id: 2,
      title: "Todo 2",
    },
  ]);

  return (
    
<Router />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "start",
    paddingTop: 50,
  },
  title: {
    fontSize: 36,
    fontFamily: "Roboto",
  },
  input: {
    borderWidth: 1,
    borderColor: "#aeaeae",
    width: 300,
    marginVertical: 10,
    height: 50,
    padding: 10,
    borderRadius: 5,
  },
  submitBtn: {
    width: 170,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderRadius: 10,
  },
  text: {
    color: "white",
  },
  activeText:{
    color: "black",
  },
  dividerLine: {
    height: 1,
    width: "90%",
    backgroundColor: "#aeaeae",
    marginVertical: 15,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
  },
  btn: {
    width: 100,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 15,
  },
  activeBtn:{
    backgroundColor: "#fff",
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 15,
    borderColor: "black",
    borderWidth: 1,
  },
  todo: {
    borderWidth: 1,
    borderColor: "#aeaeae",
    width: 300,
    textAlign: "center",
    marginVertical: 10,
    height: 50,
    padding: 10,
    borderRadius: 5,
  }
});
