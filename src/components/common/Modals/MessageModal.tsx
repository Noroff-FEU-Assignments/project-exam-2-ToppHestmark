import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Wrapper } from './Modal.styles';

interface IMessageModal {
  success: boolean;
  title: string;
  message: string;
}

const MessageModal: React.FC<IMessageModal> = (props) => {
  const { success, title, message } = props;
  let modalState = success ? true : false;

  const [open, setOpen] = useState<boolean>(modalState);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Wrapper>
          <Typography variant="h6" component="h2">
            {title}
          </Typography>
          <Typography sx={{ mt: 2 }}>{message}</Typography>
        </Wrapper>
      </Modal>
    </div>
  );
};

export default MessageModal;
