import {
    Box,
    Button,
    Divider,
    Heading,
    Image,
    Stack,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

const options = [
    { id: 1, desc: '1 lorem ipsum' },
    { id: 2, desc: 'Lorem, ipsum dolor.' },
    { id: 3, desc: 'Monthly Updates' },
];

const PackageTier = ({
    image,
    title,
    desc,
    price,
    checked = false,
}) => {
    const colorTextLight = checked ? 'white' : 'purple.600';
    const bgColorLight = checked ? 'purple.400' : 'gray.300';

    const colorTextDark = checked ? 'white' : 'purple.500';
    const bgColorDark = checked ? 'purple.400' : 'gray.300';

    return (
        <Stack
            p={3}
            py={3}
            justifyContent={{
                base: 'flex-start',
                md: 'space-around',
            }}
            direction={{
                base: 'column',
                md: 'row',
            }}
            alignItems={{ md: 'center' }}>
            {/* <Heading size={'md'}>{title}</Heading> */}
            <Image width={"150px"} borderRadius={"10px"} src={image} />

            <Box width={"160px"}>
                <Heading size={'xm'}>{title}</Heading>
                {/* <Text size={'xs'}>{desc}</Text> */}
                <Text fontSize='xs'>{desc}</Text>
            </Box>
            <Heading size={'xl'}>₹{price}</Heading>
            <Stack>
                <Button
                    size="md"
                    color={useColorModeValue(colorTextLight, colorTextDark)}
                    bgColor={useColorModeValue(bgColorLight, bgColorDark)}>
                    Delivered
                </Button>
            </Stack>
        </Stack>
    );
};

const Dashboard = () => {
    const userDetail = JSON.parse(localStorage.getItem("KFC-user")) || []
    const [data, setdata] = useState([])
    // console.log(data);
    useEffect(() => {
        axios.get(`https://kfcbackendproject.herokuapp.com/order/${userDetail.user._id}`)
            .then((r) => setdata(r.data))
            .catch((e) => console.log(e))
    }, [])

    // data.forEach((e) => {
    //     console.log(e.updatedAt);
    // })


    return (
        <Box py={6} px={5} min={'100vh'}>
            <Stack spacing={4} width={'100%'} direction={'column'}>
                <Stack
                    p={5}
                    alignItems={'center'}
                    justifyContent={{
                        base: 'flex-start',
                        md: 'space-around',
                    }}
                    direction={{
                        base: 'column',
                        md: 'row',
                    }}>
                    <Stack
                        width={{
                            base: '100%',
                            md: '40%',
                        }}
                        textAlign={'center'}>
                        <Heading size={'lg'}>
                            All order's of  <Text color="purple.400">{userDetail.user.name}</Text>
                        </Heading>
                    </Stack>
                    <Stack
                        width={{
                            base: '100%',
                            md: '60%',
                        }}>
                        <Text textAlign={'center'}>
                            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                            quod in iure vero. Facilis magnam, sed officiis commodi labore
                            odit. */}
                            <Text>{userDetail.user.email}</Text>
                            <Text>{userDetail.user.phone}</Text>
                        </Text>
                    </Stack>
                </Stack>
                <Divider />
                {/* <PackageTier title={'Starter'} typePlan="Free" options={options} />
                <Divider />
                <PackageTier
                    title={'Lorem Plus'}
                    checked={true}
                    typePlan="$32.00"
                    options={options}
                />
                <Divider />
                <PackageTier title={'Lorem Pro'} typePlan="$50.00" options={options} /> */}
                {data?.map((e) =>
                    // console.log(e)
                    <PackageTier image={e.image_url} title={e.title} desc={e.desc} price={e.price} options={options} />
                )}
                <Button
                    size="md"
                // color={useColorModeValue(colorTextLight, colorTextDark)}
                // bgColor={useColorModeValue(bgColorLight, bgColorDark)}
                >
                    Happy to see you!!!
                </Button>
            </Stack>
        </Box>
    );
};

export default Dashboard;