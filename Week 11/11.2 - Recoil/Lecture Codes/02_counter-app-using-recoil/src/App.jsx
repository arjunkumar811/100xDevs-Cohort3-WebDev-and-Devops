import { useState } from 'react'

import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil';
import { counterAtom } from './store/atoms/counter';

////////////// COUNTER APP BY USING RECOIL ///////////

function App() {
  return (
    <>
    <RecoilRoot >
      <Counter />
    </RecoilRoot>
    </>
  );
}

function Counter() {
  

  return (
    <div>
      <CuurentCount />
      <Increament  />
      <Decrease />
    </div>
  );
}

function CuurentCount() {
   const count = useRecoilValue(counterAtom);
  return <div>
     {count}
      </div>
}



function Decrease() {

  const setCount = useSetRecoilState(counterAtom);

  const decrease = () => {
    setCount(c => c - 1); // Corrected logic to decrement the count
  };

  return (
    <button onClick={decrease}>Decrease</button>
  );
}

function Increament() {
  const setCount = useSetRecoilState(counterAtom);

  const increase = () => {
    setCount(c => c + 1); // Corrected logic to increment the count
  };

  return (
    <button onClick={increase}>Increase</button>
  );
}



export default App
