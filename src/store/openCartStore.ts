import { create } from 'zustand'

interface State {
	isOpen: boolean
	openCart: () => void
	closeCart: () => void
}

export const useOpenCartStore = create<State>((set) => ({
	isOpen: false,
	openCart: () => set({ isOpen: true }),
	closeCart: () => set({ isOpen: false }),
}))
