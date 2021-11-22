import * as React from 'react';
import { Snackbar as MuiSnackbar } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

interface SnackbarProps {
  message: string;
}

const Snackbar: React.FC<SnackbarProps> = (props) => {
  const { message } = props;
  const [open, setOpen] = React.useState(true);

  const handleClose = (
    event: React.SyntheticEvent | React.MouseEvent,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      <MuiSnackbar
        open={open}
        onClose={handleClose}
        message={message}
        action={action}
      />
    </div>
  );
};

export default Snackbar;
