import { Todo } from "../reducers/todos.reducer";

export enum TodoStoreActions {
    SET_NEW_TODO = 'SET_NEW_TODO',
    SET_TODO_DONE = 'SET_TODO_DONE',
    SET_DELETE_TODO = 'SET_DELETE_TODO',
}


export interface SetNewTodoAction {
    type: TodoStoreActions.SET_NEW_TODO,
    payload: {
        todo: Todo
    }
}

export interface SetTodoDoneAction {
    type: TodoStoreActions.SET_TODO_DONE,
    payload: {
        id: number,
    }
}

export interface setDeleteTodoAction{
    type: TodoStoreActions.SET_DELETE_TODO,
    payload: {
        todo: Todo
    }
}

export type Actions = SetNewTodoAction & SetTodoDoneAction & setDeleteTodoAction;

export const TodosActions = {
    setNewTodo: (todo: Todo) => ({
        type: TodoStoreActions.SET_NEW_TODO,
        payload: {
            todo
        }
    }),

    setToDoDone: (id: number): SetTodoDoneAction =>({
        type: TodoStoreActions.SET_TODO_DONE,
        payload: { id }
    }),
    setDeleteTodo: () => ({}),
}