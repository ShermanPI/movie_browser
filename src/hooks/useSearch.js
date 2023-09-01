import { useState } from 'react'

export default function useSearch () {
  const [query, setQuery] = useState('')
  const [errorQuery, setError] = useState('')

  const updateQuery = (newValue) => {
    // prevalidation
    if (newValue.startsWith(' ')) return

    setQuery(newValue)

    // searching for special characters
    if (newValue.match(/^\d+$/)) {
      setError('Special characters are not allowed')
      return
    }

    if (newValue.length < 3 && newValue.length > 0) {
      setError('The movie to search must be 3 characters or more')
      return
    }

    setError('')
  }

  return (
    {
      query,
      errorQuery,
      updateQuery
    }
  )
}
