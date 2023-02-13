import { FC, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { SortEnd } from "react-sortable-hoc";
import classNames from "classnames";
import { arrayMoveImmutable } from "array-move";
import { getRandomColor, defaultColors } from "shared/helpers/colors";
import { useAppDispatch, useAppSelector, useToggle } from "shared/hooks";
import { createPalette } from "shared/store/actions/palettes";
import { palettesSelector } from "shared/store/selectors/palettes";
import { FlatColor, FlatPalette } from "shared/types";
import DraggableColorList from "./DraggableColorList";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useStyles } from "./styles";

interface PaletteCreatorProps {
  maxColors?: number;
}

const PaletteCreator: FC<PaletteCreatorProps> = ({ maxColors = 20 }) => {
  const [colors, setColors] = useState<FlatColor[]>(defaultColors);
  const [open, toggleOpen] = useToggle(false);
  const palettes = useAppSelector(palettesSelector);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { root, drawerHeader, content, contentShift } = useStyles();

  const addNewColor = useCallback((name: string, color: string): void => {
    setColors(prevColors => [
      ...prevColors,
      {
        name: name,
        color: color,
      },
    ]);
  }, []);

  const checkDuplicate = useCallback(
    (color: FlatColor): boolean =>
      colors.some(c => c.color === color.color || c.name === color.name),
    [colors]
  );

  const addRandomColor = useCallback((): void => {
    let color: FlatColor;
    let isDuplicate: boolean;
    do {
      color = getRandomColor();
      isDuplicate = checkDuplicate(color);
    } while (isDuplicate);

    setColors(prevColors => [...prevColors, color]);
  }, [checkDuplicate]);

  const removeColor = useCallback((name: string): void => {
    setColors(prevColors => [...prevColors.filter(c => c.name !== name)]);
  }, []);

  const clearColors = useCallback((): void => {
    setColors([]);
  }, []);

  const handleColorSort = useCallback(
    ({ oldIndex, newIndex }: SortEnd): void => {
      setColors(prevColors => [
        ...arrayMoveImmutable(prevColors, oldIndex, newIndex),
      ]);
    },
    []
  );

  const savePalette = useCallback(
    (newPalette: FlatPalette): void => {
      newPalette.id = newPalette.paletteName.toLowerCase().replace(/ /g, "-");
      newPalette.colors = colors;
      dispatch(createPalette(newPalette));
      navigate("/palette");
    },
    [colors]
  );

  return (
    <div className={root}>
      <Navbar
        open={open}
        onOpen={toggleOpen}
        palettes={palettes}
        savePalette={savePalette}
      />
      <Sidebar
        open={open}
        onClose={toggleOpen}
        colors={colors}
        maxColors={maxColors}
        addNewColor={addNewColor}
        addRandomColor={addRandomColor}
        clearColors={clearColors}
      />
      <main
        className={classNames(content, {
          [contentShift]: open,
        })}
      >
        <div className={drawerHeader} />
        <DraggableColorList
          colors={colors}
          removeColor={removeColor}
          distance={20}
          axis="xy"
          onSortEnd={handleColorSort}
        />
      </main>
    </div>
  );
};

export default PaletteCreator;
