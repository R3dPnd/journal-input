import { ActionType } from "../action-types";
import { Action } from "../actions";

interface RepositoriesState {
    loading: boolean;
    error?: string;
    data?: string[];
}

const init = {
    loading: false,
    error: undefined,
    data: []

}

const repositoryReducer = (state: RepositoriesState = init, action: Action): RepositoriesState => {
    switch(action.type) {
        case ActionType.SEARCH_REPOSITORIES:
            return {loading: true, error: undefined, data: []}  
        case ActionType.SEARCH_REPOSITORIES_SUCCESS:
            console.log(action)
            return {loading: false, error: undefined, data: action.payload}
        case ActionType.SEARCH_REPOSITORIES_ERROR:
            return {loading: false, error: action.error, data: []}
        default:
            return state;
    }  
}

export default repositoryReducer;