import React from 'react'
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
import { Box, Typography, Stack, Grid, Card, CardContent, Button, } from '@mui/material';
import {
  ComposedChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Area,
  Bar,
  Line,
} from 'recharts';



const mydata = [
  { name: 'Jan', Sales: 4000, Growth: 2400, Profit: 4400 },
  { name: 'Feb', Sales: 3000, Growth: 1398, Profit: 4210 },
  { name: 'Mar', Sales: 2000, Growth: 9500, Profit: 4000 },
  { name: 'Apr', Sales: 2780, Growth: 6908, Profit: 4500 },
  { name: 'May', Sales: 1890, Growth: 4800, Profit: 4181 },
  { name: 'Jun', Sales: 2390, Growth: 3800, Profit: 4500 },
  { name: 'Agu', Sales: 3490, Growth: 4300, Profit: 4100 },
  { name: 'Sep', Sales: 3490, Growth: 8300, Profit: 5100 },
  { name: 'Oct', Sales: 3490, Growth: 4500, Profit: 4100 },
  { name: 'Nov', Sales: 3490, Growth: 6800, Profit: 4400 },
  { name: 'Dec', Sales: 3490, Growth: 4300, Profit: 3000 },
];

function SalesOverviewChart() {
  return (
    <Card sx={{marginTop:3}}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Sales Overview
        </Typography>
        <Box sx={{ width: '100%', height: 300, marginTop: 3 }}>
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={mydata}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <CartesianGrid stroke="#f5f5f5" />
              <Area type="monotone" dataKey="Profit" fill="#8884d8" stroke="#8884d8" />
              <Bar dataKey="Growth" barSize={20} fill="#413ea0" />
              <Line type="monotone" dataKey="Sales" stroke="#ff7300" />
            </ComposedChart>
          </ResponsiveContainer>
        </Box>
      </CardContent>
    </Card>
  );
}

/////////////////////////////////////



// داده‌های نمودار
const pieData = [
  { name: "Total", value: 400, color: "#0088FE" },
  { name: "Last Year", value: 300, color: "#00C49F" },
  { name: "This Year", value: 300, color: "#FFBB28" },
  { name: "Recent", value: 200, color: "#FF8042" },
];

// داده‌های  کارت دوم
const stats = [
  {
    label: "Total Expenses",
    value: "$134,032",
    change: "+0.45%",
    changeColor: "success.main",
    chartColor: "#2980b9",
  },
  {
    label: "General Leads",
    value: "74,354",
    change: "-3.84%",
    changeColor: "error.main",
    chartColor: "#9b59b6",
  },
  {
    label: "Churn Rate",
    value: "6.02%",
    change: "+0.72%",
    changeColor: "success.main",
    chartColor: "#e91e63",
  },
  {
    label: "New Users",
    value: "7,893",
    change: "+11.05%",
    changeColor: "success.main",
    chartColor: "#e67e22",
  },
  {
    label: "Returning Users",
    value: "3,258",
    change: "+1.69%",
    changeColor: "success.main",
    chartColor: "#8e44ad",
  },
];

function FullDonutChart() {
  return (
    <Grid container spacing={5}>
      {/* کارت اول: نمودار دونات */}
      <Grid item xs={12} md={6}>
        <Card
          sx={{
            mt: 5,
            borderRadius: 2,
           
          }}
        >
          <CardContent>
            <Typography variant="h5" gutterBottom paddingTop='10px'>
              Sales Statistics
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <Box sx={{ width: 300, height: 440 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      dataKey="value"
                      innerRadius={70}
                      outerRadius={100}
                      paddingAngle={5}
                      cx="50%"
                      cy="50%"
                      isAnimationActive={true}
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </Box>
              <Stack spacing={1} sx={{ ml: 4 }}>
                {pieData.map((item, index) => (
                  <Box
                    key={index}
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    <Box
                      sx={{
                        width: 16,
                        height: 16,
                        backgroundColor: item.color,
                        borderRadius: "50%",
                        mr: 1.5,
                      }}
                    />
                    <Typography variant="body2">{item.name}</Typography>
                  </Box>
                ))}
              </Stack>
            </Box>
          </CardContent>
        </Card>
      </Grid>

      {/* کارت دوم: Overall Statistics */}
      <Grid item xs={12} md={6}>
        <Card
          sx={{
            mt: 5,
            borderRadius: 2,
            width:400,
            height: 530, 
          }}
        >
          <CardContent sx={{ height: "100%" }}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              mb={2}
            >
              <Typography variant="h6">Overall Statistics</Typography>
              <Button variant="outlined" size="small">
                View All
              </Button>
            </Box>

            {stats.map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  py: 1,
                  borderTop: index !== 0 ? "1px solid #eee" : "none",
                }}
              >
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    {item.label}
                  </Typography>
                  <Typography variant="h6">{item.value}</Typography>
                  <Typography variant="caption" color={item.changeColor}>
                    {item.change}
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center" gap={1}>
                  <Box
                    sx={{
                      width: 60,
                      height: 30,
                      backgroundColor: item.chartColor,
                      borderRadius: 2,
                      opacity: 0.6,
                    }}
                  />
                  <Button size="small" endIcon={<span>→</span>}>
                    See more
                  </Button>
                </Box>
              </Box>
            ))}
          </CardContent>
        </Card>
      </Grid>

    </Grid>
  );
}


/////////////////////////////////////////////
export default function SalesPage() {
  return (
    <>
      <FullDonutChart />
      <SalesOverviewChart />
    </>
  )
}
