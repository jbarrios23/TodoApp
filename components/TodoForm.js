import React, { useState } from "react";
import { View, TextInput, StyleSheet,TouchableOpacity,Text } from "react-native";

function TodoForm({ addTodo }) {

    const [input, setInput] = useState('');
  
    const handleSubmmit = () => {
      if (input.trim()) {
        addTodo(input);
        setInput('');
      }
    };
  
    return (
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter a new task"
          value={input}
          onChangeText={(text) => setInput(text)}
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmmit}>
          <Text style={styles.buttonText}>Add Task</Text>
        </TouchableOpacity>
      </View>
    );
  }
  

export default TodoForm;

const styles = StyleSheet.create(
    { container: { flex: 1, backgroundColor: '#f2f2f2', alignItems: 'center', justifyContent: 'flex-start', paddingTop: 50, },
      title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, }, 
      content: { width: '100%', alignItems: 'center', },
      inputContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 20, }, 
      input: { height: 40, borderColor: '#cccccc', borderWidth: 1, borderRadius: 20, paddingLeft: 10, width: '70%', marginRight: 10, backgroundColor: '#ffffff', },
      button: { backgroundColor: '#007BFF', padding: 10, borderRadius: 20, alignItems: 'center', justifyContent: 'center', }, 
      buttonText: { color: '#ffffff', fontSize: 16, }, 
      taskContainer: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 10, marginVertical: 5, backgroundColor: '#ffffff', borderRadius: 10, width: '90%', elevation: 1, }, 
      taskText: { fontSize: 18, }, completedTaskText: { textDecorationLine: 'line-through', color: 'gray', }, });