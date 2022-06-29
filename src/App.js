import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import {
  createTheme,
  ThemeProvider
} from "@mui/material/styles";


const themeOptions = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#296573',
    },
    secondary: {
      main: '#ff9800',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={themeOptions}>
      <div className="App">
        <HomePage />
        <AboutPage />
      </div>
    </ThemeProvider>
  );
}

export default App;
