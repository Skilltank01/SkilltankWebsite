import React, { useState } from "react";
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
} from "@chakra-ui/react";
import { GoogleLogin } from "@react-oauth/google";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    mobile: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted:", formData);
  };
  return (
    <>
      <Box>
        <Heading fontFamily="serif" color="whiteAlpha.1000" align="center">
          Register
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
                        onSuccess={(credentialResponse) => {
                          console.log(credentialResponse);
                        }}
                        onError={() => {
                          console.log("Login Failed");
                        }}
                      />
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel htmlFor="firstName">First Name</FormLabel>
                      <Input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                      />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel htmlFor="lastName">Last Name</FormLabel>
                      <Input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                      />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel htmlFor="email">Email</FormLabel>
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
                    <FormControl isRequired>
                      <FormLabel htmlFor="mobile">Mobile Number</FormLabel>
                      <Input
                        type="tel"
                        id="mobile"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                      />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel htmlFor="collegeName">College Name</FormLabel>
                      <Input
                        type="text"
                        id="collegeName"
                        name="collegeName"
                        value={formData.collegeName}
                        onChange={handleChange}
                      />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel htmlFor="city">City</FormLabel>
                      <Input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                      />
                    </FormControl>

                    <Button type="submit" colorScheme="orange" w="full">
                      Sign Up
                    </Button>
                    <Text color="orange">
                      Already have an account?{" "}
                      <a href="login">
                        Login Now (Student / Employer / Professional / Mentor)
                      </a>
                    </Text>
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

                    <FormControl isRequired>
                      <FormLabel htmlFor="firstName">First Name</FormLabel>
                      <Input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                      />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel htmlFor="lastName">Last Name</FormLabel>
                      <Input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                      />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel htmlFor="email">Email Id </FormLabel>
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
                    <FormControl isRequired>
                      <FormLabel htmlFor="mobile">Mobile No.</FormLabel>
                      <Input
                        type="tel"
                        id="mobile"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                      />
                      {/* Add verification logic if needed */}
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel htmlFor="jobTitle">Job Title</FormLabel>
                      <Input
                        type="text"
                        id="jobTitle"
                        name="jobTitle"
                        value={formData.jobTitle}
                        onChange={handleChange}
                      />
                    </FormControl>

                    <Button type="submit" colorScheme="orange" w="full">
                      Sign Up
                    </Button>
                    <Text color="orange">
                      Already have an account?{" "}
                      <a href="login">
                        Login Now (Student / Employer / Professional / Mentor)
                      </a>
                    </Text>
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

                    <FormControl isRequired>
                      <FormLabel htmlFor="name">Name</FormLabel>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </FormControl>
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
                      <FormLabel htmlFor="mobile">Mobile Number</FormLabel>
                      <Input
                        type="tel"
                        id="mobile"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                      />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel htmlFor="companyName">Company Name</FormLabel>
                      <Input
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                      />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel htmlFor="position">Position</FormLabel>
                      <Input
                        type="text"
                        id="position"
                        name="position"
                        value={formData.position}
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

                    <Button type="submit" colorScheme="orange" w="full">
                      Sign Up
                    </Button>
                    <Text color="orange">
                      Already have an account?{" "}
                      <a href="login">
                        Login Now (Student / Employer / Professional / Mentor)
                      </a>
                    </Text>
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

                    <FormControl isRequired>
                      <FormLabel htmlFor="name">Name</FormLabel>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </FormControl>
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
                      <FormLabel htmlFor="mobile">Mobile No.</FormLabel>
                      <Input
                        type="tel"
                        id="mobile"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                      />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel htmlFor="companyName">Company Name</FormLabel>
                      <Input
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                      />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel htmlFor="position">Position</FormLabel>
                      <Input
                        type="text"
                        id="position"
                        name="position"
                        value={formData.position}
                        onChange={handleChange}
                      />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel htmlFor="experience">Experience</FormLabel>
                      <Input
                        type="text"
                        id="experience"
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                      />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel htmlFor="domain">Domain</FormLabel>
                      <Input
                        type="text"
                        id="domain"
                        name="domain"
                        value={formData.domain}
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
                    <FormControl isRequired>
                      <FormLabel htmlFor="domainOfInterest">
                        Domain Of Interest
                      </FormLabel>
                      <Select
                        id="domainOfInterest"
                        name="domainOfInterest"
                        value={formData.domainOfInterest}
                        onChange={handleChange}
                      >
                        <option value="Accounting & Taxation">
                          Accounting & Taxation
                        </option>
                        <option value="Banking">Banking</option>
                        <option value="Finance">Finance</option>
                        <option value="Sales & Business Development">
                          Sales & Business Development
                        </option>
                        <option value="Logistics & Supply Chain">
                          Logistics & Supply Chain
                        </option>
                        <option value="Human Resources">Human Resources</option>
                        <option value="Operations">Operations</option>
                        <option value="Advertisment & Media">
                          Advertisment & Media
                        </option>
                        <option value="Product Management">
                          Product Management
                        </option>
                        <option value="Consulting">Consulting</option>
                        <option value="Customer Services">
                          Customer Services
                        </option>
                        <option value="Marketing">Marketing</option>
                        <option value="Content & Journalism">
                          Content & Journalism
                        </option>
                        <option value="Design">Design</option>
                        <option value="Leadership">Leadership</option>
                        <option value="Career Development">
                          Career Development
                        </option>
                        <option value="Web Development">Web Development</option>
                        <option value="Cloud Computing">Cloud Computing</option>
                        <option value="Cyber Security">Cyber Security</option>
                        <option value="AI/ML">AI/ML</option>
                        <option value="Data Science">Data Science</option>
                        <option value="Business Analytics">
                          Business Analytics
                        </option>
                        <option value="Core Engineering">
                          Core Engineering
                        </option>
                        <option value="Education & Research">
                          Education & Research
                        </option>
                        <option value="Other">Other</option>
                      </Select>
                    </FormControl>

                    <Button type="submit" colorScheme="orange" w="full">
                      Sign Up
                    </Button>
                    <Text color="orange">
                      Already have an account?{" "}
                      <a href="login">
                        Login Now (Student / Employer / Professional / Mentor)
                      </a>
                    </Text>
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

export default Signup;
