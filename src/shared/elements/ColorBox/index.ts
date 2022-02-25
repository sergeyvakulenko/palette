import styled from "styled-components";
import chroma from "chroma-js";
import { device } from "../../helpers/responsive";

interface ColorBoxProps {
  color: string;
  backgroundColor?: string;
  isSingleColorPalette?: boolean;
}

export const ColorBox = styled.div.attrs<ColorBoxProps>(props => ({
  style: {
    color:
      chroma(props.color).luminance() >= 0.65 ? "rgba(0,0,0,0.5)" : "#ffffff",
    backgroundColor: props.color || "black",
    isSingleColorPalette: props.isSingleColorPalette,
  },
}))<ColorBoxProps>`
  width: 20%;
  height: ${props => (props.isSingleColorPalette ? "50%" : "25%")};
  margin: 0 auto;
  display: inline-block;
  margin-bottom: -5px;

  @media ${device.laptop} {
    width: ${props => (props.isSingleColorPalette ? "20%" : "25%")};
    height: ${props => (props.isSingleColorPalette ? "50%" : "20%")};
  }

  @media ${device.tablet} {
    width: ${props => (props.isSingleColorPalette ? "20%" : "25%")};
    height: ${props => (props.isSingleColorPalette ? "50%" : "20%")};
  }

  @media ${device.mobile} {
    width: 100%;
    height: ${props => (props.isSingleColorPalette ? "10%" : "5%")};
  }
`;

export const ColorBoxContent = styled.div`
  position: absolute;
  width: 100%;
  left: 0px;
  bottom: 0px;
  padding: 10px;
  letter-spacing: 1px;
  font-size: 12px;
`;
