import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  appendContactsAction,
  setContactsAction,
} from "./redux/actions/contactsAction";
import "./App.scss";
import Modal from "./components/Modals/Modal";
import makeQueryString from "./utils/makeQueryString";
import "./App.scss";
import ContactsService from "./services/ContactsService/ContactsService";
function App() {
  const [activeModal, setActiveModal] = useState(null);
  const contacts = useSelector((selector) => selector.contactsReducer.contacts);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const [apiLoader, setapiLoader] = useState(false);
  const constantQueryParams = {
    companyId: 560,
    page: 1,
    noGroupDuplicates: 1,
  };

  const openModal = (modal) => {
    if (modal === "A") {
      const queryString = makeQueryString(constantQueryParams);
      window.history.pushState({}, "", `/all-contacts?${queryString}`);
    } else if (modal === "B") {
      const queryString = makeQueryString({
        ...constantQueryParams,
        countryId: 226,
      });
      window.history.pushState({}, "", `/us-contacts?${queryString}`);
    }
    setActiveModal(modal);
    setShowModal(true);
  };

  const closeModal = () => {
    window.history.pushState({}, "", "/");
    setActiveModal(null);
    setShowModal(false);
  };

  const fetchContacts = async (params) => {
    setapiLoader(true);
    const queryParams = params;

    const { getContacts } = ContactsService;

    try {
      const response = await getContacts(queryParams);
      const contactsArray = [];
      const data = response.data.contacts;
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          contactsArray.push(data[key]);
        }
      }

      if (contacts.length === 0) dispatch(setContactsAction(contactsArray));
      else dispatch(appendContactsAction(contactsArray));
    } catch (error) {
      console.log(error);
    }
    setapiLoader(false);
  };

  return (
    <div className="App">
      <div className="main-screen d-flex align-items-center justify-content-center main">
        <div className="text-center mt-5">
          <button
            className="btn btn-primary mr-3 buttonA"
            onClick={() => openModal("A")}
          >
            Button A
          </button>
          <button
            className="btn btn-secondary buttonB"
            onClick={() => openModal("B")}
          >
            Button B
          </button>
        </div>
      </div>
      {showModal && (
        <Modal
          activeModal={activeModal}
          onClose={closeModal}
          openModal={openModal}
          fetchContacts={fetchContacts}
          apiLoader={apiLoader}
        />
      )}
    </div>
  );
}

export default App;
