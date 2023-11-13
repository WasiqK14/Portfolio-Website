import React, { useState, useEffect } from "react";
import { Loader } from "../../components";
import { Flex, Box, Image } from "@chakra-ui/react";
import WK from "../../assets/images/WK.svg";
import { useNavigate } from "react-router-dom";
import "./index.css";
const Splash = () => {
  const navigate = useNavigate();
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        navigate("/main");
      }, 1000); // Assuming the fade-out animation takes 1 second
    }, 5000);
  }, [navigate]);

  return (
    <Box
      w="100%"
      h="100vh"
      className={fadeOut ? "fade-out" : ""}
    >
      <Flex
        w="100%"
        h="100vh"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        bgGradient="linear(to-r, #0A192F, #1b1c1e)"
      >
        <Image src={WK} w="200px" h="200px" />
        <Loader />
      </Flex>
    </Box>
  );
};

export default Splash;
