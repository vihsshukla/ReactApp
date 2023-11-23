import Alert from '@mui/material/Alert';

export const GenericAlert = ({ severity, displayText, setShowAlert }) => {
    return (
        <Alert severity={severity} onClose={() => { setShowAlert(false) }}>{displayText}</Alert>
    );
}

export default GenericAlert;