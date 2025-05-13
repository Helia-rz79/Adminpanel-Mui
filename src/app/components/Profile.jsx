import * as React from 'react';
import { useState } from 'react';
import {
    Container,
    Typography,
    Avatar,
    TextField,
    Button,
    Box,
    Divider,
} from '@mui/material';

export default function ProfilePage() {
    const [userInfo, setUserInfo] = useState({
        name: 'Helia Rezaie',
        email: 'Heliarezaie@gmail.com',

    });

    const [passwords, setPasswords] = useState({
        current: '',
        new: '',
        confirm: '',
    });

    const handleInfoChange = (e) => {
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    };

    const handlePasswordChange = (e) => {
        setPasswords({ ...passwords, [e.target.name]: e.target.value });
    };

    const handleUpdateInfo = (e) => {
        e.preventDefault();
        console.log('Updated Info:', userInfo);
        // TODO: Send updated info to server
    };

    const handleChangePassword = (e) => {
        e.preventDefault();
        if (passwords.new !== passwords.confirm) {
            alert('New passwords do not match.');
            return;
        }
        console.log('Changing password:', passwords);
        // TODO: Send password change request
    };

    return (
        <Container maxWidth="sm" sx={{ py: 5 }}>
            <Box display="flex" alignItems="center" flexDirection="column" mb={4}>
                <Avatar
                    src="/2.jpg"
                    sx={{ width: 80, height: 80, mb: 2 }}
                />

                <Typography variant="h5">{userInfo.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                    {userInfo.email}
                </Typography>
            </Box>

            <Divider sx={{ mb: 3 }} />

            <form onSubmit={handleUpdateInfo}>
                <Typography variant="h6" mb={2}>
                    Edit Profile
                </Typography>
                <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    value={userInfo.name}
                    onChange={handleInfoChange}
                    margin="normal"
                />
                <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    value={userInfo.email}
                    onChange={handleInfoChange}
                    margin="normal"
                />
                <Button type="submit" variant="contained" sx={{ mt: 2 }}>
                    Save Changes
                </Button>
            </form>

            <Divider sx={{ my: 4 }} />

            <form onSubmit={handleChangePassword}>
                <Typography variant="h6" mb={2}>
                    Change Password
                </Typography>
                <TextField
                    fullWidth
                    label="Current Password"
                    name="current"
                    type="password"
                    value={passwords.current}
                    onChange={handlePasswordChange}
                    margin="normal"
                />
                <TextField
                    fullWidth
                    label="New Password"
                    name="new"
                    type="password"
                    value={passwords.new}
                    onChange={handlePasswordChange}
                    margin="normal"
                />
                <TextField
                    fullWidth
                    label="Confirm New Password"
                    name="confirm"
                    type="password"
                    value={passwords.confirm}
                    onChange={handlePasswordChange}
                    margin="normal"
                />
                <Button type="submit" variant="contained" sx={{ mt: 2 }}>
                    Change Password
                </Button>
            </form>
        </Container>
    );
}



