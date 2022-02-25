import React, { FC, useState } from "react";
import { useParams } from "react-router-dom";
import "rc-slider/assets/index.css";
import styled from "styled-components";
import Navbar from "./Navbar";
import PaletteColorBox from "./PaletteColorBox";
import GoBackButton from "./GoBackButton";
import Footer from "./Footer";
import {
  gatherShades,
  generatePaletteColors,
} from "../../shared/helpers/colors";
import { useAppSelector } from "../../shared/hooks";
import { palettesSelector } from "../../shared/store/selectors/palettes";
import { Format } from "../../shared/types";

const PaletteContainer = styled.div`
  height: 100vh;
`;

const PaletteColorsContainer = styled.div`
  height: 90%;
`;

const Palette: FC<{}> = () => {
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState(Format.Hex);
  const palettes = useAppSelector(palettesSelector);
  const params = useParams();
  const paletteId = params.paletteId;
  const flatPalette = palettes.filter(p => p.id === paletteId).pop();

  if (!paletteId || !flatPalette) {
    return <></>;
  }

  const palette = generatePaletteColors(flatPalette);
  const colorId = params.colorId;
  const colors = colorId
    ? gatherShades(palette, colorId)
    : palette.colors[level];
  const isSingleColorPalette = colorId !== undefined;

  return (
    <PaletteContainer>
      <Navbar
        level={level}
        changeLevel={setLevel}
        format={format}
        changeFormat={setFormat}
        isSingleColorPalette={isSingleColorPalette}
      />
      <PaletteColorsContainer>
        {colors.map(color => (
          <PaletteColorBox
            key={isSingleColorPalette ? color.name : color.id}
            id={color.id}
            name={color.name}
            color={color[format]}
            isSingleColorPalette={isSingleColorPalette}
          />
        ))}
        {isSingleColorPalette && <GoBackButton key="go-back" />}
      </PaletteColorsContainer>
      <Footer paletteName={palette.paletteName} emoji={palette.emoji} />
    </PaletteContainer>
  );
};

export default Palette;
