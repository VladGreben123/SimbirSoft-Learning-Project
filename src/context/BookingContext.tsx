import { createContext, useContext, useState } from 'react'
import type { Point, Model } from '../types/index'

type BookingState = {
  point: Point | null
  model: Model | null
  setPoint: (point: Point | null) => void
  setModel: (model: Model | null) => void
  clearFrom: (path: string) => void
}

const BookingContext = createContext<BookingState | null>(null)

const pageOrder = ['/book/point', '/book/model', '/book/additional', '/book/total']

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [point, setPoint] = useState<Point | null>(null)
  const [model, setModel] = useState<Model | null>(null)

  const clearFrom = (path: string) => {
    const idx = pageOrder.indexOf(path)
    if (idx <= 1) setModel(null)
  }

  return (
    <BookingContext.Provider value={{ point, model, setPoint, setModel, clearFrom }}>
      {children}
    </BookingContext.Provider>
  )
}

export function useBooking() {
  const ctx = useContext(BookingContext)
  if (!ctx) throw new Error('useBooking must be used inside BookingProvider')
  return ctx
}