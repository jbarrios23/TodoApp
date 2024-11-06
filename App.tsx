import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TodoForm from './components/TodoForm';

interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

export default function App() {

  const [todos, setTodos] = useState<Todo[]>([]);
  console.log("task",todos)


  const addTodo=(task:string)=>{
    setTodos([...todos, { id: Date.now(), task, completed: false }])
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Task Manager</Text>

      {/* El resto del contenido */}
      <View style={styles.content}>
        <TodoForm addTodo={addTodo}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center', // Centra el contenido horizontalmente
    justifyContent: 'flex-start', // Alinea los elementos al inicio (arriba)
    paddingTop: 50, // Opcional, solo para dar espacio al top
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20, // Añade un margen debajo del texto para separarlo del contenido
  },
  content: {
    flexGrow: 1, // Esto hace que el contenido ocupe el espacio restante debajo del texto
    justifyContent: 'center', // Alinea el contenido centrado en el espacio disponible
    alignItems: 'center', // Centra el contenido horizontalmente
  },
});
