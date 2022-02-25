import styled from "styled-components";
import { ColorBox, ColorBoxContent } from "../../../shared/elements/ColorBox";
import { Delete } from "@material-ui/icons";

export const Container = styled(ColorBox)<{ color: string }>`
  position: relative;
  text-transform: uppercase;
`;

export const Content = styled(ColorBoxContent)`
  display: flex;
  justify-content: space-between;
`;

export const DeleteIcon = styled(Delete)`
  color: rgba(0, 0, 0, 0.5);
  cursor: pointer;

  ${Container}:hover & {
    color: white;
    transform: scale(1.2);
    transition: all 0.3s ease-in-out;
  }
`;
