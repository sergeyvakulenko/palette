import styled from "styled-components";
import { device } from "../../helpers/responsive";

export const CenteredButton = styled.div`
  width: 100px;
  height: 30px;
  position: absolute;
  display: inline-block;
  top: 50%;
  left: 50%;
  margin-left: -50px;
  margin-top: -15px;
  outline: none;
  text-align: center;
  font-size: 1rem;
  background: rgba(255, 255, 255, 0.3);
  line-height: 30px;
  border: none;
  cursor: pointer;
  text-transform: uppercase;

  @media ${device.tablet} {
    font-size: 0.8rem;
  }
`;
