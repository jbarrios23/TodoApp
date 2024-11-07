import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

function TodoForm({ addTodo }) {

    const [input, setInput] = useState('')

    const handleSubmmit = (e) => {
        e.preventDefault()
        console.log("Entrada", input)
        if (input.trim) {
            addTodo(input);
            setInput('')
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter a new task"
                    value={input}
                    onChangeText={(text) => setInput(text)}
                />
                <View style={styles.buttonContainer}>
                    <Button title="Add Task" onPress={handleSubmmit} />
                </View>
            </View>
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
        padding:25
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        width: '80%',
        paddingLeft: 8,
        marginRight: 10,
        marginLeft: 20
    },
    inputContainer:
    {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        marginRight: 10
    }
});