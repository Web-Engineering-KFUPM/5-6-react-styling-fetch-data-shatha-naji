import React from "react";
import { Modal, Button } from "react-bootstrap";

function UserModal({ show, user, onHide }) {
  if (!user) return null;

  return (
    <>
      {/* TODO 3.2: Replace this placeholder with a React-Bootstrap <Modal> */}
      {/* TODO 3.2: Modal must use show={show} and onHide={onHide} */}
      {/* TODO 3.2: Must include Header/Title/Body/Footer + Close button */}
      {/* TODO 3.2: Body must show avatar (user-avatar-large) + name/email/phone/website */}
      
    </>
  );
}

export default UserModal;