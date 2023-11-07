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
  Stepper,
  Step,
  StepIndicator,
  StepStatus,
  StepIcon,
  StepNumber,
  StepTitle,
  useSteps,
  StepDescription,
  StepSeparator,
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
import section4 from "../../assest/Rectangle7.png";
import learn from "../../assest/1.png";
import compete from "../../assest/2.png";
import mentor from "../../assest/3.png";
import section1 from "../../assest/Rectangle1.png";
import section2 from "../../assest/Rectangle2.png";
import sec1 from "../../assest/Rectangle 8.png";
import sec2 from "../../assest/Rectangle 12.png";
import sec3 from "../../assest/Rectangle 13.png";
import sec4 from "../../assest/Rectangle 14.png";
import sec5 from "../../assest/Rectangle 18.png";
import sec6 from "../../assest/Rectangle 19.png";
import sec7 from "../../assest/Rectangle 20.png";
import sec8 from "../../assest/Rectangle 21.png";
import section5 from "../../assest/Untitled_design__1_-removebg-preview.png";
import section6 from "../../assest/Rectangle 22.png";

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

  const slides = [
    {
      imgs: [section1, section2],
    },
    {
      imgs: [
        "https://images.pexels.com/photos/2878019/pexels-photo-2878019.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
        "https://images.pexels.com/photos/1142950/pexels-photo-1142950.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      ],
    },
    {
      imgs: [
        "https://images.pexels.com/photos/3124111/pexels-photo-3124111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "https://images.pexels.com/photos/3124111/pexels-photo-3124111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      ],
    },
    {
      imgs: [
        "https://images.pexels.com/photos/2599537/pexels-photo-2599537.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "https://images.pexels.com/photos/2714581/pexels-photo-2714581.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      ],
    },
    {
      imgs: [
        "https://images.pexels.com/photos/2599537/pexels-photo-2599537.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "https://images.pexels.com/photos/2714581/pexels-photo-2714581.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      ],
    },
    {
      imgs: [
        "https://images.pexels.com/photos/2599537/pexels-photo-2599537.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "https://images.pexels.com/photos/2714581/pexels-photo-2714581.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      ],
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
    ml: `-${currentSlide * 100}%`,
  };

  useEffect(() => {
    const handleSlider = () => {
      if (!isPaused) {
        nextSlide();
      }
    };

    const automatedSlide = setInterval(handleSlider, 3000);

    return () => clearInterval(automatedSlide);
  }, [isPaused, currentSlide]);

  const pauseSlide = () => {
    setIsPaused(true);
  };

  const resumeSlide = () => {
    setIsPaused(false);
  };

  //single slider

  const slides1 = [
    {
      imgs: [section6],
    },
    {
      imgs: [
        "https://images.pexels.com/photos/2878019/pexels-photo-2878019.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
      ],
    },
    {
      imgs: [
        "https://images.pexels.com/photos/3124111/pexels-photo-3124111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      ],
    },
  ];

  const [currentSlide1, setcurrentSlide1] = useState(0);
  const slides1Count1 = slides1.length;

  const prevSlide1 = () => {
    setcurrentSlide1((s) => (s === 0 ? slides1Count1 - 1 : s - 1));
  };

  const nextSlide1 = () => {
    setcurrentSlide1((s) => (s === slides1Count1 - 1 ? 0 : s + 1));
  };

  const setSlide1 = (slide) => {
    setcurrentSlide1(slide);
  };

  const [isPaused1, setIsPaused1] = useState(false);

  const carouselStyle1 = {
    transition: "all .5s",
    ml: `-${currentSlide1 * 100}%`,
  };

  useEffect(() => {
    const handleSlider = () => {
      if (!isPaused1) {
        nextSlide1();
      }
    };

    const automatedSlide1 = setInterval(handleSlider, 3000);

    return () => clearInterval(automatedSlide1);
  }, [isPaused1, currentSlide1]);

  const pauseSlide1 = () => {
    setIsPaused1(true);
  };

  const resumeSlide1 = () => {
    setIsPaused1(false);
  };

  const steps = [
    {
      title: "Step 1 : Submit Your Application",
      description:
        "Tell us about yourself and what drives you to join this course.",
    },
    {
      title: "Step 2 : Clear A Short Screening Test",
      description:
        "Clear the JET (Job Eligibility Test) to schedule 1:1 Career Mentorship session  with our Career Experts.",
    },
    {
      title: "Step 3 : Block your seat",
      description: "vPay admission fee to move forward.",
    },
    {
      title: "Step 4 : Course Commencements",
      description:
        "We run cohort based batches for each program hence kindly check the Job Ready section for the commencement dates.",
    },
  ];
  const { activeStep } = useSteps({
    index: 0,
    count: steps.length,
  });

  return (
    <>
      <Box display="flex" width="100%" pl={20} mt={100}>
        <Box width="50%">
          <Heading as="h1" size="3xl" mt={20}>
            <Box
              textAlign={"left"}
              display="flex"
              ml="140px"
              width="527px"
              h="97"
              font-style="normal"
              font-weight="400"
              line-height="normal"
            >
              <Box
                text-align="left"
                color="#000000"
                flex-shrink="0"
                style={{
                  fontFamily: "Inter",
                  fontSize: "80px",
                  lineHeight: "normal",
                  fontStyle: "normal",
                  letterSpacing: "0em",
                  backdropFilter: "blur(2px)",
                }}
              >
                Build Your
              </Box>

              <Image
                src={time}
                width="102px"
                height="86px"
                background="cover no-repeat"
              />
            </Box>
            <Box mt="-30px" display="flex" ml="200px">
              <Image
                src={icon}
                width="79px"
                height="95px"
                mt="18px"
                mr="16px"
                mb="52px"
                background="cover no-repeat"
              />{" "}
              <Box
                width="481px"
                height="165px"
                text-align="left"
                box-shadow="0px 4px 4px 0px #00000040"
                color="#000000"
                style={{
                  fontFamily: "Inter",
                  fontSize: "100px",
                  fontWeight: "400",
                  letterSpacing: "0em",
                  lineHeight: "normal",
                  fontStyle: "normal",
                  mixBlendMode: "hard-light",

                  textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                }}
              >
                Dream
              </Box>
            </Box>
            <Box mt="-55px" display="flex" ml="100px">
              <Box
                w="400px"
                height="121px"
                text-align="left"
                color="#000000"
                style={{
                  fontFamily: "Inter",
                  fontSize: "100px",
                  fontWeight: "400",
                  letterSpacing: "0em",
                  lineHeight: "normal",
                  fontStyle: "normal",
                }}
              >
                CAREER
              </Box>

              <Image
                src={arrow}
                width="127px"
                background="cover no-repeat"
                flex-shrink="0"
                height="131px"
                top="172px"
                left="540px"
              />
            </Box>
          </Heading>
          <Box w="620px" h="60px" mb="100px" ml="100px">
            <Text
              textAlign={"left"}
              style={{
                fontFamily: "Inter",
                lineHeight: "normal",
                fontWeight: "500",
                fontStyle: "normal",
                fontSize: "25px",
              }}
              text-align="left"
              color="#000000"
            >
              We empower talents with boundless opportunities ,
            </Text>
            <Text
              color="#000000"
              style={{
                fontFamily: "Inter",
                lineHeight: "normal",
                fontWeight: "500",
                fontStyle: "normal",
                fontSize: "25px",
              }}
            >
              helping them unleash their full potential
            </Text>
          </Box>
          <Box
            boxShadow="rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
            width="665px"
            height="184px"
            flex-shrink="0"
            ml="80px"
          >
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

        <Box
          width="872px"
          height="746px"
          top="101px"
          flex-shrink="0"
          left="740px"
          background="cover no-repeat"
        >
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
              <Image src={amazon} />
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
      <Flex w="90%" m="auto" overflow="hidden" mt="100px">
        <Flex
          pos="relative"
          w="full"
          {...carouselStyle}
          onMouseEnter={pauseSlide}
          onMouseLeave={resumeSlide}
        >
          {slides.map((slide, sid) => (
            <Box key={`slide-${sid}`} flex="none" boxSize="full">
              <Flex>
                {slide.imgs.map((image, imgIndex) => (
                  <Box
                    justifyContent="space-between"
                    key={`image-${imgIndex}`}
                    w="50%"
                    p="3"
                  >
                    <Image
                      src={image}
                      alt={`carousel image ${imgIndex}`}
                      boxSize="full"
                      backgroundSize="cover"
                      h="200px"
                    />
                  </Box>
                ))}
              </Flex>
            </Box>
          ))}
        </Flex>
      </Flex>
      <Flex gap="10" mt="20px" justify="center" pos="absolute" w="full">
        {Array.from({ length: slidesCount }).map((_, slide) => (
          <Box
            width="15px"
            height="15px"
            key={`dots-${slide}`}
            cursor="pointer"
            boxSize={["7px", null, "15px"]}
            m="0 2px"
            bg={currentSlide === slide ? "#1D4A8E" : "#1D4A8E"}
            rounded="50%"
            display="inline-block"
            transition="background-color 0.6s ease"
            _hover={{ bg: "blackAlpha.800" }}
            onClick={() => setSlide(slide)}
          ></Box>
        ))}
      </Flex>
      <Box w="100%" mt="100px" display="flex">
        <Box
          width="531px"
          height="572px"
          top="397px"
          ml="130px"
          background="cover no-repeat"
        >
          <Image src={section3} alt="section3" />
        </Box>
        <Box w="70%" textAlign="center">
          <Text></Text>
        </Box>
      </Box>
      <Box
        w="80%"
        display="flex"
        justifyContent="space-around"
        m="auto"
        align-items="center"
        height="328px"
        background="linear-gradient(0deg, #FFFFFF, #FFFFFF),
linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1))"
        border="1px solid #FFFFFF1A"
      >
        <Box
          width="419px"
          height="173px"
          top="36px"
          left="85px"
          _hover={{ transform: "scale(1.1)" }}
        >
          <Image src={learn} alt="learn" />
        </Box>
        <Box
          width="419px"
          height="173px"
          top="36px"
          ml="30px"
          left="85px"
          _hover={{ transform: "scale(1.1)" }}
        >
          <Image src={compete} alt="compete" />
        </Box>
        <Box
          width="419px"
          height="173px"
          top="36px"
          ml="30px"
          left="85px"
          _hover={{ transform: "scale(1.1)" }}
        >
          <Image src={mentor} alt="mentor" />
        </Box>
      </Box>
      <Flex w="100%" mt="30px">
        <Box w="50%" p="10" ml="80px">
          <Box
            width="683px"
            height="73px"
            text-align="left"
            ml="50px"
            color="#000000"
          >
            {" "}
            <Heading
              style={{
                fontFamily: "Inter",
                fontSize: "50px",
                fontWeight: "500",
                fontStyle: "bold",
                lineHeight: "73px",
                letterSpacing: "0em",
                top: "454px",
                left: "107px",
              }}
            >
              Find The Best Guidance
            </Heading>
          </Box>

          <Box
            width="495px"
            mb="30px"
            height="61px"
            text-align="left"
            color="#000000"
            ml="50px"
          >
            <Heading
              style={{
                fontFamily: "Inter",
                fontSize: "40px",
                fontWeight: "500",
                lineHeight: "61px",
                letterSpacing: "0em",
                top: "527px",
                left: "107px",
              }}
            >
              To Grow Your Career
            </Heading>
          </Box>

          <Box
            width="667px"
            height="60px"
            ml="50px"
            text-align="left"
            color="#000000"
          >
            <Text
              style={{
                fontFamily: "Inter",
                fontSize: "25px",
                fontWeight: "400",
                lineHeight: "30px",
                letterSpacing: "0em",
                top: "628px",
                left: "107px",
              }}
            >
              Grow your skills with proper guidance step by step from Industrial
              Experts as per your domain and expertise
            </Text>
          </Box>

          <Box
            width="552px"
            height="80px"
            top="2270px"
            left="-608px"
            background="linear-gradient(0deg, #FFFFFF, #FFFFFF),
linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1))"
            border="1px solid #FFFFFF1A"
            mt="50px"
            ml="30px"
          >
            <Button
              width="210px"
              height="52px"
              top="14px"
              left="15px"
              background="#1D1E20"
              color="#FFFFFF"
              boxShadow="0px 4px 4px 0px #00000040"
              _hover={{ bg: "orange", color: "black" }}
              style={{
                fontFamily: "Inter",
                fontSize: "25px",
                fontWeight: "700",
                lineHeight: "normal",
                fontStyle: "normal",
              }}
            >
              Get The Mentor
            </Button>
            <Button
              width="210px"
              height="52px"
              top="14px"
              left="100px"
              background="#F8A80D"
              color="#000000"
              _hover={{ bg: "rgb(70,69,69)", color: "white" }}
              style={{
                fontFamily: "Inter",
                fontSize: "25px",
                fontWeight: "700",
                lineHeight: "normal",
                fontStyle: "normal",
              }}
            >
              Get The Skills
            </Button>
          </Box>
        </Box>

        <Box
          align="right"
          w="50%"
          ml="50px"
          width="528px"
          height="542px"
          top="378px"
          left="-774px"
        >
          <Image src={section4} alt="section4" />
        </Box>
      </Flex>
      <Box w="90%" textAlign="left" mt="10px" ml="70px">
        <Heading fontFamily="sans-serif">Explore Opportunities</Heading>
      </Box>
      <Box
        w="80%"
        display="flex"
        justifyContent="space-around"
        m="auto"
        pt={20}
        align-items="center"
        mt="10px"
        background="linear-gradient(0deg, #FFFFFF, #FFFFFF),
              linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1))"
        border="1px solid #FFFFFF1A"
        width="1440px"
        height="394px"
        top="2676px"
        left="-720px"
      >
        <Box
          width="291px"
          height="174px"
          top="62px"
          _hover={{ transform: "scale(1.1)" }}
        >
          <Image src={sec1} alt="Learn more about our learning programs" />
        </Box>
        <Box
          width="291px"
          height="174px"
          top="62px"
          ml="-130px"
          _hover={{ transform: "scale(1.1)" }}
        >
          <Image src={sec2} alt="Compete and showcase your skills" />
        </Box>
        <Box
          width="291px"
          height="174px"
          top="62px"
          ml="-130px"
          _hover={{ transform: "scale(1.1)" }}
        >
          <Image src={sec3} alt="Get guidance from experienced mentors" />
        </Box>
        <Box
          width="291px"
          height="174px"
          top="62px"
          ml="-130px"
          _hover={{ transform: "scale(1.1)" }}
        >
          <Image
            src={sec4}
            alt="Connect with mentors for personalized support"
          />
        </Box>
      </Box>
      <Box w="90%" textAlign="left" ml="70px" mt="-10px">
        <Heading fontFamily="sans-serif">How To Get Registered </Heading>
        <Text mt="10px">Apply For Job Ready Programs In 4 simple steps</Text>
      </Box>
      <Flex w="100%" display="flex">
        <Box w="50%" width="489px" height="483px" top="175px" ml="100px" p={10}>
          <Image src={section5} alt="mentor" />
        </Box>

        <Box w="50%"  ml="100px" h="600px">
          <Box borderRadius={"10px"} p="18px">
            <Stepper
              index={activeStep}
              orientation="vertical"
              w="100%"
              height="auto"
              gap="10"
              color="black"
              fontSize="15"
              fontFamily="Inter"
              fontWeight="700"
              wordWrap="break-word"
            >
              {steps.map((step, index) => (
                <Step key={index}>
                  <StepIndicator color="#FDB529" bg="#FDB529">
                    <StepStatus
                      complete
                      incomplete={<StepNumber />}
                      active={<StepNumber />}
                    />
                  </StepIndicator>

                  <Box mt="30px" textAlign="left" w="100%">
                    <Text
                      mt="1px"
                      color="black"
                      fontSize="32"
                      fontFamily="Inter"
                      fontWeight="700"
                      wordWrap="break-word"
                    >
                      {step.title}
                    </Text>
                    <StepDescription  wordWrap="break-word">{step.description}</StepDescription>
                  </Box>

                  <StepSeparator />
                </Step>
              ))}
            </Stepper>
          </Box>
        </Box>
      </Flex>

      <Box align="center"mt="30px" box-shadow="0px 4px 4px 0px #00000040">
        <Button
          bg="#EA9E58"
          p={5}
          width="210px"
          height="52px"
          color="#000000"
          _hover={{ bg: "rgb(70,69,69)", color: "white" }}
          style={{
            fontFamily: "Inter",
            fontSize: "30px",
            fontWeight: "700",
            lineHeight: "normal",
            fontStyle: "normal",
          }}
        >
          Apply Now
        </Button>
      </Box>
      <Box w="90%" textAlign="left" mt={20} ml="80px">
        <Heading fontFamily="sans-serif">Get Your Dream Opportunity </Heading>
      </Box>
      <Box
        w="80%"
        display="flex"
        justifyContent="space-around"
        m="auto"
        pt={20}
        align-items="center"
        background="linear-gradient(0deg, #FFFFFF, #FFFFFF),
linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1))"
        border="1px solid #FFFFFF1A"
        width="1440px"
        height="394px"
        top="2676px"
        left="-720px"
      >
        <Box
          width="291px"
          height="174px"
          top="62px"
          left="100px"
          _hover={{ transform: "scale(1.1)" }}
        >
          <Image src={sec5} alt="ftj" />
        </Box>
        <Box
          width="291px"
          height="174px"
          top="62px"
          ml="-130px"
          _hover={{ transform: "scale(1.1)" }}
        >
          <Image src={sec6} alt="fti" />
        </Box>
        <Box
          width="291px"
          height="174px"
          top="62px"
          ml="-130px"
          _hover={{ transform: "scale(1.1)" }}
        >
          <Image src={sec7} alt="vi" />
        </Box>
        <Box
          width="291px"
          height="174px"
          top="62px"
          ml="-130px"
          _hover={{ transform: "scale(1.1)" }}
        >
          <Image src={sec8} alt="hr" />
        </Box>
      </Box>
      <Flex w="90%" m="auto" overflow="hidden" mt="30px">
        <Flex
          pos="relative"
          h="400px"
          w="full"
          {...carouselStyle1}
          onMouseEnter={pauseSlide1}
          onMouseLeave={resumeSlide1}
        >
          {slides1.map((slide, sid) => (
            <Box key={`slide-${sid}`} flex="none" boxSize="full" shadow="md">
              <Flex>
                {slide.imgs.map((image, imgIndex) => (
                  <Box
                    justifyContent="space-between"
                    key={`image-${imgIndex}`}
                    h="500px"
                    w="900px"
                    m="auto"
                  >
                    <Image
                      src={image}
                      alt={`carousel image ${imgIndex}`}
                      boxSize="full"
                      backgroundSize="cover"
                      h="500px"
                    />
                  </Box>
                ))}
              </Flex>
            </Box>
          ))}
        </Flex>
      </Flex>
      <Flex gap="10" mt="20px" justify="center" pos="absolute" w="full">
        {Array.from({ length: slides1Count1 }).map((_, slide) => (
          <Box
            width="15px"
            height="15px"
            key={`dots-${slide}`}
            cursor="pointer"
            boxSize={["7px", null, "15px"]}
            m="0 2px"
            bg={currentSlide1 === slide ? "#1D4A8E" : "#1D4A8E"}
            rounded="50%"
            display="inline-block"
            transition="background-color 0.6s ease"
            _hover={{ bg: "blackAlpha.800" }}
            onClick={() => setSlide1(slide)}
          ></Box>
        ))}
      </Flex>
    </>
  );
};
export default Landing;
