import create from "zustand"

export type CursorVariant = "basic" | "focus"

export type CursorStore = {
  active: boolean
  setActive(active: boolean): void
  state: CursorVariant
  update(state: CursorVariant): void
}

const useCursorStore = create<CursorStore>((set, get) => ({
  active: false,
  setActive(active) {
    if (active == get().active) return
    set({ active })
  },
  state: "basic",
  update(state) {
    if (state == get().state) return
    set({ state })
  },
}))

export { useCursorStore }
