import {
    Box,
    Flex,
    Text,
    IconButton,
    // Button,
    Stack,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    Divider,
    Image,
    Heading,
    Button,
} from '@chakra-ui/react';
import {
    HamburgerIcon,
    CloseIcon,
} from '@chakra-ui/icons';


import { BsPersonCircle } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
export default function Navbar() {
    const { isOpen, onToggle } = useDisclosure();
    const userName = JSON.parse(localStorage.getItem("KFC-user")) || [];
    const ketData = useSelector(store => store.productData.cart);
    // console.log("navbar", ketData);
    let name
    if (userName.length == 0) {
        name = "user"
    } else {
        // console.log("ketan", userName);
        name = userName.user.name
    }
    // console.log(name);

    const cartData = useSelector(store => store.productData.cart);
    // console.log(cartData);
    let sum = 0;
    cartData?.forEach(element => {
        sum += (element.price);
    });

    const Logout = () => {
        localStorage.removeItem("KFC-user")
        window.location.reload()
    }

    return (
        <Box bg={"white"} >
            <Flex
                color={useColorModeValue('gray.600', 'white')}
                minH={'100px'}
                py={{ base: 2 }}
                px={{ base: 4 }}
                borderBottom={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.900')}
                align={'center'}>
                <Flex

                    flex={{ base: 1, md: 'auto' }}
                    ml={{ base: -2 }}
                    display={{ base: 'flex', md: 'none' }}>
                    <IconButton
                        onClick={onToggle}
                        icon={
                            isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
                        }
                        variant={'ghost'}
                        aria-label={'Toggle Navigation'}
                    />
                </Flex>

                <Flex justify={{ base: 'center', md: 'start' }} width="75%" minH={'50px'} p={5}>
                    <Text
                        marginLeft={110}

                        textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                        fontFamily={'heading'}
                        color={useColorModeValue('gray.800', 'white')}>
                        <Link to={"/"}>
                            <img src="https://online.kfc.co.in/static/media/kfcLogo.492728c6.svg" alt='kfc' />
                        </Link>
                    </Text>
                    <Text display={{ base: 'none', md: 'flex' }} marginLeft={50} >

                        <Heading as='h3' size='xs' color="black" cursor={"pointer"} href={'/menu'}>
                            <Link to={"/menu"}>Menu</Link>
                        </Heading>
                    </Text>
                    <Text display={{ base: 'none', md: 'flex' }} marginLeft={30}>

                        <Heading as='h3' size='xs' color="black" cursor={"pointer"}>
                            <Link to={"/deals"}>Deals</Link>
                        </Heading>
                    </Text>

                </Flex>
                <Stack
                    flex={{ base: 1, md: 0 }}
                    justify={'flex-end'}
                    direction={'row'}
                    spacing={6}
                    width="300px">
                    <Box display={"flex"} gap={3} marginTop={4}>
                        <Heading as='h5' size='sm' w={"60px"} color="black" noOfLines={2}>
                            {userName.length == 0 ?
                                <div></div> :
                                <div>{userName.user.name}</div>}
                        </Heading>
                        <Link to={"/dashboard"}>
                            <BsPersonCircle color='black' size={25} />
                        </Link>
                        <Heading as='h5' size='sm' w={"60px"} color="black" cursor={"pointer"}>
                            {userName.length == 0 ?
                                <Link to={"/login"}>Sign In</Link> :
                                <Heading as='h5' size='sm' w={"60px"} color="black" onClick={Logout}>Logout</Heading>}
                        </Heading>
                        <Divider orientation='vertical' />
                    </Box>

                    <Link to={"/addtocart"}>
                        <Box display={{ base: 'none', md: 'inline-flex' }} width="50px">
                            <Heading as='h6' size='xs' marginTop={4} color="black">
                                ₹{sum.toFixed(2)}
                            </Heading>
                            <Image href={'/signin'} cursor={"pointer"} src={"https://images.ctfassets.net/wtodlh47qxpt/6qtBVFuno7pdwOQ9RIvYm9/d13e9b7242980972cf49beddde2cc295/bucket_cart_icon.svg"} />
                        </Box>
                    </Link>

                </Stack>
            </Flex>
        </Box>
    );
}



