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

const ModalButton1 = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()


    return (
        <div>
            <Button borderRadius="30px" width="130px" onClick={onOpen}>Redeem</Button>

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
                                <Button borderRadius="50px" width="200px" marginLeft="100px" marginTop={3} variant='ghost' border="1px solid black">Pick Up</Button>
                            </Box>
                            <Box width="200px" textAlign="center">
                                <Button borderRadius="50px" width="200px" marginLeft="100px" marginTop={3} variant='ghost' border="1px solid black">Dine In</Button>
                            </Box>
                            <Box width="200px" textAlign="center">
                                <Button borderRadius="50px" width="200px" marginLeft="100px" marginTop={3} variant='ghost' border="1px solid black">Delivery</Button>
                            </Box>
                        </Box>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    )
}

export default ModalButton1
