import React, { useState, useEffect } from 'react'

import Content from '../../components/Content'
import Music from '../../components/Music'
import MusicLoading from '../../components/MusicLoading'

import NewMusicModal from '../../components/NewMusicModal'
import ShowMusicModal from '../../components/ShowMusicModal'

import { listMusicActions } from '../../store/ducks/Music/listMusic'

import { RootStore } from '../../@types/General'
import { ListMusicStateProps } from '../../@types/Music'

import { useDispatch, useSelector } from 'react-redux'

import { FaPlus } from 'react-icons/fa'

import {
  Header,
  Avatar,
  AddButton,
  Container,
  Title,
  Musics,
  Loadings
} from './styles'

type MusicSelected = {
  track: number
  title: string
  artist: string
  genre: string
}

function MusicsScreen() {
  const [showNewMusicModal, setShowNewMusicModal] = useState<boolean>(false)
  const [showMusicModal, setShowMusicModal] = useState<boolean>(false)

  const [musicSelected, setMusicSelected] = useState<MusicSelected>({
    track: 0,
    title: '',
    artist: '',
    genre: ''
  })

  const dispatch = useDispatch()
  const { musics, loading } = useSelector<RootStore, ListMusicStateProps>(
    (state) => state.listMusic
  )

  useEffect(() => {
    dispatch(listMusicActions.listMusic())
  }, [dispatch])

  function handleSelectMusic(
    track: number,
    title: string,
    artist: string,
    genre: string
  ) {
    setMusicSelected({
      track,
      title,
      artist,
      genre
    })

    setShowMusicModal(true)
  }

  function renderContent(loading: boolean) {
    if (loading) {
      return (
        <Loadings>
          <MusicLoading />
          <MusicLoading />
          <MusicLoading />
          <MusicLoading />
          <MusicLoading />
          <MusicLoading />
          <MusicLoading />
        </Loadings>
      )
    } else {
      return (
        <Musics>
          {musics &&
            musics.map((music) => (
              <Music
                onClick={() =>
                  handleSelectMusic(
                    music.id,
                    music.artist,
                    music.title,
                    music.genre
                  )
                }
                track={music.id}
                artist={music.artist}
                title={music.title}
                genre={music.genre}
              />
            ))}
        </Musics>
      )
    }
  }

  return (
    <Container>
      <Content>
        <Title>{['Bem vindo,', 'Mateus'].join('\n')}</Title>
        <Header>
          <Avatar
            src='https://api.adorable.io/avatars/90/mateus@happy.png'
            alt='avatar'
          />
          <AddButton onClick={() => setShowNewMusicModal(true)}>
            <FaPlus color='#fff' size={22} />
          </AddButton>
        </Header>

        {renderContent(loading)}

        <NewMusicModal
          show={showNewMusicModal}
          setShow={setShowNewMusicModal}
        />
        {ShowMusicModal && (
          <ShowMusicModal
            show={showMusicModal}
            setShow={setShowMusicModal}
            track={musicSelected.track}
            title={musicSelected.title}
            artist={musicSelected.artist}
            genre={musicSelected.genre}
          />
        )}
      </Content>
    </Container>
  )
}

export default MusicsScreen
