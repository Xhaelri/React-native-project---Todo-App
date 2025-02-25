// Home.js
import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { loadTodos, addTodo, deleteTodo, toggleTodoCompletion, setFilter } from './Redux/slices/todosSlice'; 
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const { todos, selectedFilter } = useSelector((state) => state.todos); 
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    dispatch(loadTodos());
  }, [dispatch]);

  const addNewTodo = () => {
    if (!title || !description) return;

    const newTodo = {
      id: Date.now().toString(),
      title,
      description,
      isDone: false,
    };

    dispatch(addTodo(newTodo)); 
    setTitle('');
    setDescription('');
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id)); 
  };

  const handleToggleTodoCompletion = (id) => {
    dispatch(toggleTodoCompletion(id));
  };

  const handleFilterChange = (filter) => {
    dispatch(setFilter(filter));
  };

  const getFilteredTodos = () => {
    switch (selectedFilter) {
      case 'inProgress':
        return todos.filter((todo) => !todo.isDone);
      case 'done':
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
          toggleTodoCompletion={handleToggleTodoCompletion}
          deleteTodo={handleDeleteTodo}
          selectedFilter={selectedFilter}
          handleFilterChange={handleFilterChange}
          navigation={navigation}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'start',
    paddingTop: 50,
  },
  title: {
    fontSize: 36,
    fontFamily: 'Roboto',
  },
});

export default Home;