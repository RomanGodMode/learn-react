import { RefObject, useEffect } from 'react'


type Handlers = {
  onExternalClick: (e: MouseEvent) => void
  onInternalClick: (e: MouseEvent) => void
}

export const useOutsideClick = <T extends HTMLElement>(ref: RefObject<T>, {onExternalClick, onInternalClick}: Handlers) => {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!ref.current) {
        return
      }
      const isInternal = ref.current.contains(e.target as Element)
      isInternal
        ? onInternalClick?.(e)
        : onExternalClick?.(e)
    }

    document.addEventListener('click', onClick);

    return () => {
      document.removeEventListener('click', onClick);
    }
  }, [])
}
