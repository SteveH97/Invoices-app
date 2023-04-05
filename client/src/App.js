import { Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';
import { themeSettings } from './theme';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import Home from './containers/home/Home';
import Invoice from './containers/invoice/Invoice';


function App() {

  const mode = useSelector((state)=> state.mode.mode);
  const theme = useMemo(()=> createTheme(themeSettings(mode)), [mode]);

  return (
    <div className="App">
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/invoice/:invId' element={<Invoice/>}/>
      </Routes>
    </ThemeProvider>
    </div>
  );
}

export default App;
