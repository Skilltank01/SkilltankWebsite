import React from "react";
import {  Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton } from "@chakra-ui/react";
import Signup from "./Signup"; 


const SignupModal = ({ isOpen, onClose }) => {
  const [scrollBehavior, setScrollBehavior] = React.useState('inside')
  return (
    <Modal isOpen={isOpen} onClose={onClose} scrollBehavior={scrollBehavior} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody>
          <Signup />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default SignupModal;
