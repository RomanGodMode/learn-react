import React from 'react'


type Props = {
  id: number
  title: string
}

export const Component = (props: Props) => {
  return (
    <div>
      <h1>{props.id}</h1>
      <h4>{props.title}</h4>
    </div>
  )
}

// export const Component = ({id, title}: Props) => {
//   return (
//     <div>
//       <h1>{id}</h1>
//       <h4>{title}</h4>
//     </div>
//   )
// }
