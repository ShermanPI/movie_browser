import { useState } from 'react'

export default function useSearch () {
  const [query, setQuery] = useState('')
  const [error, setError] = useState('')

  const onChangeHandler = (e) => {
    const newQuery = e.target.value

    // prevalidationA
    if (newQuery.startsWith(' ')) return

    setQuery(newQuery)

    // searching for special characters
    if (newQuery.match(/^\d+$/)) {
      setError('Special characters are not allowed')
      return
    }

    if (newQuery.length < 3 && newQuery.length > 0) {
      setError('The movie to search must be 3 characters or more')
      return
    }

    setError('')
  }

  return (
    {
      query,
      error,
      onChangeHandler
    }
  )
}
