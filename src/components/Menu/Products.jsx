import { Box, Button, Divider, Heading, Image, Input, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react';
import { CgShoppingBag } from "react-icons/cg"
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchProductData, postCartData } from '../../redux/product/action';


const Products = () => {
    const loading = useSelector(store => store.productData.loading);
    const products = useSelector(store => store.productData.product);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let userData = JSON.parse(localStorage.getItem("KFC-user")) || [];
    // console.log(userData);
    if (userData.length === 0) {
        navigate("/login")
    }
    useEffect(() => {
        if (products?.length === 0) {
            (fetchProductData(dispatch))
        }
    }, [dispatch, products?.length]);
    // console.log(products);

    const cartHandle = (e) => {
        // console.log(e);
        if (userData.length === 0) {
            alert("Please login to add item in the cart")
            navigate("/login")
        } else {
            postCartData(dispatch, e);

        }
    }

    return (
        <div>
            {loading && <Box>
                loading.....
            </Box>}
            <Box bg="rgb(248,247,245)" w='100%' p={4} color='white'>
                {/* This is the Box */}
                <Input placeholder='Search our menu' color="black" size='sm' width="250px" borderRadius="20px" />
            </Box>
            <Divider />
            <Box bg="rgb(248,247,245)" w='100%' p={7} color='white'>
                <Box>
                    <Heading color={"black"} as='h1' size='md' marginLeft={8} fontFamily={"National 2 Condensed"} fontStyle={"normal"} fontWeight={"700"} fontSize={"25px"} lineHeight={"43px"} textTransform={"uppercase"} paddingBottom={"1vw"}>
                        CHIKEN BUCKETS
                    </Heading>
                    <SimpleGrid columns={[1, null, 2]} spacing='40px'>

                        {products?.map((e) => (
                            e?.CHICKENBUCKETS.map((a) => {
                                return (

                                    <Box  >
                                        <Box  ><Image borderRadius={"10px"} src={a.image_url}></Image></Box>
                                        <Box marginTop={3} >
                                            <Heading color={"black"} as='h5' size='sm' fontFamily={"National 2 Regular"} fontStyle={"normal"} fontWeight={"600"} fontSize={"16px"} lineHeight={"43px"}  >
                                                {a.title}
                                            </Heading>
                                        </Box>
                                        <Box display={"flex"} color={"black"}>
                                            <img src="https://online.kfc.co.in/static/media/Non_veg_dot_Icon.d975d1f9.svg" alt="*" />
                                            <Text marginLeft={"5px"} fontSize='xs'>Non veg -Serves 2-3</Text>
                                        </Box>
                                        <Box display={"flex"} marginTop={3}>
                                            <Text color={"black"} as='s' marginRight={"5px"}> ₹{a.price} </Text>
                                            <Text color={"red"} > ₹{a.price - 43}  </Text>
                                        </Box>
                                        <Box marginTop={3}>
                                            <Text fontSize='sm' color={"black"}> {a.desc}</Text>
                                        </Box>

                                        <Button bg={"rgb(228,0,43)"} textAlign={"center"} marginLeft={"100px"} marginTop={"20px"} borderRadius="20px" onClick={() => cartHandle(a)} >
                                            <Text fontSize='sm' w={"150px"} display="flex" gap={3} > ADD TO CART < CgShoppingBag size={20} /></Text>
                                        </Button>
                                    </Box>
                                )

                            })
                        ))}


                    </SimpleGrid>
                </Box>
                <Box>
                    <Heading color={"black"} as='h1' size='md' marginLeft={8} fontFamily={"National 2 Condensed"} fontStyle={"normal"} fontWeight={"700"} fontSize={"25px"} lineHeight={"43px"} textTransform={"uppercase"} paddingBottom={"1vw"}>
                        NEW LAUNCH
                    </Heading>
                    <SimpleGrid columns={[1, null, 2]} spacing='40px'>

                        {products?.map((e) => (
                            e?.NEWLAUNCH.map((a) => {
                                return (
                                    <Box  >
                                        <Box  ><Image borderRadius={"10px"} src={a.image_url}></Image></Box>
                                        <Box marginTop={3} >
                                            <Heading color={"black"} as='h5' size='sm' fontFamily={"National 2 Regular"} fontStyle={"normal"} fontWeight={"600"} fontSize={"16px"} lineHeight={"43px"}  >
                                                {a.title}
                                            </Heading>
                                        </Box>
                                        <Box display={"flex"} color={"black"}>
                                            <img src="https://online.kfc.co.in/static/media/Non_veg_dot_Icon.d975d1f9.svg" alt="*" />
                                            <Text marginLeft={"5px"} fontSize='xs'>Non veg -Serves 2-3</Text>
                                        </Box>
                                        <Box display={"flex"} marginTop={3}>
                                            <Text color={"black"} as='s' marginRight={"5px"}> ₹{a.price} </Text>
                                            <Text color={"red"} > ₹{a.price - 43}  </Text>
                                        </Box>
                                        <Box marginTop={3}>
                                            <Text fontSize='sm' color={"black"}> {a.desc}</Text>
                                        </Box>

                                        <Button bg={"rgb(228,0,43)"} textAlign={"center"} marginLeft={"100px"} marginTop={"20px"} borderRadius="20px" onClick={() => cartHandle(a)} >
                                            <Text fontSize='sm' w={"150px"} display="flex" gap={3} > ADD TO CART < CgShoppingBag size={20} /></Text>
                                        </Button>
                                    </Box>
                                )

                            })
                        ))}

                    </SimpleGrid>
                </Box>
                <Box>
                    <Heading color={"black"} as='h1' size='md' marginLeft={8} fontFamily={"National 2 Condensed"} fontStyle={"normal"} fontWeight={"700"} fontSize={"25px"} lineHeight={"43px"} textTransform={"uppercase"} paddingBottom={"1vw"}>
                        BIRYANI BUCKETS
                    </Heading>
                    <SimpleGrid columns={[1, null, 2]} spacing='40px'>
                        {products?.map((e) => (
                            e?.BIRYANIBUCKETS.map((a) => {
                                return (
                                    <Box  >
                                        <Box  ><Image borderRadius={"10px"} src={a.image_url}></Image></Box>
                                        <Box marginTop={3} >
                                            <Heading color={"black"} as='h5' size='sm' fontFamily={"National 2 Regular"} fontStyle={"normal"} fontWeight={"600"} fontSize={"16px"} lineHeight={"43px"}  >
                                                {a.title}
                                            </Heading>
                                        </Box>
                                        <Box display={"flex"} color={"black"}>
                                            <img src="https://online.kfc.co.in/static/media/Non_veg_dot_Icon.d975d1f9.svg" alt="*" />
                                            <Text marginLeft={"5px"} fontSize='xs'>Non veg -Serves 2-3</Text>
                                        </Box>
                                        <Box display={"flex"} marginTop={3}>
                                            <Text color={"black"} as='s' marginRight={"5px"}> ₹{a.price} </Text>
                                            <Text color={"red"} > ₹{a.price - 43}  </Text>
                                        </Box>
                                        <Box marginTop={3}>
                                            <Text fontSize='sm' color={"black"}> {a.desc}</Text>
                                        </Box>

                                        <Button bg={"rgb(228,0,43)"} textAlign={"center"} marginLeft={"100px"} marginTop={"20px"} borderRadius="20px" onClick={() => cartHandle(a)} >
                                            <Text fontSize='sm' w={"150px"} display="flex" gap={3} > ADD TO CART < CgShoppingBag size={20} /></Text>
                                        </Button>
                                    </Box>
                                )

                            })
                        ))}
                    </SimpleGrid>
                </Box>
                <Box>
                    <Heading color={"black"} as='h1' size='md' marginLeft={8} fontFamily={"National 2 Condensed"} fontStyle={"normal"} fontWeight={"700"} fontSize={"25px"} lineHeight={"43px"} textTransform={"uppercase"} paddingBottom={"1vw"}>
                        BOX MEALS
                    </Heading>
                    <SimpleGrid columns={[1, null, 2]} spacing='40px'>
                        {products?.map((e) => (
                            e?.BOXMEALS.map((a) => {
                                return (
                                    <Box  >
                                        <Box  ><Image borderRadius={"10px"} src={a.image_url}></Image></Box>
                                        <Box marginTop={3} >
                                            <Heading color={"black"} as='h5' size='sm' fontFamily={"National 2 Regular"} fontStyle={"normal"} fontWeight={"600"} fontSize={"16px"} lineHeight={"43px"}  >
                                                {a.title}
                                            </Heading>
                                        </Box>
                                        <Box display={"flex"} color={"black"}>
                                            <img src="https://online.kfc.co.in/static/media/Non_veg_dot_Icon.d975d1f9.svg" alt="*" />
                                            <Text marginLeft={"5px"} fontSize='xs'>Non veg -Serves 2-3</Text>
                                        </Box>
                                        <Box display={"flex"} marginTop={3}>
                                            <Text color={"black"} as='s' marginRight={"5px"}> ₹{a.price} </Text>
                                            <Text color={"red"} > ₹{a.price - 43}  </Text>
                                        </Box>
                                        <Box marginTop={3}>
                                            <Text fontSize='sm' color={"black"}> {a.desc}</Text>
                                        </Box>

                                        <Button bg={"rgb(228,0,43)"} textAlign={"center"} marginLeft={"100px"} marginTop={"20px"} borderRadius="20px" onClick={() => cartHandle(a)} >
                                            <Text fontSize='sm' w={"150px"} display="flex" gap={3} > ADD TO CART < CgShoppingBag size={20} /></Text>
                                        </Button>
                                    </Box>
                                )

                            })
                        ))}
                    </SimpleGrid>
                </Box>
                <Box>
                    <Heading color={"black"} as='h1' size='md' marginLeft={8} fontFamily={"National 2 Condensed"} fontStyle={"normal"} fontWeight={"700"} fontSize={"25px"} lineHeight={"43px"} textTransform={"uppercase"} paddingBottom={"1vw"}>
                        CHIKEN BUCKETS
                    </Heading>
                    <SimpleGrid columns={[1, null, 2]} spacing='40px'>
                        {products?.map((e) => (
                            e?.CHICKENBUCKETS.map((a) => {
                                return (
                                    <Box  >
                                        <Box  ><Image borderRadius={"10px"} src={a.image_url}></Image></Box>
                                        <Box marginTop={3} >
                                            <Heading color={"black"} as='h5' size='sm' fontFamily={"National 2 Regular"} fontStyle={"normal"} fontWeight={"600"} fontSize={"16px"} lineHeight={"43px"}  >
                                                {a.title}
                                            </Heading>
                                        </Box>
                                        <Box display={"flex"} color={"black"}>
                                            <img src="https://online.kfc.co.in/static/media/Non_veg_dot_Icon.d975d1f9.svg" alt="*" />
                                            <Text marginLeft={"5px"} fontSize='xs'>Non veg -Serves 2-3</Text>
                                        </Box>
                                        <Box display={"flex"} marginTop={3}>
                                            <Text color={"black"} as='s' marginRight={"5px"}> ₹{a.price} </Text>
                                            <Text color={"red"} > ₹{a.price - 43}  </Text>
                                        </Box>
                                        <Box marginTop={3}>
                                            <Text fontSize='sm' color={"black"}> {a.desc}</Text>
                                        </Box>

                                        <Button bg={"rgb(228,0,43)"} textAlign={"center"} marginLeft={"100px"} marginTop={"20px"} borderRadius="20px" onClick={() => cartHandle(a)} >
                                            <Text fontSize='sm' w={"150px"} display="flex" gap={3} > ADD TO CART < CgShoppingBag size={20} /></Text>
                                        </Button>
                                    </Box>
                                )

                            })
                        ))}
                    </SimpleGrid>
                </Box>
            </Box>

        </div>
    )
}

export default Products
