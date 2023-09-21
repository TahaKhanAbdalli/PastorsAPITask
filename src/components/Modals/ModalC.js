import React from "react";

function ModalC(props) {
  const { name, onClose, selectedListItem } = props;
  return (
    <div
      className={`contactsModal modal`}
      tabIndex="-1"
      role="dialog"
      // style={{ display: show ? "block" : "none" }}
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{name}</h5>
            <button
              type="button"
              className="btn btn-primary"
              data-dismiss="modal"
              onClick={onClose}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body ModalBody">
            {" "}
            <div>first name : {selectedListItem?.first_name}</div>
            <div>last name : {selectedListItem?.last_name}</div>
            <div>Phone No. : {selectedListItem?.phone_number}</div>
            <div>email : {selectedListItem?.email}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalC;
