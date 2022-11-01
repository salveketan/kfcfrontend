import { Box, Button, Center, Heading } from '@chakra-ui/react'
import React from 'react'
import { Flex, HStack, Image, SimpleGrid, Spacer, Text } from '@chakra-ui/react'
import ModalButton1 from '../Body/ModalButton1'
import ModalButton2 from '../Body/ModalButton2'
import Footer from '../Body/Footer'
const Deals = () => {
    return (
        <div>
            <Box bg='rgb(32,33,36)' w='100%' p={4} color='white'>
                <Center gap={5}>
                    <Heading as='h4' size='xs'>
                        LET'S ORDER FOE DELIVERY, PICK UP, OR DINE-IN
                    </Heading>
                    <Button background={"rgb(228,0,43)"} borderRadius={20}>Start Order</Button>
                </Center>
            </Box>



            <Box bg="rgb(248,247,245)" paddingBottom={20}>
                <Box marginLeft={40} >
                    <Box>
                        <HStack spacing='10px' marginLeft={10}>
                            <Box w='15px' h='35px' bg='rgb(228,0,43)' color={"rgb(228,0,43)"}>
                                1
                            </Box>
                            <Box w='15px' h='35px' bg='rgb(228,0,43)' color={"rgb(228,0,43)"}>
                                2
                            </Box>
                            <Box w='15px' h='35px' bg='rgb(228,0,43)' color={"rgb(228,0,43)"}>
                                3
                            </Box>
                        </HStack>
                    </Box>
                    <Box p={5}>
                        <Flex>
                            <Box p={5} >
                                <Heading as='h2' size='xl' color="black">
                                    OFFER & DEALS
                                </Heading>
                            </Box>
                            <Spacer />
                            <Box p={5} width="400px" color="black">
                                <Heading as='h5' size='sm'>
                                    {/* view all deals */}
                                </Heading>
                            </Box>
                        </Flex>
                    </Box>
                    <SimpleGrid columns={[2, null, 4]} spacing='40px'>
                        <Box bg='white' borderRadius={10}>
                            <Image borderRadius={10} src='https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/lg/CHKZINGER.jpg' />
                            <Box p={3}>
                                <Box>
                                    <Heading as='h2' size='lg'>
                                        1 PC FREE CHIKEN
                                    </Heading>
                                </Box>
                                <Box>
                                    <Text fontSize='sm' noOfLines={2}>
                                        1 Pc free Chicken Zinger on a cart value of 399 or above on first order. Only for registered users.
                                    </Text>
                                </Box>
                                <Box>
                                    <Flex>
                                        <Box p='2' bg='white' marginTop={2} cursor={"pointer"}>
                                            <ModalButton2 />
                                        </Box>
                                        <Spacer />
                                        <Box p='2' bg='white' cursor={"pointer"}>
                                            <ModalButton1 />
                                        </Box>
                                    </Flex>
                                </Box>
                            </Box>

                        </Box>
                        <Box bg='white' borderRadius={10}>
                            <Image borderRadius={10} src='https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/lg/VEGZINGER.jpg' />
                            <Box p={3}>
                                <Box>
                                    <Heading as='h2' size='lg'>
                                        1 PC FREE CHIKEN
                                    </Heading>
                                </Box>
                                <Box>
                                    <Text fontSize='sm' noOfLines={2}>
                                        1 Pc free Veg Zinger on a cart value of 399 or above on first order. Only for registered users
                                    </Text>
                                </Box>
                                <Box>
                                    <Flex>
                                        <Box p='2' bg='white' marginTop={2} cursor={"pointer"}>
                                            <ModalButton2 />
                                        </Box>
                                        <Spacer />
                                        <Box p='2' bg='white' cursor={"pointer"}>
                                            <ModalButton1 />
                                        </Box>
                                    </Flex>
                                </Box>
                            </Box>

                        </Box>
                        <Box bg='white' borderRadius={10}>
                            <Image borderRadius={10} src='https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/lg/ADDCHK99.jpg' />
                            <Box p={3}>
                                <Box>
                                    <Heading as='h2' size='lg'>
                                        1 PC FREE CHIKEN
                                    </Heading>
                                </Box>
                                <Box>
                                    <Text fontSize='sm' noOfLines={2}>
                                        Add 2 Pc  Hot n Crispy Chicken @ just Rs 99 on min cart value of Rs 499 or more. Applicable on 2nd & 3rd order for signed in user.
                                    </Text>
                                </Box>
                                <Box>
                                    <Flex>
                                        <Box p='2' bg='white' marginTop={2} cursor={"pointer"}>
                                            <ModalButton2 />
                                        </Box>
                                        <Spacer />
                                        <Box p='2' bg='white' cursor={"pointer"}>
                                            <ModalButton1 />
                                        </Box>
                                    </Flex>
                                </Box>
                            </Box>

                        </Box>
                        <Box bg='white' borderRadius={10}>
                            <Image borderRadius={10} src='https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/lg/BIGSAVE.jpg' />
                            <Box p={3}>
                                <Box>
                                    <Heading as='h2' size='lg'>
                                        1 PC FREE CHIKEN
                                    </Heading>
                                </Box>
                                <Box>
                                    <Text fontSize='sm' noOfLines={2}>
                                        Upto Rs 100 off on min cart value of Rs 599 or more . Applicable on 4th order onwards for signed in user.
                                    </Text>
                                </Box>
                                <Box>
                                    <Flex>
                                        <Box p='2' bg='white' marginTop={2} cursor={"pointer"}>
                                            <ModalButton2 />
                                        </Box>
                                        <Spacer />
                                        <Box p='2' bg='white' cursor={"pointer"}>
                                            <ModalButton1 />
                                        </Box>
                                    </Flex>
                                </Box>
                            </Box>

                        </Box>
                    </SimpleGrid>
                </Box>
            </Box>
            <Footer />


        </div>
    )
}

export default Deals
