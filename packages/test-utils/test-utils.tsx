import { render, RenderOptions } from '@testing-library/react'
import { ReactElement, Fragment } from 'react'

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'queries'>
) => render(ui, { wrapper: ({children}) => <Fragment children={children} />, ...options })

export * from '@testing-library/react'
export * from './press'
export { customRender as render }