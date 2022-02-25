import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { CenteredButton } from "../../../shared/elements/CenteredButton";
import { ColorBox } from "../../../shared/elements/ColorBox";
import styled from "styled-components";

const Container = styled(ColorBox)`
  cursor: pointer;
  position: relative;
  text-transform: uppercase;
  color: "white";
`;

const Button = styled(CenteredButton)`
  @media (hover: hover) and (pointer: fine) {
    opacity: 0;

    ${Container}:hover & {
      opacity: 1;
      transition: 0.5s;
    }
  }

  @media (hover: none) and (pointer: coarse) {
    opacity: 1;
  }
`;

const GoBackButton: FC<{}> = () => {
  const navigate = useNavigate();

  return (
    <Container isSingleColorPalette color="#000">
      <Button onClick={() => navigate(-1)}>Go back</Button>
    </Container>
  );
};

export default GoBackButton;
