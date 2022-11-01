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
import ModalButton4 from './ModalButton4'
import { Link } from 'react-router-dom'

const ModalButton3 = ({ totalItem }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    // console.log(totalItem);

    return (
        <div>
            <Button bg={"rgb(228,0,43)"} borderRadius="10px" width="200px" onClick={onOpen} color={"black"} disabled={totalItem == 0}>Place Order</Button>

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
                                HOW WOULD YOU LIKE TO RECEIVE YOUR ORDER?
                            </Heading>
                        </Center>
                    </ModalBody>

                    <ModalFooter>
                        <Box width="500px">
                            <Box width="200px" textAlign="center">
                                <ModalButton4 />
                            </Box>
                            <Box width="200px" textAlign="center">
                                <Button borderRadius="50px" width="200px" marginLeft="100px" marginTop={3} variant='ghost' border="1px solid black">Dine In</Button>
                            </Box>
                            <Box width="200px" textAlign="center">
                                <Link to={"/address"}>
                                    <Button borderRadius="50px" width="200px" marginLeft="100px" marginTop={3} variant='ghost' border="1px solid black">Delivery</Button>
                                </Link>
                            </Box>
                        </Box>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    )
}

export default ModalButton3
