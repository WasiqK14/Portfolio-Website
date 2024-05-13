import React from "react";
import {
  Text,
  Flex,
  Box,
  SimpleGrid,
  GridItem,
  chakra,
} from "@chakra-ui/react";
import TagText from "../tagtext/TagText";
import { jobs } from "../../constants/jobs.data";
import { Icon } from "@iconify/react";

const ChakraIcon = chakra(Icon);

const Experience = () => {
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
              3.Experience
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

      <Flex flexWrap="wrap" justifyContent="space-between">
        {jobs.map((job, index) => (
          <SimpleGrid columns={5} p={4} mb={8} key={job.key} w="full">
            <GridItem colSpan={3}>
              <Flex className="items-center gap-2">
                <ChakraIcon
                  icon="material-symbols:radio-button-checked-outline"
                  color="#E26310"
                  w={6}
                  h={6}
                />
                <Text fontSize="xl" fontFamily="monospace" color="#E26310">
                  {job.company}
                </Text>
              </Flex>
              <Text fontSize="lg" fontFamily="monospace" color="#48B0A0" mb={1}>
                {job.position}
              </Text>
              <Text fontSize="lg" fontFamily="monospace" color="#48B0A0" mb={4}>
                {job.duration}
              </Text>
              <Flex flexDirection="column">
                {job.description.map((desc) => (
                  <Flex textAlign="justify">
                    <ChakraIcon
                      icon="material-symbols:arrow-right-rounded"
                      color="#E26310"
                      w={6}
                      h={6}
                    />
                    <Text
                      fontSize="sm"
                      fontFamily="monospace"
                      color="white"
                      className="flex-wrap"
                      w="70%"
                    >
                      {desc}
                    </Text>
                  </Flex>
                ))}
              </Flex>
            </GridItem>
            <GridItem colSpan={2}>
              <TagText>
                {`<div>`}

                <Box
                  cursor="pointer"
                  width="160px"
                  height="160px"
                  opacity={1}
                  border="2px solid #E26310"
                  _hover={{
                    transform: "scale(1.1)",
                    transition: "all 0.5s ease-in-out",
                  }}
                  bgImage={job.imgSrc}
                  bgSize="cover"
                  bgPos="left"
                  bgRepeat="no-repeat"
                ></Box>
                {`</div>`}
              </TagText>
            </GridItem>
          </SimpleGrid>
        ))}
      </Flex>
    </Box>
  );
};

export default Experience;
