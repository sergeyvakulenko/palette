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
  opacity: 0;

  ${Container}:hover & {
    opacity: 1;
    transition: 0.5s;
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
