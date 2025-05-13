'use client'


import * as React from 'react';
import Box from '@mui/material/Box';
import { Card, CardContent, Typography } from '@mui/material';
import CardActionArea from '@mui/material/CardActionArea';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import PaidIcon from '@mui/icons-material/Paid';


import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  BarChart,
  Bar,
} from 'recharts';


const cards = [
    {

        title: 'Total Products',
        value: '854',
        icon: <ShoppingCartIcon sx={{ fontSize: 45, color: 'white', bgcolor: 'blue', borderRadius: 5, padding: 1 }} />,
        description: 'Increased By 2.56% ↑',

    },
    {

        title: 'Total Users ',
        value: '28,154',
        icon: <SupervisorAccountIcon sx={{ fontSize: 45, color: 'white', bgcolor: 'purple', borderRadius: 5, padding: 1 }} />,
        description: 'Increased By 0.34% ↑',

    },
    {

        title: 'Total Traffic',
        value: '$3,240',
        icon: <AnalyticsIcon sx={{ fontSize: 45, color: 'white', bgcolor: 'red', borderRadius: 5, padding: 1 }} />,
        description: 'Increased By 0.45% ↑',
    },
    {

        title: 'Total Sales',
        value: '$34,241',
        icon: <PaidIcon sx={{ fontSize: 45, color: 'white', bgcolor: 'green', borderRadius: 5, padding: 1 }} />,
        description: 'Increased By 7.66% ↑',
    },
];

function SelectActionCard() {
    const [selectedCard, setSelectedCard] = React.useState(0);
    return (
        <Box
            sx={{
                width: '100%',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(min(200px, 100%), 1fr))',
                gap: 5,

            }}
        >
            {cards.map((card, index) => (
                <Card key={index}>
                    <CardActionArea
                        onClick={() => setSelectedCard(index)}
                        data-active={selectedCard === index ? '' : undefined}
                        sx={{
                            width: '100%',
                            height: '100%',
                            border: 2,
                            borderRadius: 1,
                            borderColor: 'primary.main',

                            '&[data-active]': {
                                backgroundColor: 'transparent',

                                '&:hover': {
                                    backgroundColor: 'action.selectedHover',
                                },
                            },
                        }}
                    >
                        <CardContent sx={{ height: '100%', padding: '10px' }}>
                            <Typography variant="h6" component="div" color="text.secondary">
                                {card.title}
                            </Typography>
                            <Typography variant="h4" component="div" display='flex' justifyContent='space-between' paddingY='10px' >
                                {card.value}
                                {card.icon}
                            </Typography>
                            <Typography variant="body2" color="rgb(175, 244, 200)">
                                {card.description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            ))}
        </Box>
    );
}
////////////////////////////////////////////////////////



const mydata = [
  { name: 'Jan', New: 4000, Old: 2400 },
  { name: 'Feb', New: 3000, Old: 1398 },
  { name: 'Mar', New: 2000, Old: 9800 },
  { name: 'Apr', New: 3780, Old: 3908 },
  { name: 'May', New: 1890, Old: 4800 },
  { name: 'Jun', New: 2390, Old: 2400 },
  { name: 'Jul', New: 3490, Old: 4300 },
  { name: 'Agu', New: 3000, Old: 9800 },
  { name: 'Sep', New: 2490, Old: 2400 },
  { name: 'Oct', New: 6490, Old: 5800 },
  { name: 'Nov', New: 2390, Old: 3800 },
  { name: 'Des', New: 4490, Old: 4300 },
];

const BarChartCard = () => {
  return (
    <Card sx={{ width: '100%',marginTop:8 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom py="15px">
          Website Views
        </Typography>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart
            data={mydata}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Old" stackId="a" fill="#8884d8" />
            <Bar dataKey="New" stackId="a" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};



////////////////////////////////////////////////////////


const data = [
  { name: 'Jan', uv: 200 },
  { name: 'Feb', uv: 1000 },
  { name: 'Mar', uv: 2000 },
  { name: 'Apr', uv: 2780 },
  { name: 'May', uv: 1890 },
  { name: 'Jun', uv: 2390 },
  { name: 'Jul', uv: 3490 },
  { name: 'Agu', uv: 3000 },
  { name: 'Sep', uv: 2490 },
  { name: 'Oct', uv: 3490 },
  { name: 'Nov', uv: 1400 },
  { name: 'Des', uv: 3490 },
];

const AreaChartCard = () => {
  return (
    <Card sx={{ width: '100%', marginTop:5 , height:'400px' }}>
      <CardContent>
        <Typography variant="h5" gutterBottom py="15px">
          Completed Tasks
        </Typography>
        <ResponsiveContainer width="100%" height={280}>
          <AreaChart
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#FFA726"
              fill="#FFA726"
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};


///////////////////////////////////////////////////////
export default function App() {
    return (
        <>
            <SelectActionCard />
            <BarChartCard />
            <AreaChartCard />
        </>
    )
};
