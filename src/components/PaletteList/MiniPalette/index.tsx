import React, { FC, memo } from "react";
import { FlatColor } from "../../../shared/types";
import {
  Container,
  ColorsContainer,
  StyledColorBox,
  Title,
  DeleteIcon,
} from "./styles";

interface MiniPaletteProps {
  id: string;
  paletteName: string;
  emoji: string;
  colors: FlatColor[];
  openDialog: (id: string) => void;
  openPalette: (id: string) => void;
}

const MiniPalette: FC<MiniPaletteProps> = ({
  id,
  paletteName,
  emoji,
  colors,
  openDialog,
  openPalette,
}) => {
  const handleOpenPalette = (): void => {
    openPalette(id);
  };

  const deletePalette = (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>
  ): void => {
    e.stopPropagation();
    openDialog(id);
  };

  return (
    <Container onClick={handleOpenPalette}>
      <DeleteIcon
        fontSize="large"
        style={{ transition: "all 0.3s ease-in-out" }}
        onClick={deletePalette}
      />
      <ColorsContainer>
        {colors.map((color: FlatColor) => (
          <StyledColorBox key={color.name} color={color.color} />
        ))}
      </ColorsContainer>
      <Title>
        {paletteName} <span>{emoji}</span>
      </Title>
    </Container>
  );
};

export default memo(MiniPalette);
