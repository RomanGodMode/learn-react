import React from 'react'

export const ReactExample1_6 = () => {

  return (
    <div>
      {true && <div>
       Он есть
      </div>}
      {false && <div>
        Этого нет
      </div>}

      {true && (
        <div>
          Он есть
        </div>
      )}
    </div>
  )
}
