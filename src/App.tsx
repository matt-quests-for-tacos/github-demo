import Repos from "./components/Repos";
import {useEffect, useState} from 'react'
import fetchRepos from "./api/fetchRepos";
import {Alert, Container, createTheme, CssBaseline, Grid, TextField, ThemeProvider, Typography} from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(null);
  const [username, setUsername] = useState('matt-the-wizard');

  const handleUsernameChanged = (evt: { target: { value: string }}) => {
    setIsLoading(true);
    setUsername(evt.target.value);
  }

  useEffect(() => {
    fetchRepos(username).then((data) => {
      setRepos(data);
      setIsLoading(false)
    }).catch((e) => {
      setError(e);
      setIsLoading(false);
    });

  }, [username])

  const loaded = !isLoading && repos && repos?.length > 0;

  return (
      <ThemeProvider theme={darkTheme}>
        <CssBaseline/>
        <br/>
        <Container maxWidth={"md"} data-testid={'test-app'}>
          {error && <Alert severity="error">Error occurred loading github repos</Alert>}
          <Grid container justifyContent={'space-between'}>
            <Typography variant={'h4'}>Found Repositories</Typography>
            <TextField inputProps={{'data-testid': 'test-username'}} label="Search for Github User"
                       variant="outlined"
                       value={username}
                       onChange={handleUsernameChanged}/>
          </Grid>
          {loaded && <Repos repos={repos}/>}
        </Container>
      </ThemeProvider>
  );
}

export default App;
