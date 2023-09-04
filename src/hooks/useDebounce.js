import { useEffect } from 'react'

export default function useDebounce (callbackFn, delay, dependencies) {
  useEffect(() => {
    const setTimeoutId = setTimeout(() => {
      callbackFn()
    }, delay)

    return () => clearTimeout(setTimeoutId)
  }, [...dependencies])
}
