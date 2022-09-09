import React, { useEffect, useState } from 'react'

const baseURL = 'https://kitsu.io/api/edge/'

const TopAnime = () => {
  const [topAnime, setTopAnime] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      await fetch(`${baseURL}trending/anime`)
        .then(response => response.json())
        .then(data => {
          setTopAnime(data)
          console.log(data)
        })
    }
    fetchData()
  }, [])

  return (
    <div className="container-top-anime">
      <h1>Animes em Alta</h1>

      {topAnime.data && (
        <ul className="list-anime">
          {topAnime.data.map(anime => (
            <li key={anime.id}>
              <img
                src={anime.attributes.posterImage.small}
                alt={anime.attributes.canonicalTitle}
              />
              <h4>{anime.attributes.canonicalTitle}</h4>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default TopAnime
