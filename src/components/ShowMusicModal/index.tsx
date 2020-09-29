import React from 'react'
import { Button, Header, Modal, HeaderSubheader } from 'semantic-ui-react'

import { removeMusicActions } from '../../store/ducks/Music/removeMusic'

import { useDispatch, useSelector } from 'react-redux'

import { lighten } from 'polished'

type NewMusicModalProps = {
  show: boolean
  setShow: Function
  title: string
  artist: string
  genre: string
  track: number
}

function ShowMusicModal({
  show,
  setShow,
  track,
  title,
  artist,
  genre
}: NewMusicModalProps) {
  const dispatch = useDispatch()

  function handleDeleteMusic(track: number) {
    dispatch(removeMusicActions.removeMusic({ id: track }))
    setShow(false)
  }

  return (
    <Modal
      onClose={() => setShow(false)}
      onOpen={() => setShow(true)}
      open={show}
      style={{
        width: 400
      }}
    >
      <Modal.Header
        style={{ backgroundColor: lighten(0.05, '#282828'), color: '#fff' }}
      >
        #{track} - {title}
      </Modal.Header>
      <Modal.Content
        style={{ backgroundColor: lighten(0.05, '#282828'), color: '#fff' }}
      >
        <Modal.Description>
          <Header style={{ color: '#fff' }}>{title}</Header>
          <HeaderSubheader>
            {artist} - {genre}
          </HeaderSubheader>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions
        style={{ backgroundColor: lighten(0.05, '#282828'), color: '#fff' }}
      >
        <Button
          content='Remover'
          labelPosition='right'
          icon='trash'
          onClick={() => handleDeleteMusic(track)}
          negative
        />
        <Button
          content='Ok'
          labelPosition='right'
          icon='checkmark'
          onClick={() => setShow(false)}
          positive
        />
      </Modal.Actions>
    </Modal>
  )
}

export default ShowMusicModal
