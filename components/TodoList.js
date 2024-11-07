import React from "react";
import TodoItem from "./TodoItem";
import { View } from "react-native";

function TodoList({ todos, toggleTodo, deleteTodo }) {
    return (
        <View>
            {todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    toggleTodo={toggleTodo}
                    deleteTodo={deleteTodo}
                />
            ))}
        </View>
    );
}

export default TodoList;