import styled from "styled-components";
import { Delete } from "@material-ui/icons";
import { ColorBox } from "shared/elements/ColorBox";
import { device } from "shared/helpers/responsive";

export const Container = styled.div`
  background-color: white;
  border: 1px solid black;
  border-radius: 5px;
  padding: 0.5rem;
  position: relative;
  cursor: pointer;
`;

export const ColorsContainer = styled.div`
  background-color: #dae1e4;
  height: 150px;
  width: 100%;
  border-radius: 5px;
  overflow: hidden;
`;

export const StyledColorBox = styled(ColorBox)`
  @media ${device.tablet} {
    width: 25%;
    height: 20%;
  }

  @media ${device.mobile} {
    width: 25%;
    height: 20%;
  }
`;

export const Title = styled.h5`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  color: black;
  padding-top: 0.5rem;
  font-size: 1rem;
  position: relative;

  & span {
    margin-left: 0.5rem;
    font-size: 1.2rem;
  }
`;

export const DeleteIcon = styled(Delete)`
  color: white;
  background-color: #eb3d30;
  position: absolute;
  top: 0;
  right: 0;
  padding: 10px;
  z-index: 10;
  opacity: 0;
  border-top-right-radius: 4px;

  ${Container}:hover & {
    opacity: 1;
  }
`;
