import "./App.css";
import { Flex, Link } from "@chakra-ui/react";
import { Navbar, Hero, TechStack, Experience } from "./components";

function App() {
  return (
    <>
      <Flex
        direction="column"
        //set a 0A192F background color as gradient
        bgGradient="linear(to-r, #0A192F, #1b1c1e)"
        minH="100vh"
        minW="100vw"
        h="screen"

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
        <Hero />
        <TechStack />
        <Experience />
      </Flex>
    </>
  );
}

export default App;
