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
  Flex,
} from "@chakra-ui/react";
import { GoogleLogin } from "@react-oauth/google";
import {
  studentlogin,
  professionallogin,
  mentorlogin,
  employerlogin,
} from "../../Redux/actions.js/user";

const Login = () => {
  const [semail, setsEmail] = useState("");
  const [spassword, setsPassword] = useState("");
  const [pemail, setpEmail] = useState("");
  const [ppassword, setpPassword] = useState("");
  const [eemail, seteEmail] = useState("");
  const [epassword, setePassword] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const Submithandler = (e) => {
    e.preventDefault();
 
    // console.log("Form submitted:", formData);
    dispatch(studentlogin(semail , spassword));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
 
    // console.log("Form submitted:", formData);
    dispatch(professionallogin(pemail , ppassword));
  };

  const Submitdata = (e) => {
    e.preventDefault();
 
    // console.log("Form submitted:", formData);
    dispatch(employerlogin(eemail , epassword));
  };


  const handledata = (e) => {
    e.preventDefault();
 
    // console.log("Form submitted:", formData);
    dispatch(mentorlogin(email , password));
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
                <form onSubmit={Submithandler}>
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
                        value={semail}
                        onChange={(e) => setsEmail(e.target.value)}
                      />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel htmlFor="password">Password</FormLabel>
                      <Input
                        type="password"
                        id="password"
                        name="password"
                        value={spassword}
                        onChange={(e) => setsPassword(e.target.value)}
                      />
                    </FormControl>
                    <Box w="full">
                      <Text align="right" color="orange">
                        <a href="/forgetpassword">Forget Password?</a>
                      </Text>
                    </Box>
                    <Button type="submit" colorScheme="orange" w="full">
                      Sign in
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
                      <FormLabel htmlFor="email"> Email Id </FormLabel>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        value={pemail}
                        onChange={(e) => setpEmail(e.target.value)}
                      />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel htmlFor="password">Password</FormLabel>
                      <Input
                        type="password"
                        id="password"
                        name="password"
                        value={ppassword}
                        onChange={(e) => setpPassword(e.target.value)}
                      />
                    </FormControl>
                    <Box w="full">
                      <Text align="right" color="orange">
                        <a href="/forgetpassword">Forget Password?</a>
                      </Text>
                    </Box>
                    <Button type="submit" colorScheme="orange" w="full">
                      Sign in
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
                <form onSubmit={Submitdata}>
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
                        value={eemail}
                        onChange={(e) => seteEmail(e.target.value)}
                      />
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel htmlFor="password">Password</FormLabel>
                      <Input
                        type="password"
                        id="password"
                        name="password"
                        value={epassword}
                        onChange={(e) => setePassword(e.target.value)}
                      />
                    </FormControl>
                    <Box w="full">
                      <Text align="right" color="orange">
                        <a href="/forgetpassword">Forget Password?</a>
                      </Text>
                    </Box>
                    <Button type="submit" colorScheme="orange" w="full">
                      Sign in
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
                <form onSubmit={handledata}>
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
                         Email Id
                      </FormLabel>
                      <Input
                        type="email"
                        id="Email"
                        name="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel htmlFor="password">Password</FormLabel>
                      <Input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </FormControl>
                    <Box w="full">
                      <Text align="right" color="orange">
                        <a href="/forgetpassword">Forget Password?</a>
                      </Text>
                    </Box>
                    <Button type="submit" colorScheme="orange" w="full">
                      Sign in
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
