import React, { FC } from "react";
import styled from "styled-components";

const StyledFooter = styled.div`
  background-color: white;
  height: 4vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-weight: bold;

  & span {
    font-size: 1.5rem;
    margin: 0 1rem;
  }
`;

interface FooterProps {
  paletteName: string;
  emoji: string;
}

const Footer: FC<FooterProps> = ({ paletteName, emoji }) => {
  return (
    <StyledFooter>
      {paletteName}
      <span>{emoji}</span>
    </StyledFooter>
  );
};

export default Footer;
