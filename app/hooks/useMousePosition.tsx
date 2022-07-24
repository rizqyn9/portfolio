import React from "react"
import { useCursorStore } from "~/components/Cursor"

function useMousePosition(): { x: number; y: number } {
  const [pos, setPos] = React.useState<{ x: number; y: number }>({ x: 0, y: 0 })
  const { setActive } = useCursorStore()

  React.useEffect(() => {
    if (!document.body) return

    const moveCursor = (e: MouseEvent) => {
      setActive(true)
      setPos({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", moveCursor)

    return () => {
      window.removeEventListener("mousemove", moveCursor)
    }
  }, [setActive])

  return pos
}

export { useMousePosition }
