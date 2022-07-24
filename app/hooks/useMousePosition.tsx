import React from "react"

function useMousePosition() {
  const [pos, setPos] = React.useState<{ x: number; y: number }>({ x: 0, y: 0 })

  React.useEffect(() => {
    if (!document.body) return

    const moveCursor = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY })

    window.addEventListener("mousemove", moveCursor)

    return () => {
      window.removeEventListener("mousemove", moveCursor)
    }
  }, [])

  return pos
}

export { useMousePosition }
