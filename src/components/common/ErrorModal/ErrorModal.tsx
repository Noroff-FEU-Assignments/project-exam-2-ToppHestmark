import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Wrapper } from './ErrorModal.styles';

interface ErrorModalProps {
  errorMessage: any;
}

const ErrorModal: React.FC<ErrorModalProps> = (props) => {
  const { errorMessage } = props;

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal open={open} onClose={handleClose}>
        <Wrapper>
          <Typography variant="h6" component="h2">
            Error
          </Typography>
          <Typography sx={{ mt: 2 }}>{errorMessage}</Typography>
        </Wrapper>
      </Modal>
    </div>
  );
};

export default ErrorModal;
