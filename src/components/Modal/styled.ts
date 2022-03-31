/* eslint-disable @typescript-eslint/no-explicit-any */
import Modal from 'styled-react-modal';
import { Colors } from '../../utils/colors';

export const StyledModal: any = Modal.styled`
  width: 50vw;
  height: 85vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background-color: white;
  border-radius: 12px;
  padding: 2rem;
  min-width: 350px;
  opacity: ${(props: any) => props.opacity};
  transition: all 0.3s ease-in-out;
  overflow: auto;


  form {
    display: flex;
    flex-direction: column;
    flex: 1;

    footer {
      display: flex;
      justify-content: center;
      flex-direction: row;
      align-items: center;
      margin-top: 3rem;

      button {
        border: 1px solid ${Colors.primary};
        border-radius: 12px;
        padding: 8px 26px;
        background: none;
        color: ${Colors.primary};
      }
    }
  }
  `;
