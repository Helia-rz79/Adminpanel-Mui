'use client'
import React from 'react'

// export default function IntegrationPage() {
//   return (
//     <div>IntegrationPage</div>
//   )
// }


/////////////////////////////////////////////
import { useState } from 'react';
import {
  Container,
  Card,
  CardContent,
  Button,
  Avatar,
  TextField,
  Box,
  Typography,
} from '@mui/material';

// MUI Icons
import SlackIcon from '@mui/icons-material/Chat';
import GitHubIcon from '@mui/icons-material/GitHub';
import PaymentIcon from '@mui/icons-material/Payment';
import AnalyticsIcon from '@mui/icons-material/QueryStats';
import EmailIcon from '@mui/icons-material/Email';
import TrelloIcon from '@mui/icons-material/ViewKanban';
import ExtensionIcon from '@mui/icons-material/Extension';

export default function IntegrationPage() {
  const [integrations, setIntegrations] = useState([
    {
      name: 'Slack',
      description: 'Send notifications to Slack channels.',
      icon: <SlackIcon />,
      connected: false,
    },
    {
      name: 'Stripe',
      description: 'Handle payments using Stripe.',
      icon: <PaymentIcon />,
      connected: true,
    },
    {
      name: 'GitHub',
      description: 'Sync with your GitHub repositories.',
      icon: <GitHubIcon />,
      connected: false,
    },
    {
      name: 'Google Analytics',
      description: 'Track website analytics with Google Analytics.',
      icon: <AnalyticsIcon />,
      connected: false,
    },
    {
      name: 'Mailchimp',
      description: 'Email marketing with Mailchimp.',
      icon: <EmailIcon />,
      connected: false,
    },
    {
      name: 'Trello',
      description: 'Organize tasks and collaborate with Trello.',
      icon: <TrelloIcon />,
      connected: true,
    },
  ]);

  const [newIntegration, setNewIntegration] = useState({
    name: '',
    apiKey: '',
    webhook: '',
  });

  const handleConnect = (name) => {
    setIntegrations((prev) =>
      prev.map((item) =>
        item.name === name ? { ...item, connected: true } : item
      )
    );
  };

  const handleDisconnect = (name) => {
    setIntegrations((prev) =>
      prev.map((item) =>
        item.name === name ? { ...item, connected: false } : item
      )
    );
  };

  const handleInputChange = (e) => {
    setNewIntegration({ ...newIntegration, [e.target.name]: e.target.value });
  };

  const handleAddIntegration = (e) => {
    e.preventDefault();
    if (!newIntegration.name) return;
    setIntegrations((prev) => [
      ...prev,
      {
        name: newIntegration.name,
        description: `Custom integration for ${newIntegration.name}`,
        icon: <ExtensionIcon />,
        connected: false,
      },
    ]);
    setNewIntegration({ name: '', apiKey: '', webhook: '' });
  };

  return (
    <Container sx={{ py: 5 }}>
      {integrations.map((item) => (
        <Card
          key={item.name}
          sx={{
            display: 'flex',
            alignItems: 'center',
            p: 2,
            mb: 2,
          }}
        >
          <Avatar sx={{ bgcolor: 'primary.main', width: 56, height: 56, mr: 2 }}>
            {item.icon}
          </Avatar>
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography variant="h5">{item.name}</Typography>
            <Typography variant="body2" color='gray'>{item.description}</Typography>
          </CardContent>
          {item.connected ? (
            <Button
              variant="contained"
              color="error"
              onClick={() => handleDisconnect(item.name)}
              sx={{ minWidth: 100 }}
            >
              Disconnect
            </Button>
          ) : (
            <Button
              variant="contained"
              onClick={() => handleConnect(item.name)}
              sx={{ minWidth: 130 }}
            >
              Connect
            </Button>
          )}
        </Card>
      ))}

      <Box
        component="form"
        onSubmit={handleAddIntegration}
        sx={{
          mt: 4,
          p: 3,
          border:1,
          borderColor:'gray',
          borderRadius: 2,
          boxShadow: 2,
          backgroundColor: 'transparent', // فرم با بک‌گراند عادی
        }}
      >
        <Typography variant="h6" mb={2}>
          Add New Integration
        </Typography>
        <TextField
          fullWidth
          label="Name"
          name="name"
          value={newIntegration.name}
          onChange={handleInputChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="API Key"
          name="apiKey"
          value={newIntegration.apiKey}
          onChange={handleInputChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Webhook URL"
          name="webhook"
          value={newIntegration.webhook}
          onChange={handleInputChange}
          margin="normal"
        />
        <Button type="submit" variant="contained" sx={{ mt: 2 }}>
          Add Integration
        </Button>
      </Box>
    </Container>
  );
}

