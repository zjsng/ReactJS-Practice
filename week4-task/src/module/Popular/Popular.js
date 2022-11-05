import React, { useEffect, useState } from 'react'
import axios from 'axios';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const card = (player) => {
  return (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Player
        </Typography>
        <Typography variant="h5" component="div">
          {player.first_name} {player.last_name}
        </Typography>
        <Typography variant="body2">
          Team: {player.team.full_name}
        </Typography>
        <Typography variant="body2">
          Position: {player.position}
        </Typography>
      </CardContent>
    </React.Fragment>
  );
};

const Popular = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://www.balldontlie.io/api/v1/players?page=0&per_page=50");
      setData(result.data.data);
      // console.log("Requested data from API");
      // console.log(result.data.data);
    };
    fetchData();
  }, []);


  return (
    <>
      <Typography my={1} align='center' variant='h2'>Popular Players</Typography>
      <Box
        boxSizing="border-box"
        display="flex"
        flexWrap="wrap"
        gap="0.5em"
        maxWidth="90%"
        height="fit-content"
        m="1em auto"
        p="1em"
        justifyContent="center"
      >
        {
          data.length > 0 ? data.map(player => {
            return (
              <Box sx={{ width: 300, height: "fit-content" }} key={player.id}>
                <Card variant="outlined">{card(player)}</Card>
              </Box>
            );
          }) : (<>No Data</>)
        }
      </Box>
    </>
  )
}

export default Popular