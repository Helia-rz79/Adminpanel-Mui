import React from 'react';
import {
  Typography,
  Button,
  Grid,
  useTheme,
  Card,
  CardContent,
} from '@mui/material';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

// داده‌ها برای نمودار خطی
const data = [
  { name: 'Jan', uv: 1000 },
  { name: 'Feb', uv: 3000 },
  { name: 'Mar', uv: 2000 },
  { name: 'Apr', uv: 2780 },
  { name: 'May', uv: 1890 },
  { name: 'Jun', uv: 2390 },
  { name: 'Jul', uv: 3490 },
];

// کامپوننت نمودار
const Nemo = () => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        borderRadius: 2,
        p: 2,
        height: 400,
      }}
    >
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Traffic Overview
        </Typography>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="uv"
              stroke={theme.palette.primary.main}
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

// کارت آماری
const Cart = () => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        borderRadius: 2,
        p: 2,
        height: 280,
        width:250,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginTop: 3,
      }}
    >
      <CardContent>
        <Typography variant="h5">Traffic Overview</Typography>
        <Typography sx={{ mt: 2 }}>Total Visitors: 10,350</Typography>
        <Typography sx={{ mt: 1 }}>New Visitors: 6,245</Typography>
        <Typography sx={{ mt: 1 }}>Returning Visitors: 4,105</Typography>

        <Button
          variant="contained"
          sx={{
            mt: 5,
            bgcolor: theme.palette.primary.light,
            color: '#000',
          }}
        >
          LOAD MORE
        </Button>
      </CardContent>
    </Card>
  );
};

export default function Traffic() {
  return (
  <>
  <Nemo />
  <Cart />
  </>
  );
}


//////////////////////////////////////////////////


