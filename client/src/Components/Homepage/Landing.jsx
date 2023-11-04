import React from "react";
// import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import {
  Box,
  Image,
  Tabs,
  Input,
  TabList,
  TabPanels,
  TabPanel,
  Flex,
  Text,
  Button,
  Heading,
  Tab,
} from "@chakra-ui/react";
import time from "../../assest/progress 1.png";
import icon from "../../assest/right-arrow_2026976 1.png";
import arrow from "../../assest/360-degree_5651685 1.png";
import icons from "../../assest/digital.png";
import "./autoplaycarousel.css";
import amazon from "../../assest/amazon.jpg";
import dell from "../../assest/dell.jpg";
import ibm from "../../assest/ibm.jpg";
import infosys from "../../assest/infosys.jpg";
import maruti from "../../assest/maruti.jpg";
import tcs from "../../assest/tcs.jpg";
const Landing = () => {
  return (
    <>
      <Box display="flex" width="100%" pl={20} mt={100}>
        <Box width="50%">
          <Heading
            style={{ fontFamily: "Inter", fontSize: "100px" }}
            as="h1"
            size="3xl"
            mt={20}
          >
            <Box textAlign={"left"} display="flex">
              <Box
                w="470px"
                height="121px"
                font-family="Inter"
                line-height="121px"
                letter-spacing="0em"
                text-align="left"
                color="#000000"
              >
                Build Your
              </Box>

              <Image
                src={time}
                width="102px"
                height="86px"
                top="172px"
                left="540px"
              />
            </Box>
            <Box mt="-10px" display="flex">
              <Image
                src={icon}
                width="112px"
                height="117px"
                top="278px"
                left="52px"
                ml="10px"
                mr="50px"
              />{" "}
              <Box
                width="481px"
                height="165px"
                top="258px"
                left="182px"
                font-family="Inter"
                font-size="120px"
                font-weight="400"
                line-height="145px"
                letter-spacing="0em"
                text-align="left"
                box-shadow="0px 4px 4px 0px #00000040"
                color="#000000"
              >
                Dream
              </Box>
            </Box>
            <Box mt="-55px" textAlign={"left"} display="flex">
              <Box
                w="440px"
                height="121px"
                line-height="121px"
                letter-spacing="0em"
                text-align="left"
                color="#000000"
              >
                CAREER
              </Box>

              <Image
                src={arrow}
                width="102px"
                height="86px"
                top="172px"
                left="540px"
              />
            </Box>
          </Heading>

          <Text
            textAlign={"left"}
            style={{
              fontFamily: "Inter",
              fontWeight: "bold",
              fontSize: "20px",
            }}
            text-align="left"
            color="#000000"
          >
            SkillTank is a platform where talent meets
          </Text>
          <Text
            color="#000000"
            style={{
              fontFamily: "Inter",
              fontWeight: "bold",
              fontSize: "20px",
            }}
            mb="100px"
          >
            opportunities to unlock their potential.
          </Text>

          <Box boxShadow="rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset">
            <Tabs>
              <TabList>
                <Tab>Courses📚</Tab>
                <Tab>Universities🏫 </Tab>
                <Tab>Jobs/Internship🖥️</Tab>
                <Tab>Mentors👩‍🏫</Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
                  <Box mb={"20px"}>
                    <Input placeholder="Add your Domain here..." />
                  </Box>

                  <Box mb={"20px"}>
                    <Flex align="center" gap={"5px"}>
                      <Input
                        placeholder="Add your Expertise here..."
                        flex="1"
                      />
                      <Button
                        bg="rgb(255, 150, 53)"
                        color="whiteAlpha.1000"
                        _hover={{ bg: "rgb(70,69,69)", color: "white" }}
                      >
                        <AiOutlineSearch />
                        Search
                      </Button>
                    </Flex>
                  </Box>
                </TabPanel>
                <TabPanel>
                  <Box mb={"20px"}>
                    <Input placeholder="Add Location here..." />
                  </Box>

                  <Box mb={"20px"}>
                    <Flex align="center" gap={"5px"}>
                      <Input placeholder="Add Courses here..." flex="1" />
                      <Button
                        bg="rgb(255, 150, 53)"
                        color="whiteAlpha.1000"
                        _hover={{ bg: "rgb(70,69,69)", color: "white" }}
                      >
                        <AiOutlineSearch />
                        Search
                      </Button>
                    </Flex>
                  </Box>
                </TabPanel>
                <TabPanel>
                  <Box mb={"20px"}>
                    <Input placeholder="Add Location here..." />
                  </Box>

                  <Box mb={"20px"}>
                    <Flex align="center" gap={"5px"}>
                      <Input placeholder="Add Domain here..." flex="1" />
                      <Button
                        bg="rgb(255, 150, 53)"
                        color="whiteAlpha.1000"
                        _hover={{ bg: "rgb(70,69,69)", color: "white" }}
                      >
                        <AiOutlineSearch />
                        Search
                      </Button>
                    </Flex>
                  </Box>
                </TabPanel>
                <TabPanel>
                  <Box mb={"20px"}>
                    <Input placeholder="Add Domain here..." />
                  </Box>

                  <Box mb={"20px"}>
                    <Flex align="center" gap={"5px"}>
                      <Input placeholder="Add Experience here..." flex="1" />
                      <Button
                        bg="rgb(255, 150, 53)"
                        color="whiteAlpha.1000"
                        _hover={{ bg: "rgb(70,69,69)", color: "white" }}
                      >
                        <AiOutlineSearch />
                        Search
                      </Button>
                    </Flex>
                  </Box>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </Box>

        <Box width="700px" height="800px" top="101px" left="740px">
          <Image src={icons} borderRadius={10} width="100%" />
        </Box>
      </Box>

      <Box className="main" pl={5}>
        <Box className="main1">
          <Box w="600px">
            <Heading>Industry Veteran </Heading>
          </Box>
          <Heading>Trust Us:</Heading>
        </Box>

        <Box className="slider">
          <Box className="slide-track">
            <Box className="slide">
              <Image src={amazon} alt="amazon" />
            </Box>
            <Box className="slide">
              <Image src={dell} alt="amazon" />
            </Box>
            <Box className="slide">
              <Image src={ibm} alt="amazon" />
            </Box>
            <Box className="slide">
              <Image src={infosys} alt="amazon" />
            </Box>
            <Box className="slide">
              <Image src={maruti} alt="amazon" />
            </Box>
            <Box className="slide">
              <Image src={tcs} alt="amazon" />
            </Box>
            <Box className="slide">
              <Image src={amazon} alt="amazon" />
            </Box>
            <Box className="slide">
              <Image src={dell} alt="amazon" />
            </Box>
            <Box className="slide">
              <Image src={ibm} alt="amazon" />
            </Box>
            <Box className="slide">
              <Image src={infosys} alt="amazon" />
            </Box>
            <Box className="slide">
              <Image src={maruti} alt="amazon" />
            </Box>
            <Box className="slide">
              <Image src={tcs} alt="amazon" />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Landing;
