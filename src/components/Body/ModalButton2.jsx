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
    Text,
} from '@chakra-ui/react'

const ModalButton2 = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()


    return (
        <div>
            <Text as='u' onClick={onOpen}>View Details</Text>

            <Modal isOpen={isOpen} onClose={onClose} size={'xl'}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        {/* <Center> */}
                        <Heading as='h3' size='lg'>
                            OFFERS & DEALS
                        </Heading>
                    </ModalHeader>
                    <ModalCloseButton />
                    <Divider />
                    <ModalBody>
                        <Center>
                            <Text fontSize='xl'>
                                1 PC FREE CHICKEN ZINGER ON A CART VALUE OF 399 OR ABOVE ON FIRST ORDER. ONLY FOR REGISTERED USERS.
                            </Text>
                        </Center>
                    </ModalBody>

                    <ModalFooter>
                        <Box width="500px">
                            <Box width="200px" textAlign="center">
                                <Button borderRadius="50px" width="200px" marginLeft="100px" marginTop={3} variant='ghost' border="1px solid black">Redeem</Button>
                            </Box>
                        </Box>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    )
}

export default ModalButton2
