import React from "react";
import { Flex, Box, Text, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../../assest/skill.png";
import logo1 from "../../assest/Line 1.png";
import logo2 from "../../assest/arrow (1) 1.png";
import logo3 from "../../assest/discord 1.png";
import logo4 from "../../assest/facebook 1.png";
import logo5 from "../../assest/instagram 1.png";
import logo6 from "../../assest/linkedin 1.png";
import logo7 from "../../assest/telegram 1.png";
import logo8 from "../../assest/phone 1.png";
import logo9 from "../../assest/mail 1.png";

const Footer = () => {
  return (
    <Flex mt="100px" w="100%" mb="0px" h="700px">
      <Box background="linear-gradient(0deg, #ECD3AC, #ECD3AC)" w="40%">
        <Box
          cursor="pointer"
          w="200px"
          h="150px"
          ml="130px"
          mt="50px"
          align="center"
          object-fit="cover"
        >
          <Link to="/">
            <Image src={logo} alt="My Logo" w="80%" />
          </Link>
          <Box
            height="30px"
            width="341px"
            color="#0e0d0d"
            font-family="Inter"
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
        <Image src={logo1} alt="" mt="10px"/>

        <Box align="left" mt="30px" ml="150px" color="#0e0d0d">
          <Text
            style={{
              whiteSpace: "nowrap",
              fontWeight: "700",
              fontFamily: "Inter-bold",
              fontSize: "30px",
              lineHeight: "normal",
              fontStyle: "normal",
              letterSpacing: "0",
              marginBottom: "20px",
            }}
          >
            Stay Connected
          </Text>
          <Flex gap="3">
            {" "}
            <Image src={logo9} alt="" h="20px" w="20px" />{" "}
            <Text
              style={{
                fontWeight: "bold",
                marginBottom: "8px",
                fontFamily: "Inter-bold",
                fontSize: "20px",
              }}
            >
              admit@skilltank.tech
            </Text>
          </Flex>
          <Flex gap="3">
            {" "}
            <Image src={logo8} alt="" h="20px" w="20px" />{" "}
            <Text
              style={{
                fontWeight: "bold",
                marginBottom: "8px",
                fontFamily: "Inter-bold",
                fontSize: "20px",
              }}
            >
              {" "}
              +91-7726066716
            </Text>
          </Flex>

          <Flex gap="5" ml="20px" mt="20px">
            {" "}
            <Image src={logo6} alt="" h="20px" w="20px" />
            <Image src={logo5} alt="" h="20px" w="20px" />
            <Image src={logo4} alt="" h="20px" w="20px" />{" "}
            <Image src={logo3} alt="" h="20px" w="20px" />
            <Image src={logo7} alt="" h="20px" w="20px" />
          </Flex>
        </Box>
        <Image src={logo1} alt="" mt="20px"/>
        <Box align="left" mt="30px" ml="150px" color="#0e0d0d">
          <Text
            style={{
              whiteSpace: "nowrap",
              fontWeight: "700",
              fontFamily: "Inter-bold",
              fontSize: "30px",
              lineHeight: "normal",
              fontStyle: "normal",
              letterSpacing: "0",
              marginBottom: "10px",
            }}
          >
            Stay Updated
          </Text>
          <Text
            style={{
              fontWeight: "300",
              fontFamily: "Inter",
              lineHeight: "normal",
              fontStyle: "normal",
              letterSpacing: "0",
              marginBottom: "10px",
              wordWrap: "break-word",
              mt: "30px",
            }}
          >
            We'll send you updates on the latest opportunities to
            <Text>showcase your talent and get hired</Text>
          </Text>
          <Flex
            width="300px"
            height="43px"
            display="flex"
            flexDirection="row"
            alignItems="center"
            background="#D9D9D9"
            color="#0e0d0d"
            mt="40px"
          >
            <Text
              style={{
                color: "#000",
                fontFamily: "Inter",
                fontSize: "15px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "normal",
                marginRight: "20px",
                marginLeft: "20px",
                align: "center",
                marginTop: "5px",
                flexShrink: 0,
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              Sign Up For Our Newsletter
            </Text>
            <Image src={logo2} alt="" ml="80px" w="50px" />
          </Flex>
        </Box>
      </Box>

      <Box w="60%" bg="#0C0B0B" color="white">
        <Box></Box>
      </Box>
    </Flex>
  )
}

export default Footer;
