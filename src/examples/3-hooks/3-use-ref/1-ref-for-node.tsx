import React, { useEffect, useRef } from 'react'


export const ReactExample3_3_1 = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // поскольку useEffect исполняется именно после рендера компонента и применения результата к dom
    // мы сразу можем работать с нодой
    console.log(containerRef.current)
    console.dir(containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      кантент
    </div>
  )
}
