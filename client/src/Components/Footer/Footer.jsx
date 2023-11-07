import React from "react";
import { Flex, Box, Text, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../../assest/skill.png";
const Footer = () => {
  return (
    <Flex mt="100px" w="100%" border="2px solid blue" mb="0px" h="700px">
      <Box background="linear-gradient(0deg, #ECD3AC, #ECD3AC)" w="40%">
        <Box
          cursor="pointer"
          w="200px"
          h="200px"
          ml="150px"
          mt="50px"
          align="center"
          object-fit="cover"
        >
          <Link to="/">
            <Image src={logo} alt="My Logo" />
          </Link>
          <Box
            height="30px"
            width="341px"
            color="#0e0d0d"
            font-family="Helvetica"
            font-size="25px"
            font-weight="700"
            left="0"
            letter-spacing="0"
            line-height="normal"
            ml="-25px"
            top="0"
            white-space="nowrap"
          >
            <Text fontSize="xl" fontWeight="bold">
              Shaping Tomorrow’s Leader
            </Text>
          </Box>
        </Box>
   
        <Box align="center" >
          <Text
            style={{
              whiteSpace: "nowrap",
              fontWeight: "700",
              fontFamily: "Inter-bold",
              fontSize: "35px",
              lineHeight: "normal",
              fontStyle: "normal",
              letterSpacing: "0",
              gap:"5px"
            }}
          >
            Stay Connected
          </Text>
          <Text>Email: admit@skilltank.tech</Text>
          <Text>Phone: +91-7726066716</Text>
        </Box>

        <Box fontWeight="bold">
          <Box>
            <Text>Stay Updated</Text>
            <Text>
              We'll send you updates on the latest opportunities to showcase
              your talent and get hired
            </Text>{" "}
            <Box mt={4}>
              <Text>Sign Up For Our Newsletter</Text>
              <Link color="teal.300" href="#">
                Subscribe
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box w="60%" bg="#0C0B0B" color="white">
        <Box></Box>
      </Box>
    </Flex>
  );
};

export default Footer;
