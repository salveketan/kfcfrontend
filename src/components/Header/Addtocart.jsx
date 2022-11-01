import { Box, Button, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCartdata } from '../../redux/product/action'
import { CgShoppingBag } from "react-icons/cg"

import ModalButton3 from '../Body/ModalButton3';

const AddToCart = () => {
  const cartData = useSelector(store => store.productData.cart);
  // console.log(cartData);
  let totalItem = 0;
  cartData?.forEach((element, index) => {
    totalItem = (index + 1);
  });

  let sum = 0
  cartData?.forEach(element => {
    sum += (element.price);
  });

  const dispatch = useDispatch();
  useEffect(() => {
    fetchCartdata(dispatch)
  }, [])


  let deleteItem = async (id) => {
    // console.log(id)
    await fetch(`https://kfcbackendketan.herokuapp.com/cart/${id}`, {
      method: "DELETE",
    })
    fetchCartdata(dispatch)
    alert("Item is remove from cart")
  }

  return (
    <div>
      <Box w='100%' p={4} bg='rgb(248,247,245)'  >
        <Box w='60%' gap="5px" margin="auto">
          <Heading color={"black"} as='h6' size='lg' fontStyle={"italic"} fontFamily={"sans-serif"}>
            Total No. of item in cart : {totalItem}
          </Heading>
          <Heading color={"black"} as='h6' size='lg' fontStyle={"italic"} fontFamily={"sans-serif"}>
            total : ₹{sum.toFixed(2)}
          </Heading>
          <Heading as='h6' size='lg'>
            <ModalButton3 totalItem={totalItem} />
          </Heading>
        </Box>
        <Box bg={"rgb(232,232,227)"} w='60%' p={4} color='white' margin="auto" marginTop={5} borderRadius={5}>

          <SimpleGrid columns={[1, null, 2]} spacing='40px'>
            {
              cartData?.map((e) =>
                // console.log(e);
                <Box  >
                  <Box ><Image borderRadius={"10px"} src={e.image_url}></Image></Box>
                  <Box >
                    <Heading color={"black"} as='h5' size='sm' fontFamily={"National 2 Regular"} fontStyle={"normal"} fontWeight={"600"} fontSize={"16px"} lineHeight={"43px"}  >
                      {e.title}
                    </Heading>
                  </Box>
                  <Box display={"flex"} color={"black"}>
                    <img src="https://online.kfc.co.in/static/media/Non_veg_dot_Icon.d975d1f9.svg" alt="*" />
                    <Text marginLeft={"5px"} fontSize='xs'>Non veg -Serves 2-3</Text>
                  </Box>
                  <Box display={"flex"}>
                    <Text color={"black"} as='s' marginRight={"5px"}> ₹{e.price}</Text>
                    <Text color={"red"} > ₹{e.price - 43}  </Text>
                  </Box>
                  <Box >
                    <Text fontSize='sm' color={"black"}>{e.desc}</Text>
                  </Box>
                  <Button bg={"rgb(228,0,43)"} textAlign={"center"} marginLeft={"100px"} marginTop={"20px"} onClick={() => deleteItem(e._id)} >
                    <Text fontSize='sm' w={"150px"} display="flex" gap={3} > Remove < CgShoppingBag size={20} /></Text>
                  </Button>
                </Box>
              )
            }
          </SimpleGrid>



        </Box>

      </Box>
    </div>
  )
}

export default AddToCart
