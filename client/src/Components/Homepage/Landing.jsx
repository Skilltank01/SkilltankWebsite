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
import time from "../../assest/icons-49.png";
import icon from "../../assest/icons.png";
import arrow from "../../assest/arrow.png";
import icons from "../../assest/happy.png";

const Landing = () => {
  return (
    <>
      <Box display="flex" width="100%"  pl={20} mt={100}  >
        <Box width="50%"  >
          <Heading as="h1" size="4xl" mb={"30px"} mt={20}>
            <Box display="flex" justifyContent={"left"} gap={5} mb={"20px"}>
              Build Your
              <Image src={time} w="70px" h="70px" />
            </Box>
            <Box display="flex" justifyContent={"left"} gap={5} mb={"20px"}>
              <Image
                src="https://ouch-cdn2.icons8.com/EXFjjFdSq3yOB885yP5q0ywRU-9j-rPLu9qlP3E-T4Y/rs:fit:368:375/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMTAv/YzJiYjk2NzgtODdj/NS00MzRhLTllYzUt/ZTc0OTY3MGZlYWVi/LnBuZw.png"
                w="70px"
                h="70px"
              />
              <Image src={icon} w="70px" h="70px" />
              Dream
            </Box>
            <Box display="flex" justifyContent={"left"} gap={5} mb={"20px"}>
              Career .<Image src={arrow} w="100px" h="100px" />
            </Box>
          </Heading>
          <Text textAlign={"left"} mb={"30px"}>
            SkillTank is a platform where talent meets opportunities to unlock
            their potential.
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
                      <Button bg="rgb(255, 150, 53)" color="whiteAlpha.1000" _hover={{ bg: "rgb(70,69,69)", color: "white" }}>
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
                      <Input
                        placeholder="Add Courses here..."
                        flex="1"
                      />
                      <Button bg="rgb(255, 150, 53)" color="whiteAlpha.1000" _hover={{ bg: "rgb(70,69,69)", color: "white" }}>
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
                      <Input
                        placeholder="Add Domain here..."
                        flex="1"
                      />
                      <Button bg="rgb(255, 150, 53)" color="whiteAlpha.1000" _hover={{ bg: "rgb(70,69,69)", color: "white" }}>
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
                      <Input
                        placeholder="Add Experience here..."
                        flex="1"
                      />
                      <Button bg="rgb(255, 150, 53)" color="whiteAlpha.1000" _hover={{ bg: "rgb(70,69,69)", color: "white" }}>
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

        <Box width="50%" >
          {/* <Box width="100%" border="2px solid red" > */}
            <Image
              src={icons}
              borderRadius={10}
              h="full"
              width="500px"
              ml={20}
              mt={5}
            />
          {/* </Box> */}
        </Box>
      </Box>
    </>
  );
};

export default Landing;
