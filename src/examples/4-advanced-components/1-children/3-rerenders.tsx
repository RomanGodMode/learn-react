import React, { ReactNode, useState } from 'react'


type ChildProps = {
  num: number
  children: ReactNode
}

const ChildComponent = React.memo(({ num, children }: ChildProps) => {
  console.log(`Child component rendered ${num}`);
  return <div>{children}</div>;
});

export const ReactExample4_1_3 = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  console.log("Parent component rendered");
  return (
    <div>
      <button onClick={handleClick}>Increment count</button>
      <p>Count: {count}</p>
      <ChildComponent num={1}>
        <span>Same content, but wrapped in a new span element</span>
        {/*
         will be rerendered because React will be compare
          two different by ref react-nodes
          it doesn't matter what they are is identical values
        */}
      </ChildComponent>
      <ChildComponent num={2}>
        Same content, but wrapped in a new span element
      {/* will not rerendered because React will be compare two same strings  */}
      </ChildComponent>
    </div>
  );
};
