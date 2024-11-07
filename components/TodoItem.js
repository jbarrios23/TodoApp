import React from "react";
import { View, StyleSheet,Text,TouchableOpacity } from "react-native";

function TodoItem({ todo, toggleTodo, deleteTodo }) {
    return (
        <View style={styles.itemContainer}>
            <Text style={[styles.itemText, todo.completed && styles.completedText]}> {todo.task}
            </Text>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.button} onPress={() => toggleTodo(todo.id)} >
                    <Text style={styles.buttonText}> {todo.completed ? 'Desmarcar' : 'Completar'}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.deleteButton]} onPress={() => deleteTodo(todo.id)} >
                    <Text style={styles.buttonText}>Eliminar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    itemContainer:
    {
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        padding: 10, 
        borderBottomWidth: 1, 
        borderColor: '#ccc',

    },
    itemText:
    {
        fontSize: 18,
    }, completedText: {
        textDecorationLine: 'line-through', color: 'gray',

    },
    buttonsContainer:
    {
        flexDirection: 'row',
    },
    button: {
        marginLeft: 10, 
        padding: 5, 
        backgroundColor: '#007BFF',
        borderRadius: 5,

    },
    deleteButton: {
        backgroundColor: '#FF0000',
    },
    buttonText: {
        color: '#fff',
    },
});

export default TodoItem;