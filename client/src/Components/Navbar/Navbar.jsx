import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  Box,
  Image,
  Flex,
  IconButton,
  Link as ChakraLink,
  InputGroup,
  InputLeftElement,
  Input,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Icon,
} from "@chakra-ui/react";
import logo from "../../assest/skill.png";
import { HamburgerIcon } from "@chakra-ui/icons";
import { AiOutlineSearch } from "react-icons/ai";
import { FaBookReader } from "react-icons/fa";
import { HiOutlineLightBulb, HiOutlineSpeakerphone } from "react-icons/hi";
import { MdWork, MdMenuBook } from "react-icons/md";
import { BiLogIn, BiSolidUserAccount } from "react-icons/bi";
import { BsBarChartLineFill } from "react-icons/bs";
import SignupModal from "../Signup/SignupModal";
import LoginModal from "./../Login/LoginModal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const openSignupModal = () => {
    setIsSignupModalOpen(true);
  };

  const closeSignupModal = () => {
    setIsSignupModalOpen(false);
  };

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  return (
    <>
      <Flex 
        as="nav"
        align="center"
        justify="space-between"
        bg="white"
        color="black"
        fontSize="17px"
        position="fixed"
        top="0"
        left="0"
        right="0"
        zIndex="999"
        transition="background-color 0.3s, padding 0.3s"
        p={{ base: "1", md: "2" }}
        pl={{ base: "5", md: "10" }}
        pr={{ base: "5", md: "10" }}
      >
        <Box cursor="pointer" pl="7" align="center" w="9%" top="45px">
          <Link to="/">
            <Image src={logo} alt="My Logo" />
          </Link>
        </Box>
        <Flex
          width="1225px"
          height="52px"
          top="15px"
          left="235px"
          justifyContent="space-between"
        >
          <Box>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <Icon as={AiOutlineSearch} boxSize={8} />
              </InputLeftElement>
              <Input
                type="text"
                placeholder="Search Opportunities...."
                w="250px"
                h="40px"
                focusBorderColor="none"
              />
            </InputGroup>
          </Box>

          <Flex w="55%" p="1" h="full" justifyContent="space-between">
            <Box>
              <Link to="/Learn">
                <Flex flexDirection="column" align="center" color="#001440">
                  <FaBookReader />
                  <ChakraLink style={{ textDecoration: "none" }} mr={4}>
                    Learn
                  </ChakraLink>
                </Flex>
              </Link>
            </Box>

            <Box>
              {" "}
              <Link to="/Mentor">
                <Flex flexDirection="column" align="center" color="#001440">
                  <HiOutlineLightBulb />
                  <ChakraLink style={{ textDecoration: "none" }} mr={4}>
                    Mentor
                  </ChakraLink>
                </Flex>
              </Link>
            </Box>
            <Box>
              <Link to="/Compete">
                <Flex flexDirection="column" align="center" color="#001440">
                  <BsBarChartLineFill />
                  <ChakraLink style={{ textDecoration: "none" }} mr={4}>
                    Compete
                  </ChakraLink>
                </Flex>
              </Link>
            </Box>
            <Box>
              <Link to="/Jobs">
                <Flex flexDirection="column" align="center" color="#001440">
                  <MdWork />
                  <ChakraLink style={{ textDecoration: "none" }} mr={4}>
                    Jobs
                  </ChakraLink>
                </Flex>
              </Link>{" "}
            </Box>

            <Menu>
              <MenuButton
                as={Button}
                bg="#001440"
                size="md"
                color="white"
                borderRadius={30}
                _hover={{ bg: "rgb(70,69,69)", color: "white" }}
                onClick={openSignupModal}
              >
                <Box display="flex" gap={2}>
                  <Box>SignUp</Box>
                  <Box>
                    <BiSolidUserAccount />
                  </Box>
                </Box>
              </MenuButton>
              <SignupModal
                isOpen={isSignupModalOpen}
                onClose={closeSignupModal}
              />
            </Menu>

            <Menu>
              <MenuButton
                as={Button}
                bg="#008AD8"
                size="md"
                borderRadius={30}
                color="white"
                _hover={{ bg: "rgb(70,69,69)", color: "white" }}
                onClick={openLoginModal}
              >
                <Box display="flex" gap={2}>
                  <Box>Login</Box>
                  <Box>
                    {" "}
                    <BiLogIn />
                  </Box>
                </Box>
              </MenuButton>
              <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} />
            </Menu>
            <Box>
              <Menu>
                <MenuButton
                  as={IconButton}
                  aria-label="Options"
                  icon={<HamburgerIcon />}
                  variant="outline"
                />
                <MenuList bg="rgb(70,69,69)" color="black">
                  <MenuItem _hover={{ bg: "rgb(70,69,69)", color: "white" }}>
                    <Box display="flex" gap={2}>
                      Host Event <HiOutlineSpeakerphone />
                    </Box>
                  </MenuItem>
                  <MenuItem
                    _hover={{
                      bg: "rgb(70,69,69)",
                      color: "white",
                      placement: "left",
                    }}
                  >
                    <Box>
                      <Menu isOpen={isOpen} onClose={() => setIsOpen(false)}>
                        <MenuButton
                          onMouseEnter={() => setIsOpen(true)}
                          onMouseLeave={() => setIsOpen(false)}
                        >
                          <Box display="flex" gap={2}>
                            Our Product <MdMenuBook />
                          </Box>
                        </MenuButton>
                        <MenuList
                          onMouseEnter={() => setIsOpen(true)}
                          onMouseLeave={() => setIsOpen(false)}
                          bg="rgb(70,69,69)"
                          color="black"
                        >
                          <MenuItem
                            _hover={{ bg: "rgb(70,69,69)", color: "white" }}
                          >
                            For Employer
                          </MenuItem>
                          <MenuItem
                            _hover={{ bg: "rgb(70,69,69)", color: "white" }}
                          >
                            For University{" "}
                          </MenuItem>
                        </MenuList>
                      </Menu>
                    </Box>
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Navbar;
