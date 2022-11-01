import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { atomData } from './recoil/atomData';

import { Form } from './stories/Form';

let id = 0;
const getId = () => {
  return id++;
}

const AddToList = () => {
  const [userInputVal, setUserInputVal] = useState("");
  const [atom, setAtomData] = useRecoilState(atomData);
  //console.log(atom);

  const onChangeHandler = (event) => {
    console.log(event.target.value);
    setUserInputVal(event.target.value);
  }

  const addToAtomHandler = () => {
    if (userInputVal) {
      setAtomData(list => [...list, { id: getId(), text: userInputVal }]);
    }
  }

  return (
    <div>
      <Form onChange={onChangeHandler} onClick={addToAtomHandler} />
    </div>
  )
}

export default AddToList;