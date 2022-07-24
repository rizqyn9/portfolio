import create from "zustand"

export type CursorVariant = "basic" | "focus"

export type CursorStore = {
  state: CursorVariant
  update(state: CursorVariant): void
}

const useCursorStore = create<CursorStore>((set, get) => ({
  state: "basic",
  update(state) {
    if (state == get().state) return
    set({ state })
  },
}))

export { useCursorStore }
