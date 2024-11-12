import { useState } from 'react'
import './App.css'
import FormCalculator from './components/FormCalculator'
import TaxInfo from './components/TaxInfo';
import { Container, Typography } from '@mui/material';

function App() {
  const [data, setData] = useState(null);
  return (

    <Container style={{maxWidth: '800px', margin: '0 auto'}}>
      <Typography variant="h2" align='center' style={{marginBottom: '16px'}}>
        Calculadora de impostos
      </Typography>
      <FormCalculator setData={setData} />
      {data && <TaxInfo data={data} />}
    </Container>

  )
}

export default App
