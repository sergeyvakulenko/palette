import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import styled from "styled-components";
import { device } from "../../../shared/helpers/responsive";

export const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 6vh;
  width: 100%;
`;

export const Logo = styled.div`
  margin-right: 15px;
  padding: 0 13px;
  font-size: 22px;
  background-color: #eceff1;
  font-family: Roboto;
  height: 100%;
  display: flex;
  align-items: center;

  & a {
    color: black;
    text-decoration: none;
  }

  @media ${device.mobile} {
    font-size: 18px;
  }
`;

export const SliderContainer = styled.div`
  width: 340px;
  margin: 0 10px;
  display: inline-block;

  @media ${device.tablet} {
    width: 150px;
  }
`;

export const StyledSlider = styled(Slider)`
  & .rc-slider-track {
    background-color: transparent;
  }

  & .rc-slider-rail {
    height: 8px;
  }

  & .rc-slider-handle {
    background-color: green;
    outline: none;
    border: 2px solid green;
    box-shadow: none;
    width: 13px;
    height: 13px;
    margin-left: -7px;
    margin-top: -2px;
  }
`;

export const FormatDropdownContainer = styled.div`
  margin-left: auto;
  margin-right: 10px;

  @media ${device.tablet} {
    & span {
      display: none;
    }
  }
`;
