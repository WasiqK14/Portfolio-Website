import { Flex, Link } from "@chakra-ui/react";
import { Navbar, Hero, TechStack, Experience, Contact } from "../../components";
import "./index.css";
const Main = () => {
  return (
    <Flex
      direction="column"
      //set a 0A192F background color as gradient
      bgGradient="linear(to-r, #0A192F, #1b1c1e)"
      // backgroundImage="repeating-radial-gradient(  #0c0a0a 80%,#2f312f 90%,#3f4549 90%)"
      // backgroundSize="15px 15px" 
      h="screen"
    
      animation="fadeIn 1s ease-in-out"
    >
      <Flex
        position="fixed"
        bottom="200px"
        right="0px"
        //flip the component
        transform="rotate(90deg)"
        justifyContent="center"
        alignItems="center"
      >
        <Link
          color="#48B0A0"
          fontFamily="monospace"
          _hover={{
            transform: "scale(1.3)",
            transition: "all 0.6s ease-in-out",
          }}
          fontSize="16px"
        >
          wasiq1432000@gmail.com
        </Link>
        <Flex
          border="1px solid #48B0A0"
          width="100px"
          position="absolute"
          right="-110px"
        ></Flex>
      </Flex>

      <Navbar />
      <div id="hero">
        <Hero />
      </div>
      <div id="techstack">
        <TechStack />
      </div>

      <div id="experience">
        <Experience />
      </div>

      <div id="contact">
        <Contact />
      </div>
    </Flex>
  );
};

export default Main;
