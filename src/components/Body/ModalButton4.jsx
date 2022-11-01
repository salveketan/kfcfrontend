import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Box,
    Center,
    Divider,
    Heading,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const ModalButton4 = () => {
    let userData = JSON.parse(localStorage.getItem("KFC-user"));
    let id = userData?.user._id;

    const { isOpen, onOpen, onClose } = useDisclosure()
    const navigate = useNavigate()

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    let time = getRndInteger(25, 45)

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    let oredrNumber = getRndInteger(1000, 2000)


    const handle = () => {
        // console.log("yes");
        alert("Hurray, Your order is placed");
        axios.get(`https://kfcbackendproject.herokuapp.com/cart/${id}`)
            .then(r => { placeOrder(r.data) })
            .catch(e => console.log(e))
        // navigate("/")
    }
    const placeOrder = async (r) => {

        axios.post(`https://kfcbackendproject.herokuapp.com/order`, r)
            .then((res) => {
                console.log(res.data, "added to orders succesfully")
            })
            .catch((err) => {
                console.log({ err: err.message })
            })
        alert("added to orders succesfully")
        //remove all item from cart
        axios.delete(`https://kfcbackendproject.herokuapp.com/cart/deleteall/${id}`)
            .then((r) => console.log(r))
            .catch((e) => console.log({ error: e.message }))
        navigate("/")
    }

    return (
        <div>
            <Button borderRadius="50px" width="200px" marginLeft="100px" marginTop={3} variant='ghost' border="1px solid black" onClick={onOpen}>Pick Up</Button>

            <Modal isOpen={isOpen} onClose={onClose} size={'xl'}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        <Center>
                            <Heading as='h3' size='lg'>
                                START YOUR ORDER
                            </Heading>
                        </Center>
                    </ModalHeader>
                    <ModalCloseButton />
                    <Divider />
                    <ModalBody>
                        <Center>
                            <Heading as='h3' size='lg'>
                                Your order will ready in {time}min, and your order no. is {oredrNumber}
                            </Heading>
                        </Center>
                    </ModalBody>

                    <ModalFooter>
                        <Box width="500px">
                            <Box width="200px" textAlign="center" marginTop="110px">
                                <Button borderRadius="50px" width="200px" marginLeft="100px" marginTop={3} variant='ghost' border="1px solid black" onClick={handle}>Confirm Order</Button>
                            </Box>
                        </Box>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    )
}

export default ModalButton4
