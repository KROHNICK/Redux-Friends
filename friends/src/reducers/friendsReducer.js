import {
  FETCHING,
  SUCCESS,
  FAILURE,
  UPDATING,
  UPDATED,
  DELETING,
  DELETED,
  SAVING,
  SAVED
} from "../actions";

const initialState = {
  friends: [],
  error: null,
  fetchingFriends: false,
  friendsFetched: false,
  friendsSaved: false,
  savingFriends: false,
  updatingFriend: false,
  friendUpdated: false,
  deletingFriend: false,
  friendDeleted: false
};

export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return {
        ...state,
        fetchingFriends: true
      };
    case SUCCESS:
      return {
        ...state,
        friends: action.payload,
        fetchingFriends: false
      };
    case FAILURE:
      return {
        ...state,
        error: action.payload,
        fetchingFriends: false
      };
    case UPDATING:
      return {
        ...state,
        updatingFriend: true
      };
    case UPDATED:
      return {
        ...state,
        friends: action.payload,
        friendUpdated: true
      };
    case DELETING:
      return {
        ...state,
        deletingFriend: true
      };
    case DELETED:
      return {
        ...state,
        friends: action.payload,
        friendDeleted: true
      };
    case SAVING:
      return {
        ...state,
        savingFriends: true
      };
    case SAVED:
      return {
        ...state,
        friends: action.payload,
        friendsSaved: true
      };
    default:
      return state;
  }
};
