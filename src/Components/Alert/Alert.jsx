import Alert from '@mui/material/Alert';
import { useContext } from 'react';
import { AlertContext } from '../../Context/AppContext';

export const GenericAlert = ({ severity, displayText }) => {
    const {setAlertStatus,addAlertDetails}=useContext(AlertContext);
    return (
        <Alert severity={severity} onClose={() => { setAlertStatus(false); addAlertDetails(undefined); }}>{displayText}</Alert>
    );
}

export default GenericAlert;