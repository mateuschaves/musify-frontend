import client from '../client'
import { NewMusicProps, RemoveMusicProps } from '../../../@types/Music'

const newMusic = ({ title, artist, genre }: NewMusicProps) => {
  return client({
    url: 'musics',
    method: 'POST',
    data: {
      title,
      artist,
      genre
    }
  })
}

const listMusic = () => {
  return client({
    url: 'musics',
    method: 'GET'
  })
}

const removeMusic = ({ id }: RemoveMusicProps) => {
  return client({
    url: `musics/${id}`,
    method: 'DELETE'
  })
}

export default {
  newMusic,
  listMusic,
  removeMusic
}
