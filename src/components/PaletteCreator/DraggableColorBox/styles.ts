import { Delete } from "@material-ui/icons";
import styled from "styled-components";
import { ColorBox, ColorBoxContent } from "../../../shared/elements/ColorBox";
import { device } from "../../../shared/helpers/responsive";

export const Container = styled(ColorBox)<{ color: string }>`
  position: relative;
  text-transform: uppercase;

  @media ${device.mobile} {
    display: block;
    margin-bottom: 0;
  }
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

  @media ${device.mobile} {
    font-size: 1rem !important;
  }
`;
