import React from 'react'
import { Box, Center, Button, HStack, Heading } from '@chakra-ui/react'
import BrowseCategories from './BrowseCategories'
// import Carousal from './Carousal'
import Footer from './Footer'
import Carousel from './Carousal'
import { Link } from 'react-router-dom'
const LandingPage = () => {
    return (
        <div>
            <Box bg='rgb(32,33,36)' w='100%' p={4} color='white'>
                <Center gap={5}>
                    <Heading as='h4' size='xs'>
                        LET'S ORDER FOE DELIVERY, PICK UP, OR DINE-IN
                    </Heading>
                    <Link to={"/menu"}>
                        <Button background={"rgb(228,0,43)"} borderRadius={20}>Start Order</Button>
                    </Link>
                </Center>
            </Box>
            <Box bg='rgb(248,247,245)' w='100%' color='white'>
                <HStack spacing='8px' marginLeft="250px">
                    <Box w='10px' bg='rgb(228,0,43)' color="rgb(228,0,43)">
                        1
                    </Box>
                    <Box w='10px' bg='rgb(228,0,43)' color="rgb(228,0,43)">
                        2
                    </Box>
                    <Box w='10px' bg='rgb(228,0,43)' color="rgb(228,0,43)">
                        3
                    </Box>
                </HStack>
            </Box>
            <Box bg='rgb(248,247,245)' w='100%' p={4} color='black'>
                <Heading noOfLines={1} marginLeft="230px">
                    WELOCME TO KFC!
                </Heading>
            </Box>
            <BrowseCategories />
            <Carousel />
            <Footer />
        </div>
    )
}

export default LandingPage


