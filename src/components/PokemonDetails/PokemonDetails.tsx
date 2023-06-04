import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import IconButton from '@mui/material/IconButton';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { forwardRef } from 'react';
import { IPokemonDetailsProps } from '../../models/IPokemonDetailsProps';

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<HTMLElement, string>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction='up' ref={ref} {...props} />;
});

export default function PokemonDetails({
  selectedPokemon,
  handleClose,
}: IPokemonDetailsProps) {
  return (
    <Dialog
      open={!!selectedPokemon}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby='alert-dialog-slide-description'
    >
      <DialogContent className='md:min-w-[22rem]'>
        <DialogContentText
          className='flex flex-col justify-center items-center'
          id='alert-dialog-slide-description'
        >
          <span className='text-2xl font-bold text-center block'>
            {selectedPokemon?.name}
            <IconButton
              className='absolute top-2 right-2 md:top-4 md:right-4 w-4 h-4'
              aria-label='close'
              onClick={handleClose}
            >
              x
            </IconButton>
          </span>
          <img
            src={selectedPokemon?.avatar}
            alt={selectedPokemon?.name}
            height={100}
          />
          <span>Type: {selectedPokemon?.type}</span>
          <span>Attack: {selectedPokemon?.stats.attack}</span>
          <span>Defense: {selectedPokemon?.stats.defense}</span>
          <span>Speed: {selectedPokemon?.stats.speed}</span>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
}
