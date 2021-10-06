import styled from 'styled-components'

import CssBaseline from '@mui/core/CssBaseline'
import { makeStyles } from '@mui/core/styles'
import Grid from '@mui/core/Grid'

import Experiences from './components/Experiences'
import Formations from './components/Formations'
import Contact from './components/Contact'
import Competences from './components/Competences'
import Header from './components/Header'
import { DataExperiences } from './data/data.js'

const AppContainer = styled.body`
  @media (min-width: 800px) {
    padding: 0.5rem;
    background: #DDDDDD; /* Au cas ou les dégradés ne fonctionnent pas*/
    background: radial-gradient(ellipse, #DDDDDD, #333333)
  }
`

const Main = styled.main`
  @media (min-width: 800px) {
    margin: 3rem auto;
    padding: 3rem;
    width: 80%;
    height: 100%;
    border: solid #333 3px;
    box-shadow: 4px 4px 8px 2px #000000;
    background: #FFF;
  }
`

const QRCode = styled.div``

function App () {
  return (
    <>
      <CssBaseline />
      <AppContainer>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Header />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Experiences data={DataExperiences} />
            <Formations />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Contact />
            <Competences />
            <QRCode />
          </Grid>
        </Grid>
      </AppContainer>
    </>
  )
}

export default App
