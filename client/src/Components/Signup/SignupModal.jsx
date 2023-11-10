import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import Signup from "./Signup";

const SignupModal = ({ isOpen, onClose }) => {
  const [scrollBehavior, setScrollBehavior] = React.useState("outside");

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      scrollBehavior={scrollBehavior}
      size="xl"
      sx={{
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
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
