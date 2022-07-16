import { Action, Reducer } from "redux";
import { ActionCreator, AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import { ME_REQUEST, ME_REQUEST_ERROR, ME_REQUEST_SUCCESS } from "./me/action";
import { meReducer, TMeState } from "./me/reducer";



export type TRootState = {
  commentText: string;
  token: string;
  me: TMeState;
}
const initialState: TRootState = {
  commentText: '',
  token: '',
  me: {
    loading: false,
    error: '',
    data:{}
    
  }
};

const UPDATE_COMMENT = 'UPDATE_COMMENT';
const GET_TOKEN = 'GET_TOKEN'

export const updateComment: ActionCreator<AnyAction> = (text: string) => ({
  type: UPDATE_COMMENT,
  text
})

export const getToken = (token: string) =>( {
  type: 'GET_TOKEN',
  token
})

export const rootReducer: Reducer<TRootState, any> = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_COMMENT:
      return {
        ...state,
        commentText: action.text,
      }
    case GET_TOKEN:
      return {
        ...state,
        token: action.token,
      }
    case ME_REQUEST:
    case ME_REQUEST_SUCCESS:
    case ME_REQUEST_ERROR:
      return {
        ...state,
        me: meReducer(state.me, action)
      }
    default:
      return state;
  }
}