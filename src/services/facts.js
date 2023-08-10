const RANDOM_FACTS_URL = 'https://catfact.ninja/fact'

export const getRandomFact = async () => {
  const res = await fetch(RANDOM_FACTS_URL)
  const data = await res.json()
  const { fact } = data
  return fact
}
