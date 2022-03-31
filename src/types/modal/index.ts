export interface IModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onBackgroundClick: () => void;
  opacity?: number;
}
