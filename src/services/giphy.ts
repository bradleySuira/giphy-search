export async function searchGifs({
  term,
  limit = 10,
  offset = 0
}: {
  term: string
  limit?: number
  offset?: number
}) {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=${
      import.meta.env.VITE_GIPHY_API_KEY
    }&q=${term}&limit=${limit}&offset=${offset}`
  )
  return response.json()
}
