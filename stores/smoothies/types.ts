export interface Smoothie {
  id: number,
  createdAt: string,
  title: string,
  method: string,
  rating: number
}

export interface State {
  smoothiesList: Array<Smoothie>
}