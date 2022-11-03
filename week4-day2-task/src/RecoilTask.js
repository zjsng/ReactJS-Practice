import React from 'react'
import { useRecoilState } from 'recoil';
import { atomData } from './recoil/atomData';

import AddToList from "./AddToList";
import { MUIHeader } from './stories/MUIHeader';
import { MUICard } from './stories/MUICard';
import { Footer } from './stories/Footer';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const RecoilTask = () => {
  const [atom, setAtomData] = useRecoilState(atomData);
  console.log(atom);

  const deleteBtnHandler = (event, index) => {
    console.log(atom);
    console.log("Key Index: " + index);

    let tempList = atom;
    setAtomData(tempList.filter(val => val.id !== index));
  }

  return (
    <>
      <MUIHeader />
      <AddToList />
      <Typography variant='h3' align='center'>Tasks</Typography>
      <Box className='card-container' mx="auto" mb="100px"
        sx={{
          boxSizing: "border-box",
          width: "90%",
          height: "fit-content",
          padding: "2em",
          display: "flex",
          flexWrap: "wrap",
          gap: "1em",
          border: 1,
          borderColor: "black",
          borderRadius: "3em",
          boxShadow: 3
        }}
      >
        {atom.length > 0 ? (atom.map(info => {
          return (
            <React.Fragment key={info.id}>
              <MUICard body={info.text} deleteFunc={event => deleteBtnHandler(event, info.id)} />
            </React.Fragment>
          )
        })) : (<></>)}
        <Footer />
      </Box>
    </>
  )
}

export default RecoilTask;