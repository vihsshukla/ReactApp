import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { confirmSignUp } from '@aws-amplify/auth';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ConfirmationModal({confirmSignup,setConfirmSignup,username}) {
  const [confirmationCode,setConfirmationCode]=React.useState('');
  const handleSignupConfirmation=async()=>{
    console.log({username,confirmationCode});
    try{
      const {isSignUpComplete,nextStep}=await confirmSignUp({
        username,
        confirmationCode
      });
      console.log({isSignUpComplete,nextStep});
      setConfirmSignup(false);
    }catch(err){
      console.log("Error while confirming code: ",err);
    }
  }

  return (
    <div>
      <Modal
        open={confirmSignup}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
              Verify Your emailID
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Enter the verification code to verify.
            </Typography>

          <br></br>
          <TextField
                  autoComplete="verification-code"
                  name="code"
                  required
                  fullWidth
                  id="verification-code"
                  label="Verification Code"
                  autoFocus
                  onChange={(event)=>setConfirmationCode(event.target.value)}
          />
          <Button className='button'
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSignupConfirmation}
            >
              Verify
            </Button>
        </Box>
      </Modal>
    </div>
  );
}
