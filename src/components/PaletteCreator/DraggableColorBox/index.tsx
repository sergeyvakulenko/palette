import { FC, memo } from "react";
import { SortableElement } from "react-sortable-hoc";
import { Container, Content, DeleteIcon } from "./styles";

interface DraggableColorBoxProps {
  color: string;
  name: string;
  removeColor: (name: string) => void;
}

const DraggableColorBox: FC<DraggableColorBoxProps> = ({
  color,
  name,
  removeColor,
}) => {
  return (
    <Container color={color}>
      <Content>
        <span>{name}</span>
        <DeleteIcon onClick={() => removeColor(name)} />
      </Content>
    </Container>
  );
};

export default SortableElement(memo(DraggableColorBox));
