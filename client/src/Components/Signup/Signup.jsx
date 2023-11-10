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
import {
  studentregister,
  professionalregister,
  employerregister,
  mentorregister,
 
} from "../../Redux/actions.js/user";

const Signup = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [mobile, setmobile] = useState("");
  const [collegeName, setcollegeName] = useState("");
  const [city, setcity] = useState("");
  const [companyName, setcompanyName] = useState("");
  const [position, setposition] = useState("");
  const [experience, setexperience] = useState("");
  const [domainOfInterest, setdomainOfInterest] = useState("");

  const Submithandler = (e) => {
    e.preventDefault();
    const formData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      mobile: mobile,
      collegeName: collegeName,
      city: city,
    };

    // console.log("Form submitted:", formData);
    dispatch(studentregister(formData));
  };

  const Submitdata = (e) => {
    e.preventDefault();
    const formData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      mobile: mobile,
      companyName: companyName,
      position: position,
    };
    // console.log("Form submitted:", formData);
    dispatch(professionalregister(formData));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      mobile: mobile,
      companyName: companyName,
      position: position,
    };
    // console.log("Form submitted:", formData);
    dispatch(employerregister(formData));
  };

  const handledata = (e) => {
    e.preventDefault();
    const formData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      mobile: mobile,
      companyName: companyName,
      position: position,
      experience: experience,
      domainOfInterest: domainOfInterest,
    };
    // console.log("Form submitted:", formData);
    dispatch(mentorregister(formData));
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
                        style={{ backgroundColor: "blue", color: "white" }}
                      />
                    </FormControl>

                    <Text>
                      ------------------------ or ------------------------
                    </Text>

                    <FormControl isRequired>
                      <FormLabel htmlFor="firstName">First Name</FormLabel>
                      <Input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={firstName}
                        onChange={(e) => setfirstName(e.target.value)}
                      />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel htmlFor="lastName">Last Name</FormLabel>
                      <Input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={lastName}
                        onChange={(e) => setlastName(e.target.value)}
                      />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel htmlFor="email">Email</FormLabel>
                      <Input
                        type="email"
                        id="email"
                        name="email"
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
                    <FormControl isRequired>
                      <FormLabel htmlFor="mobile">Mobile Number</FormLabel>
                      <Input
                        type="tel"
                        id="mobile"
                        name="mobile"
                        value={mobile}
                        onChange={(e) => setmobile(e.target.value)}
                      />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel htmlFor="collegeName">College Name</FormLabel>
                      <Input
                        type="text"
                        id="collegeName"
                        name="collegeName"
                        value={collegeName}
                        onChange={(e) => setcollegeName(e.target.value)}
                      />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel htmlFor="city">City</FormLabel>
                      <Input
                        type="text"
                        id="city"
                        name="city"
                        value={city}
                        onChange={(e) => setcity(e.target.value)}
                      />
                    </FormControl>
                    <Flex gap="2" w="100%">
                      <Text>By signing up, you agree to our </Text>
                      <Text color="orange">
                        <Link to="/terms">Terms and Conditions.</Link>
                      </Text>
                    </Flex>

                    <Button type="submit" colorScheme="orange" w="full">
                      Sign Up
                    </Button>
                    <Flex gap="2" w="fit-content" m="auto">
                      <Text>Already have an account?</Text>
                      <Text color="orange">
                        <Link to="/login">Login Now</Link>
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
                      <FormLabel htmlFor="firstName">First Name</FormLabel>
                      <Input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={firstName}
                        onChange={(e) => setfirstName(e.target.value)}
                      />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel htmlFor="lastName">Last Name</FormLabel>
                      <Input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={lastName}
                        onChange={(e) => setlastName(e.target.value)}
                      />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel htmlFor="email">Email Id</FormLabel>
                      <Input
                        type="email"
                        id="email"
                        name="email"
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
                    <FormControl isRequired>
                      <FormLabel htmlFor="mobile">Mobile Number</FormLabel>
                      <Input
                        type="tel"
                        id="mobile"
                        name="mobile"
                        value={mobile}
                        onChange={(e) => setmobile(e.target.value)}
                      />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel htmlFor="companyName">Company Name</FormLabel>
                      <Input
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={companyName}
                        onChange={(e) => setcompanyName(e.target.value)}
                      />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel htmlFor="position">Position</FormLabel>
                      <Select
                        id="position"
                        name="position"
                        value={position}
                        onChange={(e) => setposition(e.target.value)}
                      >
                        <option value="">Select Position From Here</option>
                        <option value="Marketing Specialist">
                          Marketing Specialist
                        </option>
                        <option value="Marketing Manager">
                          Marketing Manager
                        </option>
                        <option value="Marketing Director">
                          Marketing Director
                        </option>
                        <option value="Graphic Designer">
                          Graphic Designer
                        </option>
                        <option value="Marketing Research Analyst">
                          Marketing Research Analyst
                        </option>
                        <option value="Marketing Communications Manager">
                          Marketing Communications Manager
                        </option>
                        <option value="Marketing Consultant">
                          Marketing Consultant
                        </option>
                        <option value="Product Manager">Product Manager</option>
                        <option value="Public Relations">
                          Public Relations
                        </option>
                        <option value="Social Media Assistant">
                          Social Media Assistant
                        </option>
                        <option value="Brand Manager">Brand Manager</option>
                        <option value="SEO Manager">SEO Manager</option>
                        <option value="Content Marketing Manager">
                          Content Marketing Manager
                        </option>
                        <option value="Copywriter">Copywriter</option>
                        <option value="Media Buyer">Media Buyer</option>
                        <option value="Digital Marketing Manager">
                          Digital Marketing Manager
                        </option>
                        <option value="eCommerce Marketing Specialist">
                          eCommerce Marketing Specialist
                        </option>
                        <option value="Brand Strategist">
                          Brand Strategist
                        </option>
                        <option value="Vice President of Marketing">
                          Vice President of Marketing
                        </option>
                        <option value="Media Relations Coordinator">
                          Media Relations Coordinator
                        </option>
                        <option value="Administrative Assistant">
                          Administrative Assistant
                        </option>
                        <option value="Receptionist">Receptionist</option>
                        <option value="Office Manager">Office Manager</option>
                        <option value="Auditing Clerk">Auditing Clerk</option>
                        <option value="Bookkeeper">Bookkeeper</option>
                        <option value="Account Executive">
                          Account Executive
                        </option>
                        <option value="Branch Manager">Branch Manager</option>
                        <option value="Business Manager">
                          Business Manager
                        </option>
                        <option value="Quality Control Coordinator">
                          Quality Control Coordinator
                        </option>
                        <option value="Administrative Manager">
                          Administrative Manager
                        </option>
                        <option value="Chief Executive Officer">
                          Chief Executive Officer
                        </option>
                        <option value="Business Analyst">
                          Business Analyst
                        </option>
                        <option value="Risk Manager">Risk Manager</option>
                        <option value="Human Resources">Human Resources</option>
                        <option value="Office Assistant">
                          Office Assistant
                        </option>
                        <option value="Secretary">Secretary</option>
                        <option value="Office Clerk">Office Clerk</option>
                        <option value="File Clerk">File Clerk</option>
                        <option value="Account Collector">
                          Account Collector
                        </option>
                        <option value="Administrative Specialist">
                          Administrative Specialist
                        </option>
                        <option value="Executive Assistant">
                          Executive Assistant
                        </option>
                        <option value="Program Administrator">
                          Program Administrator
                        </option>
                        <option value="Program Manager">Program Manager</option>
                        <option value="Administrative Analyst">
                          Administrative Analyst
                        </option>
                        <option value="Data Entry">Data Entry</option>
                        <option value="CEO—Chief Executive Officer">
                          CEO—Chief Executive Officer
                        </option>
                        <option value="COO—Chief Operating Officer">
                          COO—Chief Operating Officer
                        </option>
                        <option value="CFO—Chief Financial Officer">
                          CFO—Chief Financial Officer
                        </option>
                        <option value="CIO—Chief Information Officer">
                          CIO—Chief Information Officer
                        </option>
                        <option value="CTO—Chief Technology Officer">
                          CTO—Chief Technology Officer
                        </option>
                        <option value="CMO—Chief Marketing Officer">
                          CMO—Chief Marketing Officer
                        </option>
                        <option value="CHRO—Chief Human Resources Officer">
                          CHRO—Chief Human Resources Officer
                        </option>
                        <option value="CDO—Chief Data Officer">
                          CDO—Chief Data Officer
                        </option>
                        <option value="CPO—Chief Product Officer">
                          CPO—Chief Product Officer
                        </option>
                        <option value="CCO—Chief Customer Officer">
                          CCO—Chief Customer Officer
                        </option>
                        <option value="Team Leader">Team Leader</option>
                        <option value="Manager">Manager</option>
                        <option value="Assistant Manager">
                          Assistant Manager
                        </option>
                        <option value="Executive">Executive</option>
                        <option value="Director">Director</option>
                        <option value="Coordinator">Coordinator</option>
                        <option value="Administrator">Administrator</option>
                        <option value="Controller">Controller</option>
                        <option value="Officer">Officer</option>
                        <option value="Organizer">Organizer</option>
                        <option value="Supervisor">Supervisor</option>
                        <option value="Superintendent">Superintendent</option>
                        <option value="Head">Head</option>
                        <option value="Overseer">Overseer</option>
                        <option value="Chief">Chief</option>
                        <option value="Foreman">Foreman</option>
                        <option value="Principal">Principal</option>
                        <option value="President">President</option>
                        <option value="Computer Scientist">
                          Computer Scientist
                        </option>
                        <option value="IT Professional">IT Professional</option>
                        <option value="UX Designer & UI Developer">
                          UX Designer & UI Developer
                        </option>
                        <option value="SQL Developer">SQL Developer</option>
                        <option value="Web Designer">Web Designer</option>
                        <option value="Web Developer">Web Developer</option>
                        <option value="Help Desk Worker/Desktop Support">
                          Help Desk Worker/Desktop Support
                        </option>
                        <option value="Software Engineer">
                          Software Engineer
                        </option>
                        <option value="Data Entry">Data Entry</option>
                        <option value="DevOps Engineer">DevOps Engineer</option>
                        <option value="Computer Programmer">
                          Computer Programmer
                        </option>
                        <option value="Network Administrator">
                          Network Administrator
                        </option>
                        <option value="Information Security Analyst">
                          Information Security Analyst
                        </option>
                        <option value="Artificial Intelligence Engineer">
                          Artificial Intelligence Engineer
                        </option>
                        <option value="Cloud Architect">Cloud Architect</option>
                        <option value="IT Manager">IT Manager</option>
                        <option value="Technical Specialist">
                          Technical Specialist
                        </option>
                        <option value="Application Developer">
                          Application Developer
                        </option>
                        <option value="Chief Technology Officer (CTO)">
                          Chief Technology Officer (CTO)
                        </option>
                        <option value="Chief Information Officer (CIO)">
                          Chief Information Officer (CIO)
                        </option>
                        <option value="Sales Associate">Sales Associate</option>
                        <option value="Sales Representative">
                          Sales Representative
                        </option>
                        <option value="Sales Manager">Sales Manager</option>
                        <option value="Retail Worker">Retail Worker</option>
                        <option value="Store Manager">Store Manager</option>
                        <option value="Account Executive">
                          Account Executive
                        </option>
                        <option value="Account Manager">Account Manager</option>
                        <option value="Area Sales Manager">
                          Area Sales Manager
                        </option>
                        <option value="Direct Salesperson">
                          Direct Salesperson
                        </option>
                        <option value="Director of Inside Sales">
                          Director of Inside Sales
                        </option>
                        <option value="Outside Sales Manager">
                          Outside Sales Manager
                        </option>
                        <option value="Sales Analyst">Sales Analyst</option>
                        <option value="Market Development Manager">
                          Market Development Manager
                        </option>
                        <option value="B2B Sales Specialist">
                          B2B Sales Specialist
                        </option>
                        <option value="Sales Engineer">Sales Engineer</option>
                        <option value="Merchandising Associate">
                          Merchandising Associate
                        </option>
                      </Select>
                    </FormControl>

                    <Flex gap="2" w="100%">
                      <Text>By signing up, you agree to our </Text>
                      <Text color="orange">
                        <Link to="/terms">Terms and Conditions.</Link>
                      </Text>
                    </Flex>
                    <Button type="submit" colorScheme="orange" w="full">
                      Sign Up
                    </Button>
                    <Flex gap="2" w="fit-content" m="auto">
                      <Text>Already have an account?</Text>
                      <Text color="orange">
                        <Link to="/login">Login Now</Link>
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
                      <FormLabel htmlFor="firstName">First Name</FormLabel>
                      <Input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={firstName}
                        onChange={(e) => setfirstName(e.target.value)}
                      />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel htmlFor="lastName">Last Name</FormLabel>
                      <Input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={lastName}
                        onChange={(e) => setlastName(e.target.value)}
                      />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel htmlFor="email">Official Email Id</FormLabel>
                      <Input
                        type="email"
                        id="email"
                        name="email"
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
                    <FormControl isRequired>
                      <FormLabel htmlFor="mobile">Mobile Number</FormLabel>
                      <Input
                        type="tel"
                        id="mobile"
                        name="mobile"
                        value={mobile}
                        onChange={(e) => setmobile(e.target.value)}
                      />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel htmlFor="companyName">Company Name</FormLabel>
                      <Input
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={companyName}
                        onChange={(e) => setcompanyName(e.target.value)}
                      />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel htmlFor="position">Position</FormLabel>
                      <Select
                        id="position"
                        name="position"
                        value={position}
                        onChange={(e) => setposition(e.target.value)}
                      >
                        <option value="">Select Position From Here</option>
                        <option value="Marketing Specialist">
                          Marketing Specialist
                        </option>
                        <option value="Marketing Manager">
                          Marketing Manager
                        </option>
                        <option value="Marketing Director">
                          Marketing Director
                        </option>
                        <option value="Graphic Designer">
                          Graphic Designer
                        </option>
                        <option value="Marketing Research Analyst">
                          Marketing Research Analyst
                        </option>
                        <option value="Marketing Communications Manager">
                          Marketing Communications Manager
                        </option>
                        <option value="Marketing Consultant">
                          Marketing Consultant
                        </option>
                        <option value="Product Manager">Product Manager</option>
                        <option value="Public Relations">
                          Public Relations
                        </option>
                        <option value="Social Media Assistant">
                          Social Media Assistant
                        </option>
                        <option value="Brand Manager">Brand Manager</option>
                        <option value="SEO Manager">SEO Manager</option>
                        <option value="Content Marketing Manager">
                          Content Marketing Manager
                        </option>
                        <option value="Copywriter">Copywriter</option>
                        <option value="Media Buyer">Media Buyer</option>
                        <option value="Digital Marketing Manager">
                          Digital Marketing Manager
                        </option>
                        <option value="eCommerce Marketing Specialist">
                          eCommerce Marketing Specialist
                        </option>
                        <option value="Brand Strategist">
                          Brand Strategist
                        </option>
                        <option value="Vice President of Marketing">
                          Vice President of Marketing
                        </option>
                        <option value="Media Relations Coordinator">
                          Media Relations Coordinator
                        </option>
                        <option value="Administrative Assistant">
                          Administrative Assistant
                        </option>
                        <option value="Receptionist">Receptionist</option>
                        <option value="Office Manager">Office Manager</option>
                        <option value="Auditing Clerk">Auditing Clerk</option>
                        <option value="Bookkeeper">Bookkeeper</option>
                        <option value="Account Executive">
                          Account Executive
                        </option>
                        <option value="Branch Manager">Branch Manager</option>
                        <option value="Business Manager">
                          Business Manager
                        </option>
                        <option value="Quality Control Coordinator">
                          Quality Control Coordinator
                        </option>
                        <option value="Administrative Manager">
                          Administrative Manager
                        </option>
                        <option value="Chief Executive Officer">
                          Chief Executive Officer
                        </option>
                        <option value="Business Analyst">
                          Business Analyst
                        </option>
                        <option value="Risk Manager">Risk Manager</option>
                        <option value="Human Resources">Human Resources</option>
                        <option value="Office Assistant">
                          Office Assistant
                        </option>
                        <option value="Secretary">Secretary</option>
                        <option value="Office Clerk">Office Clerk</option>
                        <option value="File Clerk">File Clerk</option>
                        <option value="Account Collector">
                          Account Collector
                        </option>
                        <option value="Administrative Specialist">
                          Administrative Specialist
                        </option>
                        <option value="Executive Assistant">
                          Executive Assistant
                        </option>
                        <option value="Program Administrator">
                          Program Administrator
                        </option>
                        <option value="Program Manager">Program Manager</option>
                        <option value="Administrative Analyst">
                          Administrative Analyst
                        </option>
                        <option value="Data Entry">Data Entry</option>
                        <option value="CEO—Chief Executive Officer">
                          CEO—Chief Executive Officer
                        </option>
                        <option value="COO—Chief Operating Officer">
                          COO—Chief Operating Officer
                        </option>
                        <option value="CFO—Chief Financial Officer">
                          CFO—Chief Financial Officer
                        </option>
                        <option value="CIO—Chief Information Officer">
                          CIO—Chief Information Officer
                        </option>
                        <option value="CTO—Chief Technology Officer">
                          CTO—Chief Technology Officer
                        </option>
                        <option value="CMO—Chief Marketing Officer">
                          CMO—Chief Marketing Officer
                        </option>
                        <option value="CHRO—Chief Human Resources Officer">
                          CHRO—Chief Human Resources Officer
                        </option>
                        <option value="CDO—Chief Data Officer">
                          CDO—Chief Data Officer
                        </option>
                        <option value="CPO—Chief Product Officer">
                          CPO—Chief Product Officer
                        </option>
                        <option value="CCO—Chief Customer Officer">
                          CCO—Chief Customer Officer
                        </option>
                        <option value="Team Leader">Team Leader</option>
                        <option value="Manager">Manager</option>
                        <option value="Assistant Manager">
                          Assistant Manager
                        </option>
                        <option value="Executive">Executive</option>
                        <option value="Director">Director</option>
                        <option value="Coordinator">Coordinator</option>
                        <option value="Administrator">Administrator</option>
                        <option value="Controller">Controller</option>
                        <option value="Officer">Officer</option>
                        <option value="Organizer">Organizer</option>
                        <option value="Supervisor">Supervisor</option>
                        <option value="Superintendent">Superintendent</option>
                        <option value="Head">Head</option>
                        <option value="Overseer">Overseer</option>
                        <option value="Chief">Chief</option>
                        <option value="Foreman">Foreman</option>
                        <option value="Principal">Principal</option>
                        <option value="President">President</option>
                        <option value="Computer Scientist">
                          Computer Scientist
                        </option>
                        <option value="IT Professional">IT Professional</option>
                        <option value="UX Designer & UI Developer">
                          UX Designer & UI Developer
                        </option>
                        <option value="SQL Developer">SQL Developer</option>
                        <option value="Web Designer">Web Designer</option>
                        <option value="Web Developer">Web Developer</option>
                        <option value="Help Desk Worker/Desktop Support">
                          Help Desk Worker/Desktop Support
                        </option>
                        <option value="Software Engineer">
                          Software Engineer
                        </option>
                        <option value="Data Entry">Data Entry</option>
                        <option value="DevOps Engineer">DevOps Engineer</option>
                        <option value="Computer Programmer">
                          Computer Programmer
                        </option>
                        <option value="Network Administrator">
                          Network Administrator
                        </option>
                        <option value="Information Security Analyst">
                          Information Security Analyst
                        </option>
                        <option value="Artificial Intelligence Engineer">
                          Artificial Intelligence Engineer
                        </option>
                        <option value="Cloud Architect">Cloud Architect</option>
                        <option value="IT Manager">IT Manager</option>
                        <option value="Technical Specialist">
                          Technical Specialist
                        </option>
                        <option value="Application Developer">
                          Application Developer
                        </option>
                        <option value="Chief Technology Officer (CTO)">
                          Chief Technology Officer (CTO)
                        </option>
                        <option value="Chief Information Officer (CIO)">
                          Chief Information Officer (CIO)
                        </option>
                        <option value="Sales Associate">Sales Associate</option>
                        <option value="Sales Representative">
                          Sales Representative
                        </option>
                        <option value="Sales Manager">Sales Manager</option>
                        <option value="Retail Worker">Retail Worker</option>
                        <option value="Store Manager">Store Manager</option>
                        <option value="Account Executive">
                          Account Executive
                        </option>
                        <option value="Account Manager">Account Manager</option>
                        <option value="Area Sales Manager">
                          Area Sales Manager
                        </option>
                        <option value="Direct Salesperson">
                          Direct Salesperson
                        </option>
                        <option value="Director of Inside Sales">
                          Director of Inside Sales
                        </option>
                        <option value="Outside Sales Manager">
                          Outside Sales Manager
                        </option>
                        <option value="Sales Analyst">Sales Analyst</option>
                        <option value="Market Development Manager">
                          Market Development Manager
                        </option>
                        <option value="B2B Sales Specialist">
                          B2B Sales Specialist
                        </option>
                        <option value="Sales Engineer">Sales Engineer</option>
                        <option value="Merchandising Associate">
                          Merchandising Associate
                        </option>
                      </Select>
                    </FormControl>

                    <Flex gap="2" w="100%">
                      <Text>By signing up, you agree to our </Text>
                      <Text color="orange">
                        <Link to="/terms">Terms and Conditions.</Link>
                      </Text>
                    </Flex>
                    <Button type="submit" colorScheme="orange" w="full">
                      Sign Up
                    </Button>
                    <Flex gap="2" w="fit-content" m="auto">
                      <Text>Already have an account?</Text>
                      <Text color="orange">
                        <Link to="/login">Login Now</Link>
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
                      <FormLabel htmlFor="firstName">First Name</FormLabel>
                      <Input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={firstName}
                        onChange={(e) => setfirstName(e.target.value)}
                      />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel htmlFor="lastName">Last Name</FormLabel>
                      <Input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={lastName}
                        onChange={(e) => setlastName(e.target.value)}
                      />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel htmlFor="email"> Email Id</FormLabel>
                      <Input
                        type="email"
                        id="email"
                        name="email"
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
                    <FormControl isRequired>
                      <FormLabel htmlFor="mobile">Mobile Number</FormLabel>
                      <Input
                        type="tel"
                        id="mobile"
                        name="mobile"
                        value={mobile}
                        onChange={(e) => setmobile(e.target.value)}
                      />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel htmlFor="companyName">Company Name</FormLabel>
                      <Input
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={companyName}
                        onChange={(e) => setcompanyName(e.target.value)}
                      />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel htmlFor="position">Position</FormLabel>
                      <Select
                        id="position"
                        name="position"
                        value={position}
                        onChange={(e) => setposition(e.target.value)}
                      >
                        <option value="">Select Position From Here</option>
                        <option value="Marketing Specialist">
                          Marketing Specialist
                        </option>
                        <option value="Marketing Manager">
                          Marketing Manager
                        </option>
                        <option value="Marketing Director">
                          Marketing Director
                        </option>
                        <option value="Graphic Designer">
                          Graphic Designer
                        </option>
                        <option value="Marketing Research Analyst">
                          Marketing Research Analyst
                        </option>
                        <option value="Marketing Communications Manager">
                          Marketing Communications Manager
                        </option>
                        <option value="Marketing Consultant">
                          Marketing Consultant
                        </option>
                        <option value="Product Manager">Product Manager</option>
                        <option value="Public Relations">
                          Public Relations
                        </option>
                        <option value="Social Media Assistant">
                          Social Media Assistant
                        </option>
                        <option value="Brand Manager">Brand Manager</option>
                        <option value="SEO Manager">SEO Manager</option>
                        <option value="Content Marketing Manager">
                          Content Marketing Manager
                        </option>
                        <option value="Copywriter">Copywriter</option>
                        <option value="Media Buyer">Media Buyer</option>
                        <option value="Digital Marketing Manager">
                          Digital Marketing Manager
                        </option>
                        <option value="eCommerce Marketing Specialist">
                          eCommerce Marketing Specialist
                        </option>
                        <option value="Brand Strategist">
                          Brand Strategist
                        </option>
                        <option value="Vice President of Marketing">
                          Vice President of Marketing
                        </option>
                        <option value="Media Relations Coordinator">
                          Media Relations Coordinator
                        </option>
                        <option value="Administrative Assistant">
                          Administrative Assistant
                        </option>
                        <option value="Receptionist">Receptionist</option>
                        <option value="Office Manager">Office Manager</option>
                        <option value="Auditing Clerk">Auditing Clerk</option>
                        <option value="Bookkeeper">Bookkeeper</option>
                        <option value="Account Executive">
                          Account Executive
                        </option>
                        <option value="Branch Manager">Branch Manager</option>
                        <option value="Business Manager">
                          Business Manager
                        </option>
                        <option value="Quality Control Coordinator">
                          Quality Control Coordinator
                        </option>
                        <option value="Administrative Manager">
                          Administrative Manager
                        </option>
                        <option value="Chief Executive Officer">
                          Chief Executive Officer
                        </option>
                        <option value="Business Analyst">
                          Business Analyst
                        </option>
                        <option value="Risk Manager">Risk Manager</option>
                        <option value="Human Resources">Human Resources</option>
                        <option value="Office Assistant">
                          Office Assistant
                        </option>
                        <option value="Secretary">Secretary</option>
                        <option value="Office Clerk">Office Clerk</option>
                        <option value="File Clerk">File Clerk</option>
                        <option value="Account Collector">
                          Account Collector
                        </option>
                        <option value="Administrative Specialist">
                          Administrative Specialist
                        </option>
                        <option value="Executive Assistant">
                          Executive Assistant
                        </option>
                        <option value="Program Administrator">
                          Program Administrator
                        </option>
                        <option value="Program Manager">Program Manager</option>
                        <option value="Administrative Analyst">
                          Administrative Analyst
                        </option>
                        <option value="Data Entry">Data Entry</option>
                        <option value="CEO—Chief Executive Officer">
                          CEO—Chief Executive Officer
                        </option>
                        <option value="COO—Chief Operating Officer">
                          COO—Chief Operating Officer
                        </option>
                        <option value="CFO—Chief Financial Officer">
                          CFO—Chief Financial Officer
                        </option>
                        <option value="CIO—Chief Information Officer">
                          CIO—Chief Information Officer
                        </option>
                        <option value="CTO—Chief Technology Officer">
                          CTO—Chief Technology Officer
                        </option>
                        <option value="CMO—Chief Marketing Officer">
                          CMO—Chief Marketing Officer
                        </option>
                        <option value="CHRO—Chief Human Resources Officer">
                          CHRO—Chief Human Resources Officer
                        </option>
                        <option value="CDO—Chief Data Officer">
                          CDO—Chief Data Officer
                        </option>
                        <option value="CPO—Chief Product Officer">
                          CPO—Chief Product Officer
                        </option>
                        <option value="CCO—Chief Customer Officer">
                          CCO—Chief Customer Officer
                        </option>
                        <option value="Team Leader">Team Leader</option>
                        <option value="Manager">Manager</option>
                        <option value="Assistant Manager">
                          Assistant Manager
                        </option>
                        <option value="Executive">Executive</option>
                        <option value="Director">Director</option>
                        <option value="Coordinator">Coordinator</option>
                        <option value="Administrator">Administrator</option>
                        <option value="Controller">Controller</option>
                        <option value="Officer">Officer</option>
                        <option value="Organizer">Organizer</option>
                        <option value="Supervisor">Supervisor</option>
                        <option value="Superintendent">Superintendent</option>
                        <option value="Head">Head</option>
                        <option value="Overseer">Overseer</option>
                        <option value="Chief">Chief</option>
                        <option value="Foreman">Foreman</option>
                        <option value="Principal">Principal</option>
                        <option value="President">President</option>
                        <option value="Computer Scientist">
                          Computer Scientist
                        </option>
                        <option value="IT Professional">IT Professional</option>
                        <option value="UX Designer & UI Developer">
                          UX Designer & UI Developer
                        </option>
                        <option value="SQL Developer">SQL Developer</option>
                        <option value="Web Designer">Web Designer</option>
                        <option value="Web Developer">Web Developer</option>
                        <option value="Help Desk Worker/Desktop Support">
                          Help Desk Worker/Desktop Support
                        </option>
                        <option value="Software Engineer">
                          Software Engineer
                        </option>
                        <option value="Data Entry">Data Entry</option>
                        <option value="DevOps Engineer">DevOps Engineer</option>
                        <option value="Computer Programmer">
                          Computer Programmer
                        </option>
                        <option value="Network Administrator">
                          Network Administrator
                        </option>
                        <option value="Information Security Analyst">
                          Information Security Analyst
                        </option>
                        <option value="Artificial Intelligence Engineer">
                          Artificial Intelligence Engineer
                        </option>
                        <option value="Cloud Architect">Cloud Architect</option>
                        <option value="IT Manager">IT Manager</option>
                        <option value="Technical Specialist">
                          Technical Specialist
                        </option>
                        <option value="Application Developer">
                          Application Developer
                        </option>
                        <option value="Chief Technology Officer (CTO)">
                          Chief Technology Officer (CTO)
                        </option>
                        <option value="Chief Information Officer (CIO)">
                          Chief Information Officer (CIO)
                        </option>
                        <option value="Sales Associate">Sales Associate</option>
                        <option value="Sales Representative">
                          Sales Representative
                        </option>
                        <option value="Sales Manager">Sales Manager</option>
                        <option value="Retail Worker">Retail Worker</option>
                        <option value="Store Manager">Store Manager</option>
                        <option value="Account Executive">
                          Account Executive
                        </option>
                        <option value="Account Manager">Account Manager</option>
                        <option value="Area Sales Manager">
                          Area Sales Manager
                        </option>
                        <option value="Direct Salesperson">
                          Direct Salesperson
                        </option>
                        <option value="Director of Inside Sales">
                          Director of Inside Sales
                        </option>
                        <option value="Outside Sales Manager">
                          Outside Sales Manager
                        </option>
                        <option value="Sales Analyst">Sales Analyst</option>
                        <option value="Market Development Manager">
                          Market Development Manager
                        </option>
                        <option value="B2B Sales Specialist">
                          B2B Sales Specialist
                        </option>
                        <option value="Sales Engineer">Sales Engineer</option>
                        <option value="Merchandising Associate">
                          Merchandising Associate
                        </option>
                      </Select>
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel htmlFor="experience">Experience</FormLabel>
                      <Input
                        type="text"
                        id="experience"
                        name="experience"
                        value={experience}
                        onChange={(e) => setexperience(e.target.value)}
                      />
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel htmlFor="domainOfInterest">
                        Domain Of Interest
                      </FormLabel>
                      <Select
                        id="domainOfInterest"
                        name="domainOfInterest"
                        value={domainOfInterest}
                        onChange={(e) => setdomainOfInterest(e.target.value)}
                      >
                        <option value="">Select Domain Of Interest</option>
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

                    <Flex gap="2" w="100%">
                      <Text>By signing up, you agree to our </Text>
                      <Text color="orange">
                        <Link to="/terms">Terms and Conditions.</Link>
                      </Text>
                    </Flex>

                    <Button type="submit" colorScheme="orange" w="full">
                      Sign Up
                    </Button>
                    <Flex gap="2" w="fit-content" m="auto">
                      <Text>Already have an account?</Text>
                      <Text color="orange">
                        <Link to="/login">Login Now</Link>
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

export default Signup;
