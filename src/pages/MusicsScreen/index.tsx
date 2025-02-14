import React, { useState, useEffect } from 'react'

import Content from '../../components/Content'
import Music from '../../components/Music'
import MusicLoading from '../../components/MusicLoading'

// @ts-ignore
import { Levels } from 'react-activity'

import NewMusicModal from '../../components/NewMusicModal'
import ShowMusicModal from '../../components/ShowMusicModal'

// @ts-ignore
import Lottie from 'lottie-react-web'
import { animations } from '../../config'

import { listMusicActions } from '../../store/ducks/Music/listMusic'
import { userActions } from '../../store/ducks/Auth/loggedUser'

import { RootStore } from '../../@types/General'
import { ListMusicStateProps, NewMusicStateProps } from '../../@types/Music'
import { UserStateProps } from '../../@types/Auth'

import { storageHeaders } from '../../utils'

import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { FaPlus } from 'react-icons/fa'

import {
  Header,
  Avatar,
  AddButton,
  Container,
  Title,
  Musics,
  Loadings,
  Logout,
  EmptyMusicLabel,
  Row
} from './styles'

type MusicSelected = {
  id: number
  track: number
  title: string
  artist: string
  genre: string
}

function MusicsScreen() {
  const [showNewMusicModal, setShowNewMusicModal] = useState<boolean>(false)
  const [showMusicModal, setShowMusicModal] = useState<boolean>(false)

  const [musicSelected, setMusicSelected] = useState<MusicSelected>({
    id: 0,
    track: 0,
    title: '',
    artist: '',
    genre: ''
  })

  const dispatch = useDispatch()
  const history = useHistory()

  const { musics, loading } = useSelector<RootStore, ListMusicStateProps>(
    (state) => state.listMusic
  )
  const { user } = useSelector<RootStore, UserStateProps>(
    (state) => state.loggedUser
  )
  const newMusic = useSelector<RootStore, NewMusicStateProps>(
    (state) => state.newMusic
  )

  useEffect(() => {
    dispatch(listMusicActions.listMusic())
  }, [dispatch])

  function handleLogout() {
    dispatch(userActions.userLogout())
    storageHeaders.clearHeaders()
    history.push('/signin')
  }

  function handleSelectMusic(
    id: number,
    track: number,
    title: string,
    artist: string,
    genre: string
  ) {
    setMusicSelected({
      id,
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
    }

    if (musics.length) {
      return (
        <Musics>
          {musics &&
            musics.map((music, track) => (
              <Music
                key={music.id}
                onClick={() =>
                  handleSelectMusic(
                    music.id,
                    track + 1,
                    music.artist,
                    music.title,
                    music.genre
                  )
                }
                id={music.id}
                track={track + 1}
                artist={music.artist}
                title={music.title}
                genre={music.genre}
              />
            ))}
        </Musics>
      )
    }

    return (
      <Musics>
        <Lottie
          width={120}
          height={120}
          options={{
            animationData: animations.Empty
          }}
        />

        <EmptyMusicLabel>
          Parece que você ainda não tem nenhuma música cadastrada
        </EmptyMusicLabel>
      </Musics>
    )
  }

  return (
    <Container>
      <Content>
        <Row>
          <Title>
            {['Bem vindo,', user?.user?.name.split(' ')[0]].join('\n')}
          </Title>

          <Logout onClick={handleLogout}>Sair</Logout>
        </Row>

        <Header>
          <Avatar
            src='https://api.adorable.io/avatars/90/mateus@happy.png'
            alt='avatar'
          />
          <AddButton onClick={() => setShowNewMusicModal(true)}>
            {newMusic.loading ? (
              <Levels color='#fff' />
            ) : (
              <FaPlus color='#fff' size={22} />
            )}
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
            id={musicSelected.id}
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
