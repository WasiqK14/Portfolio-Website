import React from "react";
import { Flex, Text, chakra, List, Image } from "@chakra-ui/react";
import { navLinks } from "../../../constants/navbar.data";
import { Icon } from "@iconify/react";
import TagText from "../../tagtext/TagText";

const ChakraIcon = chakra(Icon);

const Navbar = () => {
  return (
    <Flex
      justify="space-between"
      p="15px"
      position="fixed"
      top="0"
      left="0"
      zIndex="999"
      w="100%"
      boxShadow="md"
      bgGradient="linear(to-r, #0A192F, #1b1c1e)"
      bg="linear(to-r, #0A192F, #1b1c1e)"
    >
      <TagText>
        {`<image>`}

        {`</image>`}
      </TagText>
      <List display="flex" alignItems="center">
        <TagText>{`<ul>`}</TagText>
        {navLinks.map((link) => (
          <Flex
            cursor="pointer"
            borderRadius="10px"
            mr="5px"
            transition="all 0.2s ease-in-out"
            flexWrap="wrap"
            _hover={{
              transform: "scale(1.3)",
              transition: "all 0.2s ease-in-out",
            }}
          >
            <ChakraIcon
              key={link.id}
              icon={link.icon}
              fontSize="2xl"
              color="#48B0A0"
              _hover={{ color: "#E26310" }}
              ml="6px"
              mr="3px"
            />
            <Text
              key={link.id}
              fontSize="lg"
              fontWeight="light"
              fontFamily="monospace"
              color="#48B0A0"
              _hover={{ color: "#E26310" }}
            >
              {link.title}
            </Text>
          </Flex>
        ))}
        <TagText>{`</ul>`}</TagText>
      </List>
    </Flex>
  );
};

export default Navbar;
