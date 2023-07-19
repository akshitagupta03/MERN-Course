import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import { Typography } from '@mui/material';
import { useState } from 'react';

function Signup(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return <div>
        <div style = {{
            paddingTop: 150,
            marginBottom: 10,
            display: "flex",
            justifyContent: "center",
        }}>

            <Typography variant = {"h6"}>
                Welcome to Coursera. Sign up below
            </Typography>
            
        </div>

        <div style = {{
            display: "flex",
            justifyContent: "center",
        }}>
            <Card 
                variant = "outlined" 
                style = {{
                    width: 400,
                    padding: 20,
                }}
            >
                <TextField 
                    onChange = { (e) => {
                        setEmail(e.target.value);
                    }}

                    // alternate way to do onChange but it is recommended to not use 
                    // id anywhere in react

                    /* 
                        id = {"username"}
                        onChange = { (e) => {
                            let value = document.getElementById("username").value
                            setEmail(value)
                        }} 
                    */

                    fullWidth
                    label="Email" 
                    variant="outlined" 
                />
                <br/><br/>

                <TextField 
                    onChange = { (e) => {
                        setPassword(e.target.value);
                    }}
                    fullWidth
                    label = "Password" 
                    variant = "outlined" 
                    type = {"password"}
                />
                <br/><br/>

                <Button 
                    size = {"large"} 
                    variant = "contained"
                    onClick = { () => {
                        fetch("http://localhost:3000/admin/signup", {
                            method: "POST",
                            body: JSON.stringify({
                                username: email,
                                password: password,
                            }),
                            headers: {
                                "Content-type": "application/json"
                            }
                        })
                    }}
                >
                    Sign up
                </Button>
            </Card>
        </div>
    </div>
}

export default Signup;
