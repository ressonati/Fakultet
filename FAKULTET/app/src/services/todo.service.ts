import store from "../store";
import { todosAtions } from "../store/actions/todos.actions";
import {Todo} from "../store/reducers/todos.reducer";

export class TodoService {
    setNewTodo(todo: Todo){
        store.dispatch(todosAtions.setNewTodo(todo));

    }
    setTodoDone(todo: Todo){
        store.dispatch(todosAtions.setToDoDone(todo.id));
    }
    setDeleteTodo(todo: Todo){
        store.dispatch(todosAtions.setDeleteTodo(todo));
    }

}