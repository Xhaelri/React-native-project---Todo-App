import {
  Pressable,
  Text,
  TouchableOpacity,
  View,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { FlatList, StyleSheet, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";

const Home = () => {
  const navigation = useNavigation();
  const [todo, setTodo] = useState([
    { id: 1, title: "Todo 1" },
    { id: 2, title: "Todo 2" },
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Todo App</Text>
      </View>
      <View>
        <TextInput placeholder="Enter title" style={styles.input} />
        <TextInput placeholder="Enter Description" style={styles.input} />
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
      <FlatList
        data={todo}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.todoContainer}>
            <Pressable
              onPress={() => navigation.navigate("Todo Details", item)}
              style={styles.todoPressable}
            >
              <Text style={styles.todo}>{item.title}</Text>
            </Pressable>
            <View style={styles.iconContainer}>
              {Platform.OS === "ios" ? (
                <AntDesign name="checkcircleo" size={24} color="black" />
              ) : (
                <AntDesign name="checkcircle" size={24} color="black" />
              )}
              {Platform.OS === "ios" ? (
                <EvilIcons name="trash" size={24} color="black" />
              ) : (
                <Feather name="trash" size={24} color="black" />
              )}
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

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
  activeText: {
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
  activeBtn: {
    backgroundColor: "#fff",
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 15,
    borderColor: "black",
    borderWidth: 1,
  },
  todoContainer: {
    borderWidth: 1,
    borderColor: "#aeaeae",
    borderRadius: 5,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 300,
    marginVertical: 10,
  },
  todoPressable: {
    flex: 1,
  },
  todo: {
    textAlign: "start",
    height: 50,
    padding: 10,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});

export default Home;
