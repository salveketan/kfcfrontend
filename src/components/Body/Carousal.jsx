import { Box, Flex, Heading, HStack, Image, SimpleGrid, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import ModalButton1 from './ModalButton1'
import ModalButton2 from './ModalButton2'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'

const Carousal = () => {
    return (
        <div >
            <Box bg="rgb(32,33,36)" paddingBottom={20}>
                <Box marginLeft={40} >
                    <Box>
                        <HStack spacing='14px' marginLeft={10}>
                            <Box w='18px' h='40px' bg='rgb(228,0,43)' color={"rgb(228,0,43)"}>
                                1
                            </Box>
                            <Box w='18px' h='40px' bg='rgb(228,0,43)' color={"rgb(228,0,43)"}>
                                2
                            </Box>
                            <Box w='18px' h='40px' bg='rgb(228,0,43)' color={"rgb(228,0,43)"}>
                                3
                            </Box>
                        </HStack>
                    </Box>
                    <Box p={5}>
                        <Flex>
                            <Box p={5} bg='rgb(32,33,36)'>
                                <Heading as='h2' size='xl' color="white">
                                    OFFER & DEALS
                                </Heading>
                            </Box>
                            <Spacer />
                            <Link to={"/deals"}>
                                <Box p={5} bg='rgb(32,33,36)' width="400px" color="white" >
                                    <Heading as='h5' size='sm' display={'flex'} gap={5}>
                                        view all deals
                                        <ArrowForwardIcon w={10} h={6} />
                                    </Heading>
                                </Box>
                            </Link>
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
        </div>
    )
}

export default Carousal
