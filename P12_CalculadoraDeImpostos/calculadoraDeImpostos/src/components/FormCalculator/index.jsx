import React from 'react';
import { useFormik } from 'formik';
import { Button, Container, TextField } from '@mui/material';

const FormCalculator = ({ setData }) => {

    const calculateTax = (values) => {
        let tax;
        if (values.revenue < 5000) {
            tax = 0.05;
        } else if (values.revenue < 15000) {
            tax = 0.1;
        } else {
            tax = 0.15;
        }
        setData(
            {
                'name': values.name,
                'age': values.age,
                'revenue': values.revenue,
                'tax': values.revenue * tax

            }
        )
    }

    const validate = values => {
        const errors = {};
        if (!values.name) {
            errors.name = 'Required';
        }

        if (!values.age) {
            errors.age = 'Required';
        }

        if (!values.revenue) {
            errors.revenue = 'Required';
        }

        return errors;
    };

    const formik = useFormik({
        initialValues: {
            name: '',
            age: '',
            revenue: ''
        },
        validate,
        onSubmit: (values) => calculateTax(values),
    });
    return (
        <Container>
            <form onSubmit={formik.handleSubmit}>
                <TextField
                    id='name'
                    name='name'
                    label='Nome'
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    helperText={formik.errors.name}
                    error={!!formik.errors.name}
                    style={{ marginBottom: "16px" }} />
                <TextField
                    type="number"
                    id='age'
                    name='age'
                    label='Idade'
                    value={formik.values.age}
                    onChange={formik.handleChange}
                    helperText={formik.errors.age}
                    error={!!formik.errors.age}
                    style={{ marginBottom: "16px" }} />
                <TextField
                    type="number"
                    id='revenue'
                    name='revenue'
                    label='Renda'
                    value={formik.values.revenue}
                    onChange={formik.handleChange}
                    helperText={formik.errors.revenue}
                    error={!!formik.errors.revenue}
                    style={{ marginBottom: "16px" }} />


                <Button type='submit' variant='contained'>CALCULAR</Button>
            </form>
        </Container>
    );
};

export default FormCalculator;