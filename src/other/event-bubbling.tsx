import React from 'react';


export const ReactExample_4_1_4 = () => {
  const handleParentClick = (event: any) => {
    alert('Parent clicked!');
  };

  const handleChildClick = (event: any) => {
    event.stopPropagation();
    alert('Child clicked!');
  };

  return (
    <div
      onClick={handleParentClick}
      style={{ padding: '50px', backgroundColor: 'red' }}
    >
      Parent
      <button onClick={handleChildClick} style={{ marginLeft: '20px' }}>
        Child
      </button>
    </div>
  );
};
