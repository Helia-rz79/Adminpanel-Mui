import * as React from 'react';
import { DataGrid, GridToolbarContainer, GridToolbarQuickFilter } from '@mui/x-data-grid';
import { Chip, LinearProgress } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

const CustomToolbar = () => (
  <GridToolbarContainer style={{ padding: '8px 16px' }}>
    <GridToolbarQuickFilter
      quickFilterParser={(searchInput) =>
        searchInput
          .split(',')
          .map((value) => value.trim())
          .filter((value) => value !== '')
      }
      debounceMs={300}
    />
  </GridToolbarContainer>
);

const centeredCellStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
};

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'FullName', headerName: 'Full Name', width: 160 },
  { field: 'traderEmail', headerName: 'Trader Email', width: 220 },
  { field: 'quantity', headerName: 'Quantity', type: 'number', width: 110 },
  {
    field: 'filledQuantity',
    headerName: 'Filled Quantity',
    width: 180,
    renderCell: (params) => (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
      }}>
        <LinearProgress
          variant="determinate"
          value={params.value}
          style={{ width: '100%', height: 8, borderRadius: 5 }}
        />
        <div style={{ fontSize: 12, marginTop: 4 }}>
          {params.value.toFixed(2)}%
        </div>
      </div>
    ),
  },
  {
    field: 'isFilled',
    headerName: 'Is Filled',
    width: 100,
    renderCell: (params) => (
      <div style={centeredCellStyle}>
        {params.value ? (
          <CheckCircleIcon style={{ color: 'green' }} />
        ) : (
          <CancelIcon style={{ color: 'red' }} />
        )}
      </div>
    ),
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 160,
    renderCell: (params) => {
      const colorMap = {
        Filled: 'success',
        'Partially Filled': 'warning',
        Open: 'info',
        Cancelled: 'error',
      };
      return (
        <div style={centeredCellStyle}>
          <Chip
            label={params.value}
            color={colorMap[params.value] || 'default'}
            size="small"
          />
        </div>
      );
    },
  },
  {
    field: 'unitPrice',
    headerName: 'Unit Price',
    type: 'number',
    width: 120,
  },
];

const rows = [
  {
    id: 1,
    FullName: 'Alvin Hart',
    traderEmail: 'onidi@peh.at',
    quantity: 14410,
    filledQuantity: 16.44,
    isFilled: true,
    status: 'Filled',
    unitPrice: 100,
  },
  {
    id: 2,
    FullName: 'Louise Quinn',
    traderEmail: 'pidlov@tojer.bf',
    quantity: 94021,
    filledQuantity: 20.39,
    isFilled: false,
    status: 'Partially Filled',
    unitPrice: 105,
  },
  {
    id: 3,
    FullName: 'Lloyd Schmidt',
    traderEmail: 'genuh@ripdim.mp',
    quantity: 71791,
    filledQuantity: 100,
    isFilled: true,
    status: 'Filled',
    unitPrice: 110,
  },
  {
    id: 4,
    FullName: 'Vincent Hem',
    traderEmail: 'hav@ih.bo',
    quantity: 63330,
    filledQuantity: 10.89,
    isFilled: false,
    status: 'Open',
    unitPrice: 98,
  },
  {
    id: 5,
    FullName: 'Callie Carlson',
    traderEmail: 'caliphora@cli.by',
    quantity: 87629,
    filledQuantity: 0.77,
    isFilled: false,
    status: 'Cancelled',
    unitPrice: 91,
  },
  {
    id: 6,
    FullName: 'David Tran',
    traderEmail: 'dtran@market.org',
    quantity: 51200,
    filledQuantity: 74.5,
    isFilled: false,
    status: 'Partially Filled',
    unitPrice: 115,
  },
  {
    id: 7,
    FullName: 'Emily Park',
    traderEmail: 'e.park@tradeflow.net',
    quantity: 40400,
    filledQuantity: 100,
    isFilled: true,
    status: 'Filled',
    unitPrice: 120,
  },
  {
    id: 8,
    FullName: 'Samir Ahmed',
    traderEmail: 'samir.ah@global.co',
    quantity: 22000,
    filledQuantity: 50,
    isFilled: false,
    status: 'Partially Filled',
    unitPrice: 102,
  },
];

export default function OrdersPage() {
  return (
    <div style={{ height: 600, width: '100%', marginTop:5 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        checkboxSelection
        disableRowSelectionOnClick
        pageSize={5}
        components={{ Toolbar: CustomToolbar }}
      />
    </div>
  );
}
