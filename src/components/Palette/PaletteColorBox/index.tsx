import React, { FC, memo, useEffect } from "react";
import { useCallback } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useNavigate } from "react-router-dom";
import { useToggle } from "shared/hooks";
import {
  Container,
  CopyOverlay,
  CopyMessage,
  Content,
  CopyButton,
  MoreButton,
} from "./styles";

interface PaletteColorBoxProps {
  id: string;
  name: string;
  color: string;
  isSingleColorPalette: boolean;
}

const PaletteColorBox: FC<PaletteColorBoxProps> = ({
  id,
  name,
  color,
  isSingleColorPalette,
}) => {
  const [copy, toggleCopy] = useToggle(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (copy) {
      setTimeout(() => {
        toggleCopy();
      }, 2000);
    }
  }, [copy]);

  const goBack = useCallback(
    (e: React.MouseEvent<HTMLSpanElement, MouseEvent>): void => {
      e.stopPropagation();
      navigate(id);
    },
    [id]
  );

  return (
    <CopyToClipboard text={color} onCopy={toggleCopy}>
      <Container color={color} isSingleColorPalette={isSingleColorPalette}>
        <CopyOverlay color={color} copy={copy} />
        <CopyMessage copy={copy}>
          <span>{color}</span>
        </CopyMessage>
        <Content>
          <span>{name}</span>
        </Content>
        <CopyButton>Copy</CopyButton>
        {!isSingleColorPalette && (
          <MoreButton onClick={goBack}>More</MoreButton>
        )}
      </Container>
    </CopyToClipboard>
  );
};

export default memo(PaletteColorBox);
