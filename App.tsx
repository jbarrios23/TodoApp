import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';


interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

export default function App() {

  const [todos, setTodos] = useState<Todo[]>([]);
  console.log("task", todos)


  const addTodo = (task: string) => {
    setTodos([...todos, { id: Date.now(), task, completed: false }])
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, complete: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Task Manager</Text>

      {/* El resto del contenido */}
      <ScrollView contentContainerStyle={styles.content}>
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'flex-start', paddingTop: 50, },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, },
  content: { alignItems: 'center', },
});