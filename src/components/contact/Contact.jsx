import React from "react";
import { Flex, Text, Box } from "@chakra-ui/react";
import TagText from "../tagtext/TagText";
import ContactCard from ".";
const Contact = () => {
  // Directly use the imported htmlContent
  //   return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
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
              4.Contact
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
        className="items-center justify-center"
        
      >
        <ContactCard />
      </Flex>
    </Box>
  );
};

export default Contact;
