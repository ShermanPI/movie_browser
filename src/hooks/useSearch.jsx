import { useState } from 'react'

export default function useSearch () {
  const [query, setQuery] = useState('')
  const [error, setError] = useState('')

  const updateSearch = (newValue) => {
    // prevalidation
    if (newValue.startsWith(' ')) return

    setQuery(newValue)

    // searching for special characters
    if (newValue.match(/^\d+$/)) {
      setError('Special characters are not allowed')
      return
    }

    if (newValue.length) {
      setError('The movie to search must be 3 characters or more')
      return
    }

    setError('')
  }

  return (
    {
      query,
      error,
      updateSearch
    }
  )
}
