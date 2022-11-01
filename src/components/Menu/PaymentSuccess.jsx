import { Box, Heading, Text, VStack } from '@chakra-ui/react'
import axios from 'axios'
import React from 'react'
import { useNavigate, useSearchParams } from "react-router-dom"

const PaymentSuccess = () => {
    let userData = JSON.parse(localStorage.getItem("KFC-user"));
    let id = userData?.user._id;

    const seachQuery = useSearchParams()[0]

    const referenceNum = seachQuery.get("reference")

    const navigate = useNavigate();

     axios.get(`http://localhost:5000/cart/${id}`)
        .then(r => { placeOrder(r.data) })
        .catch(e => console.log(e))

    const placeOrder = async (r) => {

        axios.post(`http://localhost:5000/order`, r)
            .then((res) => {
                console.log(res.data, "added to orders succesfully")
            })
            .catch((err) => {
                console.log({ err: err.message })
            })
        alert("added to orders succesfully")
        //remove all item from cart
        axios.delete(`http://localhost:5000/cart/deleteall/${id}`)
            .then((r) => console.log(r))
            .catch((e) => console.log({ error: e.message }))
        navigate("/")
    }

    return (
        <Box>
            <VStack h="100vh" justifyContent={"center"}>

                <Heading textTransform={"uppercase"}> Order Successfull</Heading>

                <Text>
                    Reference No.{referenceNum}
                </Text>

            </VStack>
        </Box>
    )
}

export default PaymentSuccess