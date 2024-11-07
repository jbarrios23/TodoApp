import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { loadTodos, saveTodos } from './data/storageService';



interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

export default function App() {

  const [todos, setTodos] = useState<Todo[]>([]);
  console.log("task", todos)

  useEffect(()=>{
    const fetchTodos=async ()=>{
      const loadedtodos= await loadTodos();
      setTodos(loadedtodos);
    };
    fetchTodos();
  },[]);

  useEffect(()=>{
    saveTodos(todos);
  },[todos])


  const addTodo = (task: string) => {
    setTodos([...todos, { id: Date.now(), task, completed: false }])
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Task Manager</Text>      
      <ScrollView contentContainerStyle={styles.content}>
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create(
  { container: { flex: 1, backgroundColor: '#344955', alignItems: 'center', justifyContent: 'flex-start', paddingTop: 50, },
    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, }, 
    content: { width: '100%', alignItems: 'center', },
    inputContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 20, }, 
    input: { height: 40, borderColor: '#cccccc', borderWidth: 1, borderRadius: 20, paddingLeft: 10, width: '70%', marginRight: 10, backgroundColor: '#ffffff', },
    button: { backgroundColor: '#007BFF', padding: 10, borderRadius: 20, alignItems: 'center', justifyContent: 'center', }, 
    buttonText: { color: '#000000', fontSize: 16, }, 
    taskContainer: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 10, marginVertical: 5, backgroundColor: '#ffffff', borderRadius: 10, width: '90%', elevation: 1, }, 
    taskText: { fontSize: 18, }, completedTaskText: { textDecorationLine: 'line-through', color: 'gray', }, });