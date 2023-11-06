import React, { useState, useEffect } from "react";
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
  keyframes,
  HStack,
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
import section3 from "../../assest/Screenshot_2023-11-04_at_12.41 1.png";
const Landing = () => {
  const [isPaused, setIsPaused] = useState(false);
  const handleHover = () => {
    setIsPaused(!isPaused);
  };

  const scroll = keyframes({
    "0%": {
      transform: "translateX(0)",
    },
    "100%": {
      transform: "translateX(calc(-250px * 9))",
    },
  });

  const arrowStyles = {
    width: "15px",
    height: "15px",
    top: "217px",
    left: "489px",
    cursor: "pointer",
    pos: "absolute",
    top: "50%",
    mt: "-22px",
    p: "16px",
    color: "blue",
    fontWeight: "bold",
    fontSize: "18px",
    transition: "0.6s ease",
    borderRadius: "0 3px 3px 0",
    userSelect: "none",
    _hover: {
      opacity: 0.8,
      bg: "black",
    },
  };
  const slides = [
    {
      img: "https://images.pexels.com/photos/2599537/pexels-photo-2599537.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      img: "https://images.pexels.com/photos/2714581/pexels-photo-2714581.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      img: "https://images.pexels.com/photos/2878019/pexels-photo-2878019.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    },
    {
      img: "https://images.pexels.com/photos/1142950/pexels-photo-1142950.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      img: "https://images.pexels.com/photos/3124111/pexels-photo-3124111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      img: "https://images.pexels.com/photos/3124111/pexels-photo-3124111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      img: "https://images.pexels.com/photos/3124111/pexels-photo-3124111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      img: "https://images.pexels.com/photos/3124111/pexels-photo-3124111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesCount = slides.length;

  const prevSlide = () => {
    setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
  };

  const setSlide = (slide) => {
    setCurrentSlide(slide);
  };

  const carouselStyle = {
    transition: "all .5s",
    ml: `-${currentSlide * 100}%`, // Adjust the percentage for two images at a time
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Adjust the interval time (in milliseconds) as needed

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <>
      <Box display="flex" width="100%" pl={20} mt={100}>
        <Box width="50%">
          <Heading
            style={{ fontFamily: "Inter", fontSize: "90px" }}
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

      <Box w="100%" textAlign="center" mt={20}>
        <Heading fontFamily="sans-serif">Industry Veteran Trust Us </Heading>
      </Box>

      <Box w="100%" align="right" mt={10}>
        <Box
          h="auto"
          overflow="hidden"
          position="relative"
          w="100%"
          display="grid"
          placeItems="center"
          overflowWrap="hidden"
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
        >
          <Box
            display="flex"
            w={`calc(250px * 18)`}
            animation={`${scroll} 20s linear ${
              isPaused ? "paused" : "infinite"
            }`}
          >
            <Box className="slideimage">
              <Image w="100%" src={amazon} />
            </Box>

            <Box className="slideimage">
              <Image src={dell} alt="amazon" />
            </Box>
            <Box className="slideimage">
              <Image src={ibm} alt="amazon" />
            </Box>
            <Box className="slideimage">
              <Image src={infosys} alt="amazon" />
            </Box>
            <Box className="slideimage">
              <Image src={maruti} alt="amazon" />
            </Box>
            <Box className="slideimage">
              <Image src={tcs} alt="amazon" />
            </Box>
            <Box className="slideimage">
              <Image src={amazon} alt="amazon" />
            </Box>
            <Box className="slideimage">
              <Image src={dell} alt="amazon" />
            </Box>
            <Box className="slideimage">
              <Image src={ibm} alt="amazon" />
            </Box>
            <Box className="slideimage">
              <Image src={infosys} alt="amazon" />
            </Box>
            <Box className="slideimage">
              <Image src={maruti} alt="amazon" />
            </Box>
            <Box className="slideimage">
              <Image src={tcs} alt="amazon" />
            </Box>
            <Box className="slideimage">
              <Image src={amazon} alt="amazon" />
            </Box>
            <Box className="slideimage">
              <Image src={dell} alt="amazon" />
            </Box>
            <Box className="slideimage">
              <Image src={ibm} alt="amazon" />
            </Box>
            <Box className="slideimage">
              <Image src={infosys} alt="amazon" />
            </Box>
            <Box className="slideimage">
              <Image src={maruti} alt="amazon" />
            </Box>
            <Box className="slideimage">
              <Image src={tcs} alt="amazon" />
            </Box>
            <Box className="slideimage">
              <Image src={amazon} alt="amazon" />
            </Box>
            <Box className="slideimage">
              <Image src={dell} alt="amazon" />
            </Box>
            <Box className="slideimage">
              <Image src={ibm} alt="amazon" />
            </Box>
            <Box className="slideimage">
              <Image src={infosys} alt="amazon" />
            </Box>
            <Box className="slideimage">
              <Image src={maruti} alt="amazon" />
            </Box>
            <Box className="slideimage">
              <Image src={tcs} alt="amazon" />
            </Box>
          </Box>
        </Box>
      </Box>

      <Flex
        background="linear-gradient(0deg, #FFFFFF, #FFFFFF),
linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1))"
        _dark={{
          bg: "#3e3e3e",
        }}
        p={10}
        alignItems="center"
        justifyContent="center"
      >
        <Flex
          overflow="hidden"
          pos="relative"
          width="1440px"
          height="308px"
          background="linear-gradient(0deg, #FFFFFF, #FFFFFF),
linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1))"
          border="1px solid  #FFFFFF1A"
        >
          <Flex
            h="200px"
            w="100%"
            gap={10}
            // border="2px solid red"
            {...carouselStyle}
          >
            {slides.map((slide, sid) => (
              <>
                <Box
                  key={`slide-${sid}`}
                  boxSize="full"
                  shadow="md"
                  flex="none"
                  w="50%"
                  height="auto"
                  // border="2px solid black"
                >
                  {" "}
                  <Text
                    color="white"
                    fontSize="xs"
                    p="8px 12px"
                    pos="absolute"
                    top="0"
                  >
                    {sid + 1} / {slidesCount}
                  </Text>
                  <Image
                    src={slide.img}
                    alt="carousel image"
                    boxSize="full"
                    backgroundSize="cover"
                    _hover={{transform: "translateZ(20px)"}} 
                  />
                </Box>
              </>
            ))}
          </Flex>
          {/* <Text {...arrowStyles} left="0"    onClick={prevSlide}>
            &#10094;
          </Text>
          <Text {...arrowStyles} right="0" onClick={nextSlide}>
            &#10095;
          </Text> */}
          <HStack justify="center" pos="absolute" bottom="8px" w="full">
            {Array.from({
              length: slidesCount,
            }).map((_, slide) => (
              <Box
            
                width="15px"
                height="15px"
                top="217px"
                left="489px"
                key={`dots-${slide}`}
                cursor="pointer"
                boxSize={["7px", null, "15px"]}
                m="0 2px"
                bg={currentSlide === slide ? "#1D4A8E" : "#1D4A8E"}
                rounded="50%"
                display="inline-block"
                transition="background-color 0.6s ease"
                _hover={{
                  bg: "blackAlpha.800",
                }}
                onClick={() => setSlide(slide)}
              ></Box>
            ))}
          </HStack>
        </Flex>
      </Flex>
<Box w="100%">
<Box  
 width= "593px"
height= "611px"
top= "397px"
left= "-56px"
>
<Image 
  src={section3} alt="amazon"
/>
</Box>
<Box
w="50%"
></Box>
</Box>



    </>
  );
};

export default Landing;
