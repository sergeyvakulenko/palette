import React, { FC, memo } from "react";
import DraggableColorBox from "../DraggableColorBox";
import { SortableContainer } from "react-sortable-hoc";
import styled from "styled-components";
import { FlatColor } from "../../../shared/types";

const Container = styled.div`
  height: 100%;
`;

interface DraggableColorListProps {
  colors: FlatColor[];
  removeColor: (name: string) => void;
}

const DraggableColorList: FC<DraggableColorListProps> = ({
  colors,
  removeColor,
}) => {
  return (
    <Container>
      {colors.map((c: FlatColor, i) => (
        <DraggableColorBox
          index={i}
          key={c.name}
          color={c.color}
          name={c.name}
          removeColor={removeColor}
        />
      ))}
    </Container>
  );
};

export default SortableContainer(memo(DraggableColorList));
