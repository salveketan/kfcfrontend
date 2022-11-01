import React from 'react'
import { Box, Button, Heading, Image, Input, Spacer, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState({
        phone: "", password: ""
    })
    let name, value
    const handle = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value })
    }
    // console.log(user);
    const PostData = async (e) => {
        e.preventDefault();
        const { phone, password } = user;
        // console.log(user);
        const data =
            await fetch("https://kfcbackendproject.herokuapp.com/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        'Access-Control-Allow-Origin': "*",
                    },
                    body: JSON.stringify({
                        phone, password
                    })
                })

        const res = await data.json();
        // console.log(res);
        // console.log(data.status);

        if (data.status === 401 || !res) {
            window.alert("invalid registration")
            navigate("/signin", { replace: true })
        }
        else if (data.status === 451) {
            window.alert("Please fill all filled")
            navigate("/login", { replace: true })
        }
        else if (data.status === 200) {
            localStorage.setItem("KFC-user", JSON.stringify(res))
            window.alert("OPT is send to your number");
            setTimeout(() => {
                window.alert("please wait we are verifying your OTP");
            }, 2000);
            setTimeout(() => {
                navigate("/menu", { replace: true })
            }, 2000);
            setTimeout(() => {
                window.location.reload()
            }, 2000);
        }
    }

    return (
        <div>

            <Box w='100%' p={4} color='white' >
                <form method='POST'>
                    <Box w='35%' h="500px" color='black' margin={"auto"} textAlign="center">
                        <Box w='100%' p={4} color='black' margin={"auto"}>
                            <Heading as='h6' size='xs'>
                                Sign In / Sign Up
                            </Heading>
                        </Box>
                        <Box w='100%' p={4} color='black' margin={"auto"}>
                            <Text margin={"auto"} marginLeft={"210px"}>
                                <Image src="https://online.kfc.co.in/static/media/kfcLogo.492728c6.svg" alt='kfc' />
                            </Text>
                        </Box>
                        <Box w='100%' p={4} color='black' margin={"auto"}>

                            <Heading as='h5' size='md'>
                                LET’S SIGN IN OR CREATE ACCOUNT WITH YOUR PHONE NUMBER!
                            </Heading>
                        </Box>
                        <Box w='100%' p={4} color='black' margin={"auto"}>
                            <Input name='phone' value={user.phone} variant='flushed' placeholder='Enter Register Phone Number*' onChange={handle} />
                            <Input name='password' value={user.password} variant='flushed' placeholder='Password*' onChange={handle} />
                        </Box>
                        <Box w='100%' p={4} color='black' margin={"auto"}>
                            <Text fontSize='sm'>By “logging in to KFC”, you agree to our Privacy Policy and Terms & Conditions.</Text>
                        </Box>
                        <Button onClick={PostData} marginTop={"10px"} borderRadius={"50px"} bg={"black"} color={"white"}>Send Me a Code</Button>
                        <Box marginTop={"10px"} display={"flex"}>
                            <Box borderTop={"1px solid rgb(68,68,68)"} w="45%" marginTop={"10px"}></Box>
                            <Spacer />
                            <Box>Or</Box>
                            <Spacer />
                            <Box borderTop={"1px solid rgb(68,68,68)"} w="45%" marginTop={"10px"}></Box>
                        </Box>
                        <Link to={"/menu"}>
                            <Button marginTop={"10px"} borderRadius={"50px"} border={"1px solid black"} color={"black"} w="90%" bg={"white"}>Skip, Continue As guest</Button>
                        </Link>
                    </Box>
                </form>
            </Box>
        </div>
    )
}

export default Login



