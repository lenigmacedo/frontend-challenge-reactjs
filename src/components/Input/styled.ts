import styled from 'styled-components';
import { Colors } from '../../utils/colors';

interface Props {
  error?: string;
}

export const LabelWrapper = styled.label<Props>`
  font-size: 12px;
  color: ${(p) => (p.error ? Colors.errorColor : Colors.labelColor)};
  margin-bottom: 5px;
  margin-top: 20px;
`;

export const InputWrapper = styled.input<Props>`
  color: ${Colors.black};
  font-size: 14px;
  border: none;
  border-bottom: 1px solid
    ${(p) => (p.error ? Colors.errorColor : Colors.borderColor)};
`;

export const Error = styled.span`
  color: ${Colors.errorColor};
  font-size: 10px;
  margin-top: 5px;
`;
