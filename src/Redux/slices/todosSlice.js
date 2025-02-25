import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
    selectedFilter: "all",
  },
  reducers: {
    setTodos: (state, action) => {
      state.todos = action.payload;
    },
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleTodoCompletion: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.isDone = !todo.isDone;
      }
    },
    setFilter: (state, action) => {
      state.selectedFilter = action.payload;
    },
  },
});

export const {
  setTodos,
  addTodo,
  deleteTodo,
  toggleTodoCompletion,
  setFilter,
} = todosSlice.actions;

export const loadTodos = () => async (dispatch) => {
  try {
    const storedTodos = await AsyncStorage.getItem("todos");
    if (storedTodos) {
      dispatch(setTodos(JSON.parse(storedTodos)));
    }
  } catch (error) {
    console.error("Failed to load todos:", error);
  }
};

export const saveTodos = () => async (dispatch, getState) => {
  try {
    const { todos } = getState().todos;
    await AsyncStorage.setItem("todos", JSON.stringify(todos));
  } catch (error) {
    console.error("Failed to save todos:", error);
  }
};

export default todosSlice.reducer;
