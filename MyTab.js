import React from 'react';
import { Container, Tabs, Tab, Box, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Arabica from './Arabica';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

const TabPanel = ({ children, value, index, ...other }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const MyTab = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Box sx={{ width: '100%' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Arabica" id="tab-0" aria-controls="tabpanel-0" />
            <Tab label="Robusta" id="tab-1" aria-controls="tabpanel-1" />
            <Tab label="Liberica" id="tab-2" aria-controls="tabpanel-2" />
          </Tabs>
          <TabPanel value={value} index={0}>
           
            <Arabica />
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two Content
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three Content
          </TabPanel>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default MyTab;
