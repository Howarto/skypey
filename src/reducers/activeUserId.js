import { SET_ACTIVE_USER_ID } from "../constants/action-types";

export default function activeUserId(state = null, action) {
  if (action.type === SET_ACTIVE_USER_ID) {
    return action.payload;
  }
  return state;
}