import { Box, Center, Divider, Flex, Heading, Image, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const BrowseCategories = () => {
    return (
        <div>
            <Box bg='white' w='100%' p={4} color='white'>
                <Box bg='white' w='75%' margin="auto" p={4} color='white'>
                    <Flex color='white' h="13rem" marginBottom={2} >
                        <Center bg='white' color='black' width="35%">
                            {/* <Center bg='rgb(248,247,245)' color='black' marginTop={3}> */}
                            <Heading as='h4' size='lg'>
                                BROWSE CATEGORIES
                            </Heading>
                          
                        </Center>
                        <Box flex='1' >
                           
                            <Divider marginTop={110} />
                        </Box>
                    </Flex>
                    <Link to={"/menu"}>

                        <SimpleGrid columns={[1, null, 4]} spacing='20px'>
                            <Box bg='rgb(248,247,245)' height='240px'>
                                <Box >
                                    <Image borderRadius={5} src='https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT86.jpg?ver=17.57' alt='CHICKEN BUCKETS' />
                                </Box>
                                <Box>
                                    <Center bg='rgb(248,247,245)' color='black' marginTop={3}>
                                        <Heading as='h4' size='md'>
                                            CHICKEN BUCKETS
                                        </Heading>
                                    </Center>
                                </Box>
                            </Box>
                            <Box bg='rgb(248,247,245)' height='240px'>
                                <Box >
                                    <Image borderRadius={5} src='https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT200.jpg?ver=17.57' alt='CHICKEN BUCKETS' />
                                </Box>
                                <Box>
                                    <Center bg='rgb(248,247,245)' color='black' marginTop={3}>
                                        <Heading as='h4' size='md'>
                                            NEW LAUNCH
                                        </Heading>
                                    </Center>
                                </Box>
                            </Box>
                            <Box bg='rgb(248,247,245)' height='240px'>
                                <Box >
                                    <Image borderRadius={5} src='https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT190.jpg?ver=17.57' alt='CHICKEN BUCKETS' />
                                </Box>
                                <Box>
                                    <Center bg='rgb(248,247,245)' color='black' marginTop={3}>
                                        <Heading as='h4' size='md'>
                                            BIRYANI BUCKETS
                                        </Heading>
                                    </Center>
                                </Box>
                            </Box>
                            <Box bg='rgb(248,247,245)' height='240px'>
                                <Box >
                                    <Image borderRadius={5} src='https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT158.jpg?ver=17.57' alt='CHICKEN BUCKETS' />
                                </Box>
                                <Box>
                                    <Center bg='rgb(248,247,245)' color='black' marginTop={3}>
                                        <Heading as='h4' size='md'>
                                            BOX MEALS
                                        </Heading>
                                    </Center>
                                </Box>
                            </Box>
                            <Box bg='rgb(248,247,245)' height='240px'>
                                <Box >
                                    <Image borderRadius={5} src='https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT99.jpg?ver=17.57' alt='CHICKEN BUCKETS' />
                                </Box>
                                <Box>
                                    <Center bg='rgb(248,247,245)' color='black' marginTop={3}>
                                        <Heading as='h4' size='md'>
                                            BURGERS
                                        </Heading>
                                    </Center>
                                </Box>
                            </Box>
                            <Box bg='rgb(248,247,245)' height='240px'>
                                <Box >
                                    <Image borderRadius={5} src='https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT178.jpg?ver=17.57' alt='CHICKEN BUCKETS' />
                                </Box>
                                <Box>
                                    <Center bg='rgb(248,247,245)' color='black' marginTop={3}>
                                        <Heading as='h4' size='md'>
                                            CHICKEN BUCKETS & BEVERAGES
                                        </Heading>
                                    </Center>
                                </Box>
                            </Box>
                            <Box bg='rgb(248,247,245)' height='240px'>
                                <Box >
                                    <Image borderRadius={5} src='https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT89.jpg?ver=17.57' alt='CHICKEN BUCKETS' />
                                </Box>
                                <Box>
                                    <Center bg='rgb(248,247,245)' color='black' marginTop={3}>
                                        <Heading as='h4' size='md'>
                                            CHICKEN BUCKETS & FRIES
                                        </Heading>
                                    </Center>
                                </Box>
                            </Box>
                            <Box bg='rgb(248,247,245)' height='240px'>
                                <Box >
                                    <Center bg='rgb(248,247,245)' color='black' marginTop={3}>
                                        <Image width="90%" borderRadius={5} src='https://online.kfc.co.in/static/media/finger_lickin.fc21c805.svg' alt='CHICKEN BUCKETS' />
                                    </Center>
                                </Box>
                            </Box>
                        </SimpleGrid>
                    </Link>
                </Box>
            </Box>
        </div>
    )
}

export default BrowseCategories
