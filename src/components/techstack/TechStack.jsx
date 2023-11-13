import React from "react";
import { Text, Flex, Box, Image } from "@chakra-ui/react";
import TagText from "../tagtext/TagText";
import { stack, stack2 } from "../../constants/techstack.data";

const TechStack = () => {
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
          <Flex
            alignItems="center"
            justifyContent="center"

          >
            <Text
              color="#48B0A0"
              fontSize="3xl"
              ml="30px"
              fontFamily="monospace"
            >
              2.Tech Stack
            </Text>
            <Flex borderBottom="0.5px solid #48B0A0" width="500px" ml="25px"></Flex>
          </Flex>

          {`</h1>`}
        </TagText>
      </Flex>
      <Flex paddingLeft="60px" paddingTop="20px" paddingRight="60px">
        {stack.map((item) => {
          return (
            <Box
              key={item.id}
              cursor="pointer"
              width="200px"
              height="200px"
              opacity={0.5}
              padding="25px"
              mr="30px"
              borderRadius="5px"
              border="3px solid #48B0A0"
              _hover={{
                transform: "translateY(-20px)",

                transition: "all 0.5s ease-in-out",
                opacity: 1,
                filter: "blur(0px)",
              }}
              bg="rgba(72, 176, 160, 0.2)"
              bgSize="250% 250%, 100% 100%"
              bgPos="-120px -120px, 0 0"
              bgRepeat="no-repeat"
              boxShadow="0 4px 30px rgba(0, 0, 0, 0.1)"
              // filter="blur(2.2px)"
              webkitBackdropFilter="blur(2.2px)"
              alignItems="center"
              justifyContent="center"
            >
              <Box flexDirection="column">
                <TagText>
                  {`<img>`}
                  <Image
                    src={item.imgSrc}
                    alt="HTML Logo"
                    width="80px"
                    height="80px"
                    //align image to center
                    marginLeft="auto"
                    marginRight="auto"
                  />
                  {`</img>`}
                </TagText>
              </Box>
              <Flex
                flexDirection="row"
                //align on baseline
                alignItems="baseline"
                justifyContent="center"
                marginTop="10px"
              >
                <TagText>{`<h2>`}</TagText>
                <Text
                  color="#48B0A0"
                  fontSize="20px"
                  fontWeight="light"
                  fontFamily="monospace"
                  textAlign="center"
                >
                  {item.name}
                </Text>
                <TagText>{`<h2>`}</TagText>
              </Flex>
            </Box>
          );
        })}
      </Flex>
      <Flex paddingLeft="60px" paddingTop="20px" paddingRight="60px">
        {stack2.map((item) => {
          return (
            <Box
              key={item.id}
              cursor="pointer"
              width="200px"
              height="200px"
              opacity={0.5}
              padding="25px"
              mr="30px"
              borderRadius="5px"
              border="3px solid #48B0A0"
              _hover={{
                transform: "translateY(-20px)",
                transition: "all 0.5s ease-in-out",
                opacity: 1,
                filter: "blur(0px)",
              }}
              bg="rgba(72, 176, 160, 0.2)"
              bgSize="250% 250%, 100% 100%"
              bgPos="-120px -120px, 0 0"
              bgRepeat="no-repeat"
              boxShadow="0 4px 30px rgba(0, 0, 0, 0.1)"
              // filter="blur(2.2px)"
              webkitBackdropFilter="blur(2.2px)"
              alignItems="center"
              justifyContent="center"
            >
              <Box flexDirection="column">
                <TagText>
                  {`<img>`}
                  <Image
                    src={item.imgSrc}
                    alt="HTML Logo"
                    width="80px"
                    height="80px"
                    //align image to center
                    marginLeft="auto"
                    marginRight="auto"
                  />
                  {`</img>`}
                </TagText>
              </Box>
              <Flex
                flexDirection="row"
                //align on baseline
                alignItems="baseline"
                justifyContent="center"
                marginTop="10px"
              >
                <TagText>{`<h2>`}</TagText>
                <Text
                  color="#48B0A0"
                  fontSize="20px"
                  fontWeight="light"
                  fontFamily="monospace"
                  textAlign="center"
                >
                  {item.name}
                </Text>
                <TagText>{`<h2>`}</TagText>
              </Flex>
            </Box>
          );
        })}
      </Flex>
    </Box>
  );
};

export default TechStack;
