import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const industries = [
  'Technology',
  'Finance',
  'Healthcare',
  'Education',
  'Retail',
  'Other',
];

const locationOptions = [
  { value: '0-10', label: '0-10' },
  { value: '10-50', label: '10-50' },
  { value: '50-150', label: '50-150' },
  { value: '150+', label: '150+' },
];

const Forms = () => {
  const [selectedLocation, setSelectedLocation] = useState('');

  const handleLocationSelect = (value) => {
    setSelectedLocation(value);
  };

  const inputBorderStyle = {
    borderBottom: '1px solid #1C1B1F'
  };

  return (
    <div style={{ margin: '0 auto', maxWidth: '500px', padding: '60px 20px 90px', textAlign: 'center', fontFamily: 'Roboto, sans-serif'}}>
      <div style={{ marginBottom: '36px' }}>
        <Typography variant="h1" component="h1" style={{ fontWeight: 'bold', fontSize: '40px' }}>
          XYZ
        </Typography>
      </div>
      <div style={{ marginBottom: '36px' }}>
        <Typography variant="h2" component="h2" style={{ fontSize: '36px' }}>
          Welcome Onboard
        </Typography>
      </div>
      <div>
        <TextField
          fullWidth
          label="Your Name"
          placeholder="Your Name"
          style={{ marginBottom: '20px', ...inputBorderStyle }}
          variant="filled"
          InputProps={{ disableUnderline: true }}
          inputProps={{ style: { backgroundColor: '#E7E0EC' } }}
        />
        <TextField
          fullWidth
          label="Company Name"
          placeholder="Company Name"
          style={{ marginBottom: '20px', ...inputBorderStyle }}
          variant="filled"
          InputProps={{ disableUnderline: true }}
          inputProps={{ style: { backgroundColor: '#E7E0EC' } }}
        />
        <TextField
          fullWidth
          select
          label="Select Industry"
          placeholder="Select Industry"
          style={{ marginBottom: '36px', backgroundColor: '#E7E0EC', textAlign: 'left', ...inputBorderStyle }}
          variant="filled"
          InputProps={{
            disableUnderline: true,
            endAdornment: <ExpandMoreIcon />,
          }}
          inputProps={{ style: { backgroundColor: '#E7E0EC', paddingLeft: '12px' } }}
          SelectProps={{ IconComponent: () => null }}
        >
          {industries.map((industry) => (
            <MenuItem key={industry} value={industry}>
              {industry}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <div style={{ textAlign: 'left', marginBottom: '12px' }}>
        <Typography variant="body1" style={{ fontSize: '16px', fontWeight: '500' }}>
          Select number of locations
        </Typography>
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '20px' }}>
        {locationOptions.map((option) => (
          <Button
            key={option.value}
            variant="contained"
            style={{
              minWidth: '1px',
              marginRight: '12px',
              backgroundColor: selectedLocation === option.value ? '#333333' : '#E7E0EC',
              color: selectedLocation === option.value ? '#FFFFFF' : '#222222',
            }}
            onClick={() => handleLocationSelect(option.value)}
          >
            {option.label}
          </Button>
        ))}
      </div>
      <Button variant="contained" color="primary" style={{ width: '100%', backgroundColor: '#333333', color: '#FFFFFF' }}>
        CONTINUE
      </Button>
    </div>
  );
};

export default Forms;
