import { Reducer } from "redux";
import { ActionCreator, AnyAction } from "redux";

export type TRootState = {
  commentText: string;
}
const initialState: TRootState = {
  commentText: "Hello, world",
};
const UPDATE_COMMENT = 'UPDATE_COMMENT';

export const updateComment: ActionCreator<AnyAction> = (text: string) => ({
  type: UPDATE_COMMENT,
  text
})

export const rootReducer: Reducer<TRootState> = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_COMMENT:
      return {
        ...state,
        commentText: action.text,
      }
    default:
      return state;
  }
}