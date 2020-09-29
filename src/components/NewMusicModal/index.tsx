import React, { useState } from 'react'
import { Button, Modal } from 'semantic-ui-react'

import { lighten } from 'polished'

import { useDispatch } from 'react-redux'

import { toast } from 'react-toastify'

import { newMusicActions } from '../../store/ducks/Music/newMusic'

import { Input, Row } from './styles'

type NewMusicModalProps = {
  show: boolean
  setShow: Function
}

function NewMusicModal({ show, setShow }: NewMusicModalProps) {
  const [title, setTitle] = useState<string>('')
  const [artist, setArtist] = useState<string>('')
  const [genre, setGenre] = useState<string>('')

  const dispatch = useDispatch()

  function handleNewMusic(title: string, artist: string, genre: string) {
    if (!validateForm(title, artist, genre))
      return toast('Preencha corretamente as informações da música', {
        type: 'error'
      })

    dispatch(newMusicActions.newMusic({ title, artist, genre }))
    setShow(false)
    clearForm()
  }

  function validateForm(title: string, artist: string, genre: string) {
    if (!title || !artist || !genre) return false
    else return true
  }

  function clearForm() {
    setTitle('')
    setArtist('')
    setGenre('')
  }

  return (
    <Modal
      onClose={() => setShow(false)}
      onOpen={() => setShow(true)}
      open={show}
      style={{
        width: 490
      }}
    >
      <Modal.Header
        style={{ backgroundColor: lighten(0.05, '#282828'), color: '#fff' }}
      >
        Adiciona uma nova música
      </Modal.Header>
      <Modal.Content
        style={{ backgroundColor: lighten(0.05, '#282828'), color: '#fff' }}
      >
        <Row>
          <Input
            placeholder='Título da música'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type='text'
          />

          <Input
            placeholder='Artista'
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
            type='text'
          />

          <Input
            placeholder='Gênero'
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            type='text'
          />
        </Row>
      </Modal.Content>
      <Modal.Actions
        style={{ backgroundColor: lighten(0.05, '#282828'), color: '#fff' }}
      >
        <Button onClick={() => setShow(false)}>Cancelar</Button>
        <Button
          content='Adicionar'
          labelPosition='right'
          icon='plus'
          onClick={() => handleNewMusic(title, artist, genre)}
          positive
        />
      </Modal.Actions>
    </Modal>
  )
}

export default NewMusicModal
