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
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Todo app </Text>
      </View>
      <View>
        <TextInput placeholder="Enter title" style={styles.input}></TextInput>
        <TextInput
          placeholder="Enter Description"
          style={styles.input}
        ></TextInput>
      </View>
      <View>
        <TouchableOpacity activeOpacity={0.8} style={styles.submitBtn}>
          <Text style={styles.text}>Submit</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.dividerLine}></View>
      <View style={styles.btnContainer}>
        <View>
          <TouchableOpacity activeOpacity={0.8} style={styles.activeBtn}>
            <Text style={styles.activeText}>All</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity activeOpacity={0.8} style={styles.btn}>
            <Text style={styles.text}>In progress</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity activeOpacity={0.8} style={styles.btn}>
            <Text style={styles.text}>Done</Text>
          </TouchableOpacity>
        </View>
      </View>
      <FlatList data={todo} keyExtractor={(item) => item.id} renderItem={({item})=>(
        <Text style={styles.todo}>{item.title}</Text>
      )}/>
    </View>
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
