

import Button from '@mui/material/Button';

function Home(props) {
  return (
    <div className="App">
      Home screen
      <div><Button variant="text" fullWidth={true} onClick={() => props.setLoginToken('')}>Logout</Button></div>
    </div>
  );
}

export default Home;
