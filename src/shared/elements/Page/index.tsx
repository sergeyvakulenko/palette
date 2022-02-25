import React, { FC } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { device } from "../../helpers/responsive";

const Container = styled.div`
  height: 100vh;
  position: fixed;
  width: 100%;
  top: 0;
  background-color: white;

  @media ${device.mobile} {
    height: calc(100vh - calc(100vh - 100%));
  }
`;

const Page: FC = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, transitionTimingFunction: "ease-in-out" }}
    >
      <Container>{children}</Container>
    </motion.div>
  );
};

export default Page;
