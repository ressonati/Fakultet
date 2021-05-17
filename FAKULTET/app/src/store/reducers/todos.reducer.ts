import { CallToActionSharp } from "@material-ui/icons";
import { TodoStoreActions } from "../actions/todos.actions";


export interface Todo{
    id:number;
    label:string;
    done: boolean;
    description:string;

}

export interface TodosList{

    list:Todo[];

}

export const todosListInitialState: TodosList ={
    list: [
        {
            id:-1,
            description:'',
            done: false,
            label: '',
        }
    ]
};

export const todosStoreReducer: Reducer<TodosList> = (state: TodosList, actions) =>{
    switch(actions.type){
        case TodoStoreActions.SET_NEW_TODO:
            return {
                ...state,
                list: [
                    ...state.list,
                    actions.payload.SetNewTodoAction
                ]


            };


        case TodoStoreActions.SET_DELETE_TODO:
            return {
                ...state,
                list:[
                    ...state.list,
                    actions.payload.todo
                ]

                
            };
        case TodoStoreActions.SET_TODO_DONE:
            return {};
        default:
            return state;

    }
}