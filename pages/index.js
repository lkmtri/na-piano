import React from 'react'
import styled from 'styled-components'
import { Layout, Button, Typography } from 'antd'

const { Title } = Typography

const notes = ['Đồ', 'Rê', 'Mi', 'Fa', 'Sol', 'La', 'Si']

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const App = () => {
  const [view, setView] = React.useState('start')
  const [note, setNote] = React.useState()

  const startGame = () => {
    setView('game')

    setInterval(() => {
      let idx = getRandomInt(0, 6)
      while (notes[idx] === note) {
        idx = getRandomInt(0, 6)
      }
      setNote(notes[idx])
    }, 2000)
  }

  return (
    <Layout style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', height: '100vh' }}>
      {view === 'start' && (
        <Button onClick={startGame}>Start</Button>
      )}
      {view === 'game' && (
        <Title level={4}>{note}</Title>
      )}
    </Layout>
  )
  }

export default App