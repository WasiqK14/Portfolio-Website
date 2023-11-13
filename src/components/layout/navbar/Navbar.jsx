import React from "react";
import { Flex, Text, chakra, List, Image } from "@chakra-ui/react";
import { navLinks } from "../../../constants/navbar.data";
import { Icon } from "@iconify/react";
import TagText from "../../tagtext/TagText";
import { useNavigate } from "react-router-dom";
import WK from "../../../assets/images/WK.svg";

const ChakraIcon = chakra(Icon);

const Navbar = () => {
  const navigate = useNavigate();
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
      <Image
        src={WK}
        alt="WK"
        borderRadius="full"
        boxSize="40px"
        mr="10px"
        _hover={{
          transform: "scale(1.3)",
          transition: "all 0.2s ease-in-out",
        }}
      />
      <List display="flex" alignItems="center">
        <TagText>{`<ul>`}</TagText>
        {navLinks.map((link) => (
          <a
            href={link.path}
            key={link.id}
            className="flex"
            cursor="pointer"
            borderRadius="10px"
            mr="5px"
            transition="all 0.2s ease-in-out"
            flexWrap="wrap"
            _hover={{
              transform: "scale(1.3)",
              transition: "all 0.2s ease-in-out",
            }}
            onClick={() => navigate(link.path)}
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
          </a>
        ))}
        <TagText>{`</ul>`}</TagText>
      </List>
    </Flex>
  );
};

export default Navbar;
