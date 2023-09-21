import { SET_CONTACTS, APPEND_CONTACTS } from "../actions/contactsAction";

const initialState = {
  contacts: [],
};

const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CONTACTS:
      return {
        ...state,
        contacts: action.payload,
      };

    case APPEND_CONTACTS:
      return {
        ...state,
        contacts: [...state.contacts, ...action.payload],
      };

    default:
      return state;
  }
};

export default contactsReducer;
