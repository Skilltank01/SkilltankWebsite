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

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [onOpen, setonOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

  const openSignupModal = () => {
    setIsSignupModalOpen(true);
  };

  const closeSignupModal = () => {
    setIsSignupModalOpen(false);
  };
  return (
    <>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        bg="white"
        color="black"
        fontSize="20.68px"
        boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
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
        <Box cursor="pointer" align="center" w="15%">
          <Link to="/">
            <Image src={logo} alt="My Logo" />
          </Link>
        </Box>
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

        <Flex w="30%" h="full" align="center" justifyContent="center">
          <Box>
            <Link to="/Learn">
              <Flex flexDirection="column" align="center">
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
              <Flex flexDirection="column" align="center">
                <HiOutlineLightBulb />
                <ChakraLink style={{ textDecoration: "none" }} mr={4}>
                  Mentor
                </ChakraLink>
              </Flex>
            </Link>
          </Box>
          <Box>
            <Link to="/Compete">
              <Flex flexDirection="column" align="center">
                <BsBarChartLineFill />
                <ChakraLink style={{ textDecoration: "none" }} mr={4}>
                  Compete
                </ChakraLink>
              </Flex>
            </Link>
          </Box>
          <Box>
            <Link to="/Jobs">
              <Flex flexDirection="column" align="center">
                <MdWork />
                <ChakraLink style={{ textDecoration: "none" }} mr={4}>
                  Jobs
                </ChakraLink>
              </Flex>
            </Link>{" "}
          </Box>
        </Flex>

        <Flex w="300px" h="full" align="center" justifyContent="space-around">
          <Menu isOpen={onOpen} onClose={() => setonOpen(false)}>
            <MenuButton
              as={Button}
              bg="rgb(255, 150, 53)"
              size="md"
              _hover={{ bg: "rgb(70,69,69)", color: "white" }}
              onClick={openSignupModal}
              onMouseEnter={() => setonOpen(true)}
              onMouseLeave={() => setonOpen(false)}
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

            <MenuList bg="rgb(70,69,69,0.5)"
            >
              <MenuItem bg="transparent">
                As Student
              </MenuItem>

              <MenuItem bg="transparent">
                As Professional
              </MenuItem>

              <MenuItem bg="transparent">
                As Employer
              </MenuItem>

              <MenuItem bg="transparent">
                As Mentor
              </MenuItem>
            </MenuList>
          </Menu>

          <Menu>
            <MenuButton
              as={Button}
              bg="rgb(255, 150, 53)"
              size="md"
              _hover={{ bg: "rgb(70,69,69)", color: "white" }}
            >
              <Box display="flex" gap={2}>
                <Box>Login</Box>
                <Box>
                  {" "}
                  <BiLogIn />
                </Box>
              </Box>
            </MenuButton>
            <MenuList bg="rgb(70,69,69)" color="black">
              <Link to="/login/student">
                <MenuItem _hover={{ bg: "rgb(70,69,69)", color: "white" }}>
                  As Student
                </MenuItem>
              </Link>
              <Link to="/login/professional">
                <MenuItem _hover={{ bg: "rgb(70,69,69)", color: "white" }}>
                  As Professional
                </MenuItem>
              </Link>
              <Link to="/login/employer">
                <MenuItem _hover={{ bg: "rgb(70,69,69)", color: "white" }}>
                  As Employer
                </MenuItem>
              </Link>
              <Link to="/login/mentor">
                <MenuItem _hover={{ bg: "rgb(70,69,69)", color: "white" }}>
                  As Mentor
                </MenuItem>
              </Link>
            </MenuList>
          </Menu>
        </Flex>

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
    </>
  );
};

export default Navbar;
