import React from 'react'
import { Box, Button, Heading, Image, Input, Text } from '@chakra-ui/react';
import { useState } from 'react';
import axios from 'axios';

const Address = () => {
    let userData = JSON.parse(localStorage.getItem("KFC-user"));
    let id = userData?.user._id;
    const [user, setUser] = useState({
        email: "", phone: "", address: "", city: "", state: "", pincode: ""
    })
    let name, value
    const handle = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value })
    }


    const PostData = async (e) => {
        e.preventDefault();
        axios.get(`http://localhost:5000/cart/${id}`)
            .then(r => { placeOrder(r.data) })
            .catch(e => console.log(e))
    }


    const placeOrder = async (r) => {

        let sum = 0;
        r?.forEach(element => {
            sum += (element.price);
        });

        checkoutHandler(sum.toFixed(2))

    }

    const checkoutHandler = async (amount) => {
        const { data: { key } } = await axios.get("http://www.localhost:5000/api/getkey")

        const data = await fetch("http://localhost:5000/api/checkout",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    'Access-Control-Allow-Origin': "*",
                },
                body: JSON.stringify({ amount })
            })

        const res = await data.json();

        const options = {
            key,
            amount: res.order.amount,
            currency: "INR",
            name: "KFC_Clone",
            description: "KFC payment",
            image: "https://online.kfc.co.in/static/media/kfcLogo.492728c6.svg",
            order_id: res.order.id,
            callback_url: "http://localhost:5000/api/paymentverification",
            prefill: {
                name: `${userData.user.name}`,
                email: `${userData.user.email}`,
                contact: `${userData.user.phone}`
            },
            notes: {
                "address": "Razorpay Corporate Office"
            },
            theme: {
                "color": "#121212"
            }
        };
        const razor = new window.Razorpay(options);
        razor.open();
    }

    return (
        <div>
            <Box w='100%' p={4} color='white' >
                <form method='POST'>
                    <Box w='35%' h="500px" color='black' margin={"auto"} textAlign="center">
                        <Box w='100%' p={4} color='black' margin={"auto"}>
                            {/* <Heading as='h6' size='xs'>
                                Address
                            </Heading> */}
                        </Box>
                        <Box w='100%' p={4} color='black' margin={"auto"}>
                            <Text margin={"auto"} marginLeft={"210px"}>
                                <Image src="https://online.kfc.co.in/static/media/kfcLogo.492728c6.svg" alt='kfc' />
                            </Text>
                        </Box>
                        <Box w='100%' p={4} color='black' margin={"auto"}>
                            <Box w='100%' p={4} color='black' margin={"auto"}>
                                <Text fontSize='sm'>Before “Placing order to KFC”, You Should Check All Information You Fill And Agree To Our Privacy Policy and Terms & Conditions.</Text>
                            </Box>
                            <Heading as='h5' size='md'>
                                ADDRESS : {userData.user.address},{userData.user.city},{userData.user.state},{userData.user.pincode}
                            </Heading>
                            <br />
                            <Heading as='h5' size='xs'>
                                EDIT ADDRESS
                            </Heading>
                        </Box>
                        <Box w='100%' p={4} color='black' margin={"auto"}>
                            <Input name='email' value={user.email} variant='flushed' placeholder='Email*' onChange={handle} />
                            <Input name='phone' value={user.phone} variant='flushed' placeholder='Phone Number*' onChange={handle} />
                            <Input name='address' value={user.address} variant='flushed' placeholder='Address*' onChange={handle} />
                            <Box display={"flex"}>
                                <Input name='city' value={user.city} variant='flushed' placeholder='City*' onChange={handle} />
                                <Input name='state' value={user.state} variant='flushed' placeholder='State*' onChange={handle} />
                            </Box>
                            <Input name='pincode' value={user.pincode} variant='flushed' placeholder='Pin Code*' onChange={handle} />
                        </Box>
                        <Box w='100%' p={4} color='black' margin={"auto"}>
                            <Text fontSize='sm'>By “Placing order to KFC”, you agree to our Privacy Policy and Terms & Conditions.</Text>
                        </Box>
                        <Button marginTop={"10px"} borderRadius={"50px"} bg={"black"} color={"white"} marginRight={"10px"}>Edit address</Button>
                        <Button onClick={PostData} marginTop={"10px"} borderRadius={"50px"} bg={"black"} color={"white"}>Checkout</Button>
                    </Box>
                </form>
            </Box>
        </div>
    )
}

export default Address



