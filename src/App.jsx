import { useState, useEffect } from 'react'
import './App.css'

const RANDOM_FACTS_URL = 'https://catfact.ninja/fact'
const CAT_IMAGE_PREFIX_URL = 'https://cataas.com/'

export default function App () {
  const [fact, setFact] = useState('')
  const [imageURL, setImageUrl] = useState('')

  useEffect(() => {
    fetch(RANDOM_FACTS_URL)
      .then((res) => res.json())
      .then((data) => {
        const { fact } = data
        const threeFirstWords = fact.split(' ', 3).join(' ')

        setFact(fact)

        fetch(`https://cataas.com/cat/says/${threeFirstWords}?json=true`)
          .then(res => res.json())
          .then(data => {
            const { url } = data

            setImageUrl(url)
          })
      })
  }, [])
  return (
    <main>
      <h1>Cat Facts App</h1>
      {fact && <p>{fact}</p>}
      {imageURL && <img src={`${CAT_IMAGE_PREFIX_URL}${imageURL}`} alt={`Image extraxted using the first three words from ${fact}`} />}
    </main>
  )
}
