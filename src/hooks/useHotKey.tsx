import { useEffect } from 'react'

export const useHotKey = (
  callback: () => void,
  dependencies?: any[],
  key?: string,
  options: {
    withAlt?: boolean
    withShift?: boolean
    withCntrl?: boolean
  } = {
    withAlt: false,
    withShift: false,
    withCntrl: false,
  },
) => {
  useEffect(() => {
    const keyDownHandler = (event: KeyboardEvent) => {
      let keyCheck = options.withAlt
        ? event.key === (key ? key : 'Enter') && event.altKey
        : event.key === (key ? key : 'Enter')
      if (keyCheck) {
        callback()
      }
    }

    document.addEventListener('keydown', keyDownHandler)

    return () => {
      document.removeEventListener('keydown', keyDownHandler)
    }
  }, dependencies || [])
}
