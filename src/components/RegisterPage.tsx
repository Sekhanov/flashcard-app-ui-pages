import { useNavigate } from 'react-router-dom';
import RegisterForm from '../components/RegisterForm';
import { Box } from '@mui/material';

const RegisterPage = () => {
    const navigate = useNavigate();

    return (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
            <RegisterForm onSuccess={() => navigate('/')} />
        </Box>
    );
};

export default RegisterPage;
