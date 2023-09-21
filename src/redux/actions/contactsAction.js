// Action Types

export const SET_CONTACTS = "SET_CONTACTS";
export const APPEND_CONTACTS = "APPEND_CONTACTS";

// Action Creators
export const setContactsAction = (payload) => ({
  type: SET_CONTACTS,
  payload,
});

export const appendContactsAction = (payload) => ({
  type: APPEND_CONTACTS,
  payload,
});
