import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Wrapper } from './Modal.styles';

interface ErrorModalProps {
  error: any | null;
  message: string;
}

const ErrorModal: React.FC<ErrorModalProps> = (props) => {
  const { error, message } = props;
  let errorState = error ? true : false;

  const [open, setOpen] = useState<boolean>(errorState);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Wrapper>
          <Typography variant="h6" component="h2">
            {error?.status} Error
          </Typography>
          <Typography sx={{ mt: 2 }}>{message}</Typography>
        </Wrapper>
      </Modal>
    </div>
  );
};

export default ErrorModal;
