import React, { useState } from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addNewTodo = () => {
    if (!title || !description) return;

    const newTodo = {
      id: Date.now().toString(),
      title,
      description,
      isDone: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setTitle("");
    setDescription("");
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((item) => item.id !== id));
  };

  const toggleTodoCompletion = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((item) =>
        item.id === id ? { ...item, isDone: !item.isDone } : item
      )
    );
  };

  const getFilteredTodos = () => {
    switch (selectedFilter) {
      case "inProgress":
        return todos.filter((todo) => !todo.isDone);
      case "done":
        return todos.filter((todo) => todo.isDone);
      default:
        return todos; 
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Todo App</Text>
      </View>
      <TodoForm
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        addNewTodo={addNewTodo}
      />
      {todos.length > 0 && (
        <TodoList
          filteredTodos={getFilteredTodos()} 
          toggleTodoCompletion={toggleTodoCompletion}
          deleteTodo={deleteTodo}
          selectedFilter={selectedFilter}
          handleFilterChange={setSelectedFilter} 
        />
      )}
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
});

export default Home;