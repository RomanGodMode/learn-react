import s from './styles.module.scss'
import { useOutsideClick } from './use-outside-click'
import { useRef } from 'react'


export const ReactExample3_7_2 = () => {
  const ref = useRef<HTMLDivElement>(null)
  useOutsideClick(ref, {
    onExternalClick: () => console.log("Внешний клик"),
    onInternalClick: () => console.log("Внутренний клик"),
  });

  return (
    <div>
      <div ref={ref} className={s.box}>
        <button>dsadsa</button>
      </div>
      <button>Внешняя кнопка</button>
    </div>
  )
}
