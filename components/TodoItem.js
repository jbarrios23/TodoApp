import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

function TodoItem({ todo, toggleTodo, deleteTodo }) {
    return (
        <View style={styles.taskContainer}>
            <Text style={[styles.taskText, todo.completed && styles.completedTaskText]}>
                {todo.task}
            </Text>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.button} onPress={() => toggleTodo(todo.id)}>
                    <Text style={styles.buttonText}>{todo.completed ? 'Desmarcar' : 'Completar'}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, { backgroundColor: '#FF0000' }]} onPress={() => deleteTodo(todo.id)}>
                    <Text style={styles.buttonText}>Eliminar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}


const styles = StyleSheet.create(
    {
        container: { flex: 1, backgroundColor: '#f2f2f2', alignItems: 'center', justifyContent: 'flex-start', paddingTop: 50, },
        title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, },
        content: { width: '100%', alignItems: 'center', },
        inputContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 20, },
        input: { height: 40, borderColor: '#cccccc', borderWidth: 1, borderRadius: 20, paddingLeft: 10, width: '70%', marginRight: 10, backgroundColor: '#ffffff', },
        button: { backgroundColor: '#007BFF', padding: 10, borderRadius: 20, alignItems: 'center', justifyContent: 'center', marginTop:10 },
        buttonText: { color: '#ffffff', fontSize: 16, },
        taskContainer: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 10, marginVertical: 5, backgroundColor: '#ffffff', borderRadius: 10, width: '90%', elevation: 1, },
        taskText: { fontSize: 18, }, completedTaskText: { textDecorationLine: 'line-through', color: 'gray', },
    });

export default TodoItem;