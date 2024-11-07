import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'todos';

export const saveTodos=async (todos)=>{
    try{
        await AsyncStorage.setItem(STORAGE_KEY,JSON.stringify(todos));
        console.log('saving todos:', todos);
    }catch(error){
        console.error('Error saving todos:', error);
    }
};

export const loadTodos=async ()=>{
    try{
        const storedTodos=await AsyncStorage.getItem(STORAGE_KEY);
        console.log('load todos:', storedTodos);
        return storedTodos ? JSON.parse(storedTodos) : []
    }catch(error){
        console.error('Error Load todos:', error);
        return [];
    }
};