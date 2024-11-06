import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

function TodoForm({ addTodo }) {

    const [input, setInput] = useState('')

    const handleSubmmit = (e) => {
        e.preventDefault()
        if (input.trim) {
            addTodo(input);
            setInput('')
        }
    };

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder="Enter a new task"
                value={input}
                onChangeText={(text) => setInput(text)} 
            />
            <Button title="Add Task" onPress={() => handleSubmmit} />
        </View>
    );


}

export default TodoForm;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      width: '80%',
      paddingLeft: 8,
    },
  });