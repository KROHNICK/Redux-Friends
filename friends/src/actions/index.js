import axios from "axios";

export const FETCHING = "FETCHING";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";
export const UPDATING = "UPDATING";
export const UPDATED = "UPDATED";
export const DELETING = "DELETING";
export const DELETED = "DELETED";
export const SAVING = "SAVING";
export const SAVED = "SAVED";

export const getFriends = () => dispatch => {
  dispatch({ type: FETCHING });
  axios
    .get("http://localhost:5000/api/friends")
    .then(res => dispatch({ type: SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: FAILURE, payload: err }));
};

export const addFriend = friend => dispatch => {
  dispatch({ type: SAVING });
  axios
    .post("http://localhost:5000/api/friends", friend)
    .then(res => dispatch({ type: SAVED, payload: res.data }))
    .catch(err => dispatch({ type: FAILURE, payload: err }));
};

export const updateFriend = id => dispatch => {
  dispatch({ type: UPDATING });
  axios
    .put(`http://localhost:5000/api/friends/${id}`)
    .then(res => dispatch({ type: UPDATED, payload: res.data }))
    .catch(err => dispatch({ type: FAILURE, payload: err }));
};

export const deleteFriend = id => dispatch => {
  dispatch({ type: DELETING });
  axios
    .delete(`http://localhost:5000/api/friends/${id}`)
    .then(res => dispatch({ type: DELETED, payload: res.data }))
    .catch(err => dispatch({ type: FAILURE, payload: err }));
};
