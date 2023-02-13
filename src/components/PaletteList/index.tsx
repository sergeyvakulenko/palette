import { FC, useCallback, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useToggle } from "shared/hooks";
import { useAppDispatch, useAppSelector } from "shared/hooks";
import { palettesSelector } from "shared/store/selectors/palettes";
import {
  deletePalette,
  fetchDefaultPalettes,
} from "shared/store/actions/palettes";
import DeletePaletteDialog from "./DeleteDialog";
import FetchDefaultsDialog from "./FetchDefaultsDialog";
import MiniPalette from "./MiniPalette";
import { Root, Container, Header, Content } from "./styles";

const PaletteList: FC = () => {
  const palettes = useAppSelector(palettesSelector);
  const dispatch = useAppDispatch();
  const [paletteId, setPaletteId] = useState<string | null>(null);
  const [isDeleteDialog, toggleDeleteDialog] = useToggle(false);
  const [isDefaultsDialog, toggleDefaultsDialog] = useToggle(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      if (palettes.length === 0) {
        toggleDefaultsDialog();
      }
    }, 1000);
  }, []);

  const loadDefaults = useCallback((): void => {
    dispatch(fetchDefaultPalettes());
    toggleDefaultsDialog();
  }, [toggleDefaultsDialog]);

  const openDeleteDialog = useCallback((id: string): void => {
    setPaletteId(id);
    toggleDeleteDialog();
  }, []);

  const closeDeleteDialog = useCallback((): void => {
    setPaletteId(null);
    toggleDeleteDialog();
  }, [toggleDeleteDialog]);

  const openPalette = useCallback((id: string): void => {
    navigate(id);
  }, []);

  const handleDelete = useCallback(
    (id: string): void => {
      dispatch(deletePalette(id));
      setPaletteId(null);
      toggleDeleteDialog();
    },
    [toggleDeleteDialog]
  );

  return (
    <Root>
      <Container>
        <Header>
          <h1>Palette</h1>
          <Link to="new">Create Palette</Link>
        </Header>
        <Content>
          {palettes.map(palette => (
            <MiniPalette
              {...palette}
              key={palette.id}
              openDialog={openDeleteDialog}
              openPalette={openPalette}
            />
          ))}
        </Content>
      </Container>
      <DeletePaletteDialog
        id={paletteId}
        open={isDeleteDialog}
        onClose={closeDeleteDialog}
        onDelete={handleDelete}
      />
      <FetchDefaultsDialog
        open={isDefaultsDialog}
        onClose={toggleDefaultsDialog}
        onFetch={loadDefaults}
      />
    </Root>
  );
};

export default PaletteList;
