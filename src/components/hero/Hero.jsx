import React from "react";
import { Flex, Text, chakra, Box, Link } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import TagText from "../tagtext/TagText";

const ChakraIcon = chakra(Icon);

const Hero = () => {
  return (
    <Box
      justifyContent="center"
      alignItems="center"
      paddingLeft="80px"
      paddingTop="20px"
      marginTop="100px"
      paddingBottom="20px"
    >
      <Flex>
        <TagText>
          {`<h1>`}
          <Flex alignItems="center" justifyContent="center">
            <Text
              color="#48B0A0"
              fontSize="3xl"
              ml="30px"
              fontFamily="monospace"
            >
              1.Intro
            </Text>
            <Flex
              borderBottom="0.5px solid #48B0A0"
              width="500px"
              ml="25px"
            ></Flex>
          </Flex>

          {`</h1>`}
        </TagText>
      </Flex>
      <Flex
        flexDirection="column"
        paddingLeft="60px"
        paddingTop="20px"
        paddingRight="60px"
      >
        <TagText>
          {`<div>`}
          <TagText ml="30px">
            {" "}
            {`<span>`}
            <Text color="#48B0A0" fontSize="lg" ml="30px">
              {" "}
              Hi, my name is
            </Text>
            {`</span>`}
          </TagText>
          <TagText ml="30px">
            {`<h1>`}
            <Text
              color="#E26310"
              fontSize="5xl"
              fontWeight="bold"
              ml="30px"
              fontFamily="monospace"
              textDecoration="underline"
            >
              Wasiq Khan
            </Text>
            {`</h1>`}
          </TagText>
          <TagText ml="30px">
            {`<p>`}
            <Text
              fontWeight="light"
              color="white"
              ml="30px"
              textAlign="left"
              fontFamily="monospace"
              fontSize="15px"
              w="50%"
            >
              I am talented{" "}
              <Link color="#48B0A0" cursor="text">
                front-end developer
              </Link>{" "}
              with a passion for creating stunning, responsive, and
              user-friendly websites. With extensive knowledge and experience in{" "}
              <Link color="#48B0A0" cursor="text">
                HTML, CSS
              </Link>
              , and{" "}
              <Link color="#48B0A0" cursor="text">
                JavaScript
              </Link>
              , I have a proven track record of designing and developing
              engaging and interactive web applications.
            </Text>
            {`<p>`}
          </TagText>
          {`</div>`}
        </TagText>
      </Flex>
    </Box>
  );
};

export default Hero;
