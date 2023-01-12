import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export default function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const userLoggingIn = {
        email: email,
        password: password
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        //console.log(email, password)
        axios.post("http://localhost:3000/login", userLoggingIn)
            .then(data => localStorage.setItem('token', data.data.userToken)
            )

    }


    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            className='form'
        >
            <TextField
                id="login_form_email"
                label="E-mail"
                type="email"
                variant="outlined"
                onChange={(event) => setEmail(event.target.value)}

            />
            <TextField
                id="login_form_password"
                label="Mot de passe"
                type="password"
                autoComplete="current-password"
                onChange={(event) => setPassword(event.target.value)} />

            <Button variant="contained"
                onClick={handleSubmit}>Se connecter</Button>


        </Box>

    )
}
