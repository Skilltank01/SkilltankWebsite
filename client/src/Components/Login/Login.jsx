import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";


import {
  Box,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Heading,
  Text,
  Select,
  Flex,
} from "@chakra-ui/react";
import { GoogleLogin } from "@react-oauth/google";
import { login } from "../../Redux/actions.js/user";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(formData));
    console.log("Form submitted:", formData);
    
  };
  return (
    <>
      <Box>
        <Heading fontFamily="serif" color="whiteAlpha.1000" align="center">
          Login
        </Heading>
      </Box>

      <Box mt={50}>
        <Tabs>
          <TabList>
            <Tab>As Student</Tab>
            <Tab>As professional </Tab>
            <Tab>As Employer</Tab>
            <Tab>As Mentor</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Box p={4} w="100%" align="center" m="auto">
                <form onSubmit={handleSubmit}>
                  <VStack spacing={4}>
                    <FormControl>
                      <GoogleLogin
                        buttontext={"Signup with Google"}
                        onSuccess={(credentialResponse) => {
                          console.log(credentialResponse);
                        }}
                        onError={() => {
                          console.log("Login Failed");
                        }}
                      />
                    </FormControl>
                    <Text>
                      ------------------------ or ------------------------
                    </Text>
                    <FormControl isRequired>
                      <FormLabel htmlFor="email">Email Id</FormLabel>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel htmlFor="password">Password</FormLabel>
                      <Input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                      />
                    </FormControl>
                    <Box w="full">
                      <Text align="right" color="orange">
                        <a href="/forgetpassword">Forget Password?</a>
                      </Text>
                    </Box>
                    <Button type="submit" colorScheme="orange" w="full">
                      Sign Up
                    </Button>
                    <Flex gap="2" w="fit-content" m="auto">
                      <Text>New User to Skilltank?</Text>
                      <Text color="orange">
                        <Link to="/signup"> Register Now </Link>
                      </Text>
                    </Flex>
                  </VStack>
                </form>
              </Box>
            </TabPanel>

            <TabPanel>
              <Box p={4} w="100%" align="center" m="auto">
                <form onSubmit={handleSubmit}>
                  <VStack spacing={4}>
                    <FormControl>
                      <GoogleLogin
                        buttontext={"Signup with Google"}
                        onSuccess={(credentialResponse) => {
                          console.log(credentialResponse);
                        }}
                        onError={() => {
                          console.log("Login Failed");
                        }}
                      />
                    </FormControl>
                    <Text>
                      ------------------------ or ------------------------
                    </Text>
                    <FormControl isRequired>
                      <FormLabel htmlFor="email">Official Email Id </FormLabel>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel htmlFor="password">Password</FormLabel>
                      <Input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                      />
                    </FormControl>
                    <Box w="full">
                      <Text align="right" color="orange">
                        <a href="/forgetpassword">Forget Password?</a>
                      </Text>
                    </Box>
                    <Button type="submit" colorScheme="orange" w="full">
                      Sign Up
                    </Button>
                    <Flex gap="2" w="fit-content" m="auto">
                      <Text>New User to Skilltank?</Text>
                      <Text color="orange">
                        <Link to="/signup"> Register Now </Link>
                      </Text>
                    </Flex>
                  </VStack>
                </form>
              </Box>
            </TabPanel>

            <TabPanel>
              <Box p={4} w="100%" align="center" m="auto">
                <form onSubmit={handleSubmit}>
                  <VStack spacing={4}>
                    <FormControl>
                      <GoogleLogin
                        onSuccess={(credentialResponse) => {
                          console.log(credentialResponse);
                        }}
                        onError={() => {
                          console.log("Login Failed");
                        }}
                      />
                    </FormControl>
                    <Text>
                      ------------------------ or ------------------------
                    </Text>
                    <FormControl isRequired>
                      <FormLabel htmlFor="email">Official Email Id</FormLabel>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel htmlFor="password">Password</FormLabel>
                      <Input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                      />
                    </FormControl>
                    <Box w="full">
                      <Text align="right" color="orange">
                        <a href="/forgetpassword">Forget Password?</a>
                      </Text>
                    </Box>
                    <Button type="submit" colorScheme="orange" w="full">
                      Sign Up
                    </Button>
                    <Flex gap="2" w="fit-content" m="auto">
                      <Text>New User to Skilltank?</Text>
                      <Text color="orange">
                        <Link to="/signup"> Register Now </Link>
                      </Text>
                    </Flex>
                  </VStack>
                </form>
              </Box>
            </TabPanel>

            <TabPanel>
              <Box p={4} w="100%" align="center" m="auto">
                <form onSubmit={handleSubmit}>
                  <VStack spacing={4}>
                    <FormControl>
                      <GoogleLogin
                        onSuccess={(credentialResponse) => {
                          console.log(credentialResponse);
                        }}
                        onError={() => {
                          console.log("Login Failed");
                        }}
                      />
                    </FormControl>
                    <Text>
                      ------------------------ or ------------------------
                    </Text>
                    <FormControl isRequired>
                      <FormLabel htmlFor="officialEmail">
                        Official Email Id
                      </FormLabel>
                      <Input
                        type="email"
                        id="officialEmail"
                        name="officialEmail"
                        value={formData.officialEmail}
                        onChange={handleChange}
                      />
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel htmlFor="password">Password</FormLabel>
                      <Input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                      />
                    </FormControl>
                    <Box w="full">
                      <Text align="right" color="orange">
                        <a href="/forgetpassword">Forget Password?</a>
                      </Text>
                    </Box>
                    <Button type="submit" colorScheme="orange" w="full">
                      Sign Up
                    </Button>
                    <Flex gap="2" w="fit-content" m="auto">
                      <Text>New User to Skilltank?</Text>
                      <Text color="orange">
                        <Link to="/signup"> Register Now </Link>
                      </Text>
                    </Flex>
                  </VStack>
                </form>
              </Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  );
};

export default Login;
