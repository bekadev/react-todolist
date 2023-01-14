import axios from 'axios'

const settings = {
    withCredentials: true,
    headers: {
        // Не забываем заменить API-KEY на собственный
        'API-KEY': '5835496f-e51a-452d-a3a0-e64dd670b3f1',
    },
}

export const todolistAPI = {
    getTodolist() {
        const promise = axios.get(
            'https://social-network.samuraijs.com/api/1.0/todo-lists',
            settings
        )
        return promise
    },
    createTodolist(title: string) {
        const promise = axios.post(
            'https://social-network.samuraijs.com/api/1.0/todo-lists',
            {title: title},
            settings
        )
        return promise
    },
    deleteTodolist(todolistId: string) {
        const promise = axios.delete(
            `https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`,
            settings
        )
        return promise
    },
    updateTodolist(todolistId: string, title: string) {
        const promise = axios.put(
            `https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`,
            {title: title},
            settings
        )
        return promise
    }
}