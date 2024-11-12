import React from 'react'
import { Container, Typography } from '@mui/material'

const TaxInfo = ({ data }) => {
    return (
        <Container>
            <Typography variant='h5'>
                Relatório de Impostos
            </Typography>
            <Typography variant='body2'>
                Nome: {data.name}
            </Typography>
            <Typography variant='body2'>
                Idade: {data.age}
            </Typography>
            <Typography variant='body2'>
                Renda: {data.revenue.toLocaleString("pt-BR", {
                    style: 'currency',
                    currency: 'BRL'
                })}
            </Typography>
            <Typography variant='body2'>
                Imposto a pagar: {data.tax.toLocaleString("pt-BR", {
                    style: 'currency',
                    currency: 'BRL'
                })}
            </Typography>
        </Container>
    )
}

export default TaxInfo