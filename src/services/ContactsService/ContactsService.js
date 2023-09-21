import getService from "../getService";
import ContactsConstant from "./ContactsConstant";

const {GET_ALL_CONTACTS}=ContactsConstant
const ContactsService = {
    getContacts(params) {
        return getService(GET_ALL_CONTACTS,params);
      },

}

export default ContactsService