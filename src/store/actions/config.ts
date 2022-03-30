import { Howl, Howler } from 'howler';
import { AppDispatch } from '../../types/store';
import { setSound } from '../ducks/config';
import audio from '../../assets/sounds/audio.mp3';

export const handleSound = (sound: boolean) => (dispatch: AppDispatch) => {
  try {
    const soundController = new Howl({
      src: [audio],
      html5: true,
      loop: true,
      volume: 0.5,
    });

    if (sound) {
      soundController.play();
    } else {
      Howler.stop();
    }

    return dispatch(setSound(sound));
  } catch (err) {
    console.error('erro', err);
    return err;
  }
};
