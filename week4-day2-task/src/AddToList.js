import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { atomData } from './recoil/atomData';

import { Form } from './stories/Form';

const AddToList = () => {
  const [id, setId] = useState(0);
  const [userInputVal, setUserInputVal] = useState("");
  const [atom, setAtomData] = useRecoilState(atomData);
  //console.log(atom);

  const onChangeHandler = (event) => {
    console.log(event.target.value);
    setUserInputVal(event.target.value);
  }

  const addToAtom = () => {
    if (userInputVal) {
      let tempId = id;
      setAtomData(list => [...list, { id: id, text: userInputVal }]);
      setId(tempId + 1);
    }
  }

  return (
    <div>
      <Form onChange={onChangeHandler} onClick={addToAtom} />
    </div>
  )
}

export default AddToList;