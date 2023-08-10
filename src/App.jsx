import './App.css'
import logoImage from './cat-solid.svg'
import { useState, useEffect } from 'react'
import { getRandomFact } from './services/facts'

const CAT_IMAGE_PREFIX_URL = 'https://cataas.com/'

export default function App () {
  const [fact, setFact] = useState('')
  const [imageURL, setImageUrl] = useState('')

  useEffect(() => {
    getRandomFact().then((newFact) => setFact(newFact))
  }, [])

  useEffect(() => {
    if (!fact) return
    const threeFirstWords = fact.split(' ', 3).join(' ')
    fetch(`https://cataas.com/cat/says/${threeFirstWords}?json=true`)
      .then(res => res.json())
      .then(data => {
        const { url } = data

        setImageUrl(url)
      })
  }, [fact])

  const handleClick = async () => {
    const newFact = await getRandomFact()
    setFact(newFact)
  }

  return (
    <main>
      <div className='logo-container'>
        <img src={logoImage} alt='Cat Facts App logo' />
        <h1>Cat Facts App</h1>
      </div>
      <section>
        <button onClick={handleClick}>Get new fact</button>
        {fact && <p>{fact}</p>}
        {imageURL && <img src={`${CAT_IMAGE_PREFIX_URL}${imageURL}`} alt={`Image extraxted using the first three words from ${fact}`} onClick={handleClick} />}
      </section>
    </main>
  )
}
