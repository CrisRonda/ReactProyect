import { useEffect, useState, useRef } from 'react'

export function useNearScreen () {
  const element = useRef(null)
  const [show, setShow] = useState(false)
  useEffect(() => {
    const observer = new window.IntersectionObserver((entries) => {
      const { isIntersecting } = entries[0]
      if (isIntersecting) {
        console.log('Es verdadero')
        setShow(isIntersecting)
        observer.disconnect()
      }
    })
    observer.observe(element.current)
  }, [element])
  return [show, element]
}
