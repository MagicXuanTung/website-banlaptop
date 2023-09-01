import {
  Box,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Grid,
  Heading,
  Image,
  Input,
  Menu,
  MenuButton,
  MenuList,
  Text,
  useDisclosure,
  useMediaQuery,
  VStack,
  MenuItem,
  Button,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { FcSearch } from "react-icons/fc";
import { AiOutlineShopping } from "react-icons/ai";
import { ImLocation2 } from "react-icons/im";
import {
  BiNetworkChart,
  BiNews,
  BiPhone,
  BiPhoneCall,
  BiSearch,
  BiShieldQuarter,
  BiVector,
} from "react-icons/bi";
import { BsFillCartFill } from "react-icons/bs";
import { MdConnectWithoutContact } from "react-icons/md";
import {
  FaArchive,
  FaDesktop,
  FaGamepad,
  FaNewspaper,
  FaPhone,
  FaShareAlt,
  FaShieldAlt,
  FaShoppingCart,
  FaTruck,
  FaUserCircle,
} from "react-icons/fa";
import { GiGamepad, GiHamburgerMenu, GiPhone } from "react-icons/gi";
import { GrLogin, GrReturn, GrServices } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../Redux/Auth/auth.action";
function Navbar() {
  const [isLargerThan1100] = useMediaQuery("(min-width: 1100px)");
  const [isLargerThan750px] = useMediaQuery("(min-width: 750px)");
  const [islesserThan740px] = useMediaQuery("(max-width: 750px)");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const { isAuth } = useSelector((store) => store.AuthManager);
  const { name } = useSelector((store) => store.AuthManager);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
    toast({
      title: "Logout  success.",
      description: "We will miss you 😭",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };
  const handleHeaderImg = () => {
    navigate("/");
  };
  console.log(name);
  if (isLargerThan1100) {
    return (
      <Box>
        <Flex w="100%" h="auto" cursor={"pointer"} onClick={handleHeaderImg}>
          <Image src="Header1.png" alt="logo" w="100%" h="auto" />
        </Flex>

        <Flex
          w="100%"
          h="max"
          justify={"center"}
          alignItems="center"
          m="auto"
          bg="#D94700"
        >
          <Flex w="1200px" h="max" py="7px" m="auto">
            <Flex w="75%" h="max" gap={"10px"} alignItems="center" m="auto">
              <Link to="showrooms">
                {" "}
                <Flex
                  w="max"
                  h="max"
                  alignItems="center"
                  cursor={"pointer"}
                  borderRadius={"25px"}
                  px="11px"
                  py="5px"
                  gap={"5px"}
                  bg="repeating-linear-gradient(to right,#f1d113 0,#fef273 25%,#f1b01f 50%,#fde904 75%,#e5bf23 100%)"
                >
                  <FaShareAlt color="#ff0000" fontSize="11px" />
                  <Heading
                    fontSize={"13px"}
                    fontWeight={"normal"}
                    color={"#ff0000"}
                  >
                    Hệ thống showroom
                  </Heading>
                </Flex>
              </Link>

              <Menu>
                <MenuButton
                  as={Flex}
                  w="max"
                  h="max"
                  alignItems="center"
                  cursor="pointer"
                  borderRadius="25px"
                  px="11px"
                  py="5px"
                  gap="5px"
                  bg="repeating-linear-gradient(to right,#f1d113 0,#fef273 25%,#f1b01f 50%,#fde904 75%,#e5bf23 100%)"
                >
                  <Flex alignItems="center">
                    <FaPhone color="#ff0000" fontSize="10px" />
                    <Heading
                      fontSize="13px"
                      fontWeight="normal"
                      color="#ff0000"
                      ml="2px"
                    >
                      Bán hàng trực tuyến
                    </Heading>
                  </Flex>
                </MenuButton>
                <MenuList>
                  <Link to="#">
                    <MenuItem>
                      Chăm sóc khách hàng: 18006865 | Tư vấn mua hàng: 18006867
                    </MenuItem>
                  </Link>
                </MenuList>
              </Menu>

              <Link to="news">
                <Flex
                  w="max"
                  h="max"
                  alignItems="center"
                  cursor={"pointer"}
                  borderRadius={"25px"}
                  px="11px"
                  py="5px"
                  gap={"5px"}
                  bg="#D94700"
                  _hover={{ bg: "#FF7E00" }}
                >
                  <FaNewspaper color="white" fontSize="14px" />
                  <Heading
                    fontSize={"13px"}
                    fontWeight={"normal"}
                    color="white"
                  >
                    Trang tin công nghệ
                  </Heading>
                </Flex>
              </Link>

              <Link to="warrantycheck">
                <Flex
                  w="max"
                  h="max"
                  alignItems="center"
                  cursor={"pointer"}
                  borderRadius={"25px"}
                  px="11px"
                  py="5px"
                  gap={"5px"}
                  bg="#D94700"
                  _hover={{ bg: "#FF7E00" }}
                >
                  <FaShieldAlt color="white" fontSize="13px" />
                  <Heading
                    fontSize={"13px"}
                    fontWeight={"normal"}
                    color="white"
                  >
                    Tra cứu bảo hành
                  </Heading>
                </Flex>
              </Link>

              <Link to="contactus">
                <Flex
                  w="max"
                  h="max"
                  alignItems="center"
                  cursor={"pointer"}
                  borderRadius={"25px"}
                  px="11px"
                  py="5px"
                  gap={"5px"}
                  bg="#D94700"
                  _hover={{ bg: "#FF7E00" }}
                >
                  <FaGamepad color="white" fontSize="14px" />
                  <Heading
                    fontSize={"13px"}
                    fontWeight={"normal"}
                    color="white"
                  >
                    Giới thiệu
                  </Heading>
                </Flex>
              </Link>

              <Link to="contactus">
                <Flex
                  w="max"
                  h="max"
                  alignItems="center"
                  cursor={"pointer"}
                  borderRadius={"25px"}
                  px="11px"
                  py="5px"
                  gap={"5px"}
                  bg="#D94700"
                  _hover={{ bg: "#FF7E00" }}
                >
                  <FaArchive color="white" fontSize="13px" />
                  <Heading
                    fontSize={"13px"}
                    fontWeight={"normal"}
                    color="white"
                  >
                    Liên hệ
                  </Heading>
                </Flex>
              </Link>
            </Flex>

            <Flex
              w="25%"
              h="max"
              alignItems="center"
              py="5px"
              bg="#D94700"
              justify={"end"}
            >
              {!isAuth ? (
                <Flex gap={"5px"}>
                  <Heading mt="2px">
                    <FaUserCircle color="white" fontSize="14px" />
                  </Heading>

                  <Link to="login">
                    <Heading
                      fontSize={"13px"}
                      fontWeight={"normal"}
                      color="white"
                      _hover={{ color: "#FF7E00" }}
                    >
                      Đăng nhập
                    </Heading>
                  </Link>

                  <Heading
                    fontSize={"13px"}
                    fontWeight={"normal"}
                    color="white"
                  >
                    |&nbsp;&nbsp;
                  </Heading>

                  <Link to="/signup">
                    <Heading
                      fontSize={"13px"}
                      fontWeight={"normal"}
                      color="white"
                      _hover={{ color: "#FF7E00" }}
                    >
                      Đăng ký
                    </Heading>
                  </Link>
                </Flex>
              ) : (
                <Menu>
                  <MenuButton
                    color="black"
                    as={Button}
                    rightIcon={<ChevronDownIcon />}
                  >
                    Hi {name}
                  </MenuButton>
                  <MenuList>
                    <MenuItem>My Profile</MenuItem>
                    <MenuItem>My Order</MenuItem>
                    <MenuItem>My Address</MenuItem>
                    <Link to="whishlist">
                      {" "}
                      <MenuItem>My Wishlist</MenuItem>
                    </Link>
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                  </MenuList>
                </Menu>
              )}
            </Flex>
          </Flex>
        </Flex>

        <Flex
          w="1200px"
          h="max"
          alignItems={"center"}
          py={"12px"}
          m="auto"
          bg="white"
          justify={"space-between"}
        >
          <Link to="/">
            <Box>
              <Image src="DBC-LOGO.png" alt="logo" w="230px" />
            </Box>
          </Link>

          <Flex
            bg="white"
            border={"1px solid #d9d9d9"}
            borderRadius={"23px"}
            w="600px"
            h={"46px"}
            outline={"0"}
          >
            <Input
              w="554px"
              border={"none"}
              fontSize={"13px"}
              px={"20px"}
              variant="unstyled"
              borderRadius="full"
              fontWeight="normal"
              placeholder="Nhập từ khóa cần tìm"
            />
            <Flex
              w="46px"
              h="46px"
              bg={"#FF7E00"}
              border={"1px solid #d9d9d9"}
              rounded={"full"}
              alignItems={"center"}
              justify={"center"}
              cursor={"pointer"}
            >
              <BiSearch color={"white"} fontSize={"27px"} />
            </Flex>
          </Flex>

          <Flex
            w="max"
            h="max"
            cursor={"pointer"}
            alignItems={"center"}
            justify={"center"}
            gap="4px"
            color="black"
            _hover={{ color: "#FF7E00" }}
          >
            <BiPhoneCall color="#FF7E00" fontSize="40px" />
            <Heading fontSize={"11px"} fontWeight={"normal"}>
              Hotline mua hàng
              <br />
              <b>0912.074.444</b>
            </Heading>
          </Flex>

          <Flex
            w="max"
            h="max"
            cursor={"pointer"}
            alignItems={"center"}
            justify={"center"}
            gap="5px"
            color="black"
            _hover={{ color: "#FF7E00" }}
          >
            <FaDesktop color="#FF7E00" fontSize="30px" />
            <Heading fontSize={"11px"} fontWeight={"normal"}>
              Xây dựng
              <br />
              <b>Cấu hình PC</b>
            </Heading>
          </Flex>

          <Link to="/cart">
            <Flex
              w="max"
              h="max"
              cursor={"pointer"}
              alignItems={"center"}
              justify={"center"}
              color="black"
              _hover={{ color: "#FF7E00" }}
            >
              <AiOutlineShopping color="#FF7E00" fontSize="40px" />
              <Heading fontSize={"11px"} fontWeight={"normal"}>
                Giỏ hàng
              </Heading>
            </Flex>
          </Link>
        </Flex>

        {/* <Flex
          w="100%"
          textAlign={"center"}
          justifyContent="space-between"
          alignItems={"center"}
          m="auto"
          bg="blue"
          px="3%"
        >
          <Menu>
            <MenuButton
              px={4}
              py={2}
              color="white"
              transition="all 0.2s"
              _hover={{ bg: "red.600", color: "white" }}
              _expanded={{ bg: "green.600" }}
              _focus={{ boxShadow: "outline" }}
            >
              Mobiles & Tablets <ChevronDownIcon />
            </MenuButton>
            <Link to="mobilesandtablets">
              <MenuList bg="#013380">
                <Grid
                  p="15px"
                  gridTemplateColumns={"repeat(3,1fr)"}
                  gap="25px"
                  justifyContent="space-around"
                  alignContent={"center"}
                  textAlign="center"
                  w="95%"
                  color="white"
                >
                  <Box>
                    <Heading
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                      my="8px"
                      fontSize={"15px"}
                    >
                      Smartphones
                    </Heading>
                  </Box>

                  <Box>
                    <Heading
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                      my="8px"
                      fontSize={"15px"}
                    >
                      Headphones & Headsets
                    </Heading>
                  </Box>

                  <Box>
                    <Heading
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                      my="8px"
                      fontSize={"15px"}
                    >
                      AI Learning Robots
                    </Heading>
                  </Box>

                  <Box>
                    <Heading
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                      my="8px"
                      fontSize={"15px"}
                    >
                      Wearable Technology
                    </Heading>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Top Selling Smartwatches
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Apple Price Drop
                    </Text>
                  </Box>

                  <Box>
                    <Heading
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                      my="8px"
                      fontSize={"15px"}
                    >
                      Tablets & eReaders
                    </Heading>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Every Day use Tablets below 15000
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Premium Tablets, Above 15001
                    </Text>
                  </Box>

                  <Box>
                    <Heading
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                      my="8px"
                      fontSize={"15px"}
                    >
                      Power Banks
                    </Heading>
                  </Box>

                  <Box>
                    <Heading
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                      my="8px"
                      fontSize={"15px"}
                    >
                      Accessories
                    </Heading>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Mobile Accessories
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Tablet Accessories
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Car Mobile Holders
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Memory Cards
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Cables & Cords
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Chargers & Adapters
                    </Text>
                  </Box>
                  <Box>
                    <Heading
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                      my="8px"
                      fontSize={"15px"}
                    >
                      eSlates
                    </Heading>
                  </Box>
                </Grid>
              </MenuList>
            </Link>
          </Menu>

          <Menu>
            <MenuButton
              px={4}
              py={2}
              color="white"
              transition="all 0.2s"
              _hover={{ bg: "red.600", color: "white" }}
              _expanded={{ bg: "green.600" }}
              _focus={{ boxShadow: "outline" }}
            >
              Televisions <ChevronDownIcon />
            </MenuButton>
            <MenuList bg="#013380">
              <Link to="televisions">
                <Grid
                  p="15px"
                  gridTemplateColumns={"repeat(3,1fr)"}
                  gap="10px"
                  justifyContent="space-around"
                  alignContent={"center"}
                  textAlign="center"
                  color="white"
                >
                  <Box>
                    <Heading
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                      my="8px"
                      fontSize={"15px"}
                    >
                      Reconnect Disney | Marvel Audio Collection
                    </Heading>
                  </Box>

                  <Box>
                    <Heading
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                      my="8px"
                      fontSize={"15px"}
                    >
                      Virtual Reality Headsets
                    </Heading>
                  </Box>

                  <Box>
                    <Heading
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                      my="8px"
                      fontSize={"15px"}
                    >
                      Stabilizers & Surge Protectors
                    </Heading>
                  </Box>

                  <Box>
                    <Heading
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                      my="8px"
                      fontSize={"15px"}
                    >
                      Televisions
                    </Heading>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Smart TVs
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      43 Inch TVs
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      55 Inch TVs
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                    >
                      Android TVs
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      32 Inch TVs
                    </Text>
                  </Box>

                  <Box>
                    <Heading
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                      my="8px"
                      fontSize={"15px"}
                    >
                      Gaming
                    </Heading>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Gaming Accessories
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Gaming Consoles
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Gaming Titles
                    </Text>
                  </Box>

                  <Box>
                    <Heading
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                      my="8px"
                      fontSize={"15px"}
                    >
                      Projectors
                    </Heading>
                  </Box>
                  <Box>
                    <Heading
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                      my="8px"
                      fontSize={"15px"}
                    >
                      Streaming Devices
                    </Heading>
                  </Box>
                </Grid>
              </Link>
            </MenuList>
          </Menu>

          <Menu>
            <MenuButton
              px={4}
              py={2}
              color="white"
              transition="all 0.2s"
              _hover={{ bg: "red.600", color: "white" }}
              _expanded={{ bg: "green.600" }}
              _focus={{ boxShadow: "outline" }}
            >
              Audio <ChevronDownIcon />
            </MenuButton>
            <MenuList bg="#013380">
              <Link to="headphones">
                <Grid
                  p="15px"
                  gridTemplateColumns={"repeat(4,1fr)"}
                  gap="20px"
                  justifyContent="space-around"
                  alignContent={"center"}
                  textAlign="center"
                  color="white"
                >
                  <Box>
                    <Heading
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                      my="8px"
                      fontSize={"15px"}
                    >
                      Headphones & Headsets
                    </Heading>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      True Wireless
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Bluetooth Neckbands
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Wired Earphones
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      On Ear Headphones
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Noise Cancelling Headphones
                    </Text>
                  </Box>
                  <Box>
                    <Heading
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                      my="8px"
                      fontSize={"15px"}
                    >
                      Bluetooth & Wifi Speakers
                    </Heading>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Bluetooth Speakers
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Smart Speakers
                    </Text>
                  </Box>
                  <Box>
                    <Heading
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                      my="8px"
                      fontSize={"15px"}
                    >
                      TV Speakers & Soundbars
                    </Heading>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Soundbars
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Home Theatre Systems
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Party speakers
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Multimedia
                    </Text>
                  </Box>
                  <Box>
                    <Heading
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                      my="8px"
                      fontSize={"15px"}
                    >
                      Musical Instruments
                    </Heading>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Guitars and Ukuleles
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Microphones
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Musical Keyboards
                    </Text>
                  </Box>
                </Grid>
              </Link>
            </MenuList>
          </Menu>

          <Menu>
            <MenuButton
              px={4}
              py={2}
              color="white"
              transition="all 0.2s"
              _hover={{ bg: "red.600", color: "white" }}
              _expanded={{ bg: "green.600" }}
              _focus={{ boxShadow: "outline" }}
            >
              Home Appliances <ChevronDownIcon />
            </MenuButton>
            <MenuList bg="#013380">
              <Link to="homeappliances">
                <Grid
                  p="15px"
                  gridTemplateColumns={"repeat(3,1fr)"}
                  gap="20px"
                  justifyContent="space-around"
                  alignContent={"center"}
                  textAlign="center"
                  color="white"
                >
                  <Box>
                    <Heading
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                      my="8px"
                      fontSize={"15px"}
                    >
                      Air Conditioners
                    </Heading>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Split Air Conditioners
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Window Air Conditioners
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Smart Air Conditioners
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Energy Efficient Air Conditioners
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      1 ton Air Conditioners
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      1.5 ton Air Conditioners
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      5 star Air Conditioners
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Air Coolers
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Air Purifiers
                    </Text>
                  </Box>
                  <Box>
                    <Heading
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                      my="8px"
                      fontSize={"15px"}
                    >
                      Washing Machines
                    </Heading>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Fully Automatic Front Load
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Fully Automatic Top Load
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Semi-Automatic Top Load
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Refrigerators
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Single Door
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Double Door
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Side by Side Refrigerators
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Convertible
                    </Text>
                  </Box>
                  <Box>
                    <Heading
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                      my="8px"
                      fontSize={"15px"}
                    >
                      Vacuum Cleaners
                    </Heading>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Robotic Vacuum Cleaners
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Dishwashers
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Geysers
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Room Heaters
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      fans
                    </Text>
                  </Box>
                </Grid>
              </Link>
            </MenuList>
          </Menu>

          <Menu>
            <MenuButton
              px={4}
              py={2}
              color="white"
              transition="all 0.2s"
              _hover={{ bg: "red.600", color: "white" }}
              _expanded={{ bg: "green.600" }}
              _focus={{ boxShadow: "outline" }}
            >
              Computers <ChevronDownIcon />
            </MenuButton>
            <MenuList bg="#013380">
              <Link to="computers">
                <Grid
                  p="15px"
                  gridTemplateColumns={"repeat(4,1fr)"}
                  gap="10px"
                  justifyContent="space-around"
                  alignContent={"center"}
                  textAlign="center"
                  color="white"
                >
                  <Box>
                    <Heading
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                      my="8px"
                      fontSize={"15px"}
                    >
                      Laptops
                    </Heading>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Basic use laptops
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Student Laptops
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Thin and light Laptops
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Multi-Tasking Laptops
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Gaming Laptops
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Content creator Laptops
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Computer Monitors
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Desktops & All-In-Ones
                    </Text>
                  </Box>

                  <Box>
                    <Heading
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                      my="8px"
                      fontSize={"15px"}
                    >
                      Bluetooth & WiFi Speakers
                    </Heading>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Internet Connectivity Devices
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Routers
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      WiFi Range Extenders
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Wireless USB Adapters
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Printers & Inks
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Printers
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Hard Disks & SSD
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Pen Drives & OTG Drives
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Memory Cards
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Pen Drives & OTG Drives
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Data Storage Devices
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Toners & Ink Cartridges
                    </Text>
                  </Box>

                  <Box>
                    <Heading
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                      my="8px"
                      fontSize={"15px"}
                    >
                      Computer Accessories
                    </Heading>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Upto 72% Off, Only on Reliancedigital.in
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Computer Networking Cables
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Laptop Chargers & Adaptor
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Laptop Batteries
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Hubs & Docks
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Mouse Pads
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Laptop Tables & Stands
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Laptop Screen Protectors
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Laptop Cooling Pad
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Laptop Bags & Sleeves
                    </Text>
                  </Box>

                  <Box>
                    <Heading
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                      my="8px"
                      fontSize={"15px"}
                    >
                      Input Devices
                    </Heading>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Keyboards
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Computer Mouse
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Stylus Pens
                    </Text>
                  </Box>
                </Grid>
              </Link>
            </MenuList>
          </Menu>

          <Menu>
            <MenuButton
              px={4}
              py={2}
              color="white"
              transition="all 0.2s"
              _hover={{ bg: "red.600", color: "white" }}
              _expanded={{ bg: "green.600" }}
              _focus={{ boxShadow: "outline" }}
            >
              Cameras <ChevronDownIcon />
            </MenuButton>
            <MenuList bg="#013380">
              <Link to="cameras">
                <Grid
                  p="15px"
                  gridTemplateColumns={"repeat(2,1fr)"}
                  gap="20px"
                  justifyContent="space-around"
                  alignContent={"center"}
                  textAlign="center"
                  color="white"
                >
                  <Box>
                    <Heading
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                      my="8px"
                      fontSize={"15px"}
                    >
                      DSLR Cameras
                    </Heading>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                    >
                      Mirrorless Cameras
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                    >
                      Point & Shoot Cameras
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                    >
                      ProSumer Cameras
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                    >
                      Action Cameras
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Photo Storage Devices
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Pen Drives
                    </Text>
                  </Box>

                  <Box>
                    <Heading
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                      my="8px"
                      fontSize={"15px"}
                    >
                      Binoculars
                    </Heading>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                    >
                      Camera Lens
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                    >
                      Digital Camera Accessories
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                    >
                      Camera Batteries & Chargers
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                    >
                      Camera bags & cases
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Action Camera Accessories
                    </Text>
                  </Box>
                </Grid>
              </Link>
            </MenuList>
          </Menu>

          <Menu>
            <MenuButton
              px={4}
              py={2}
              color="white"
              transition="all 0.2s"
              _hover={{ bg: "red.600", color: "white" }}
              _expanded={{ bg: "green.600" }}
              _focus={{ boxShadow: "outline" }}
            >
              Kitchen Appliances <ChevronDownIcon />
            </MenuButton>
            <MenuList bg="#013380">
              <Link to="kitchen">
                <Grid
                  p="15px"
                  gridTemplateColumns={"repeat(3,1fr)"}
                  gap="20px"
                  justifyContent="space-around"
                  alignContent={"center"}
                  textAlign="center"
                  color="white"
                >
                  <Box>
                    <Heading
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                      my="8px"
                      fontSize={"15px"}
                    >
                      Microwave Ovens
                    </Heading>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                    >
                      Water Purifiers
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                    >
                      Fruits and Vegetable Cleaner
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                    >
                      Oven Toaster Grillers (OTG)
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                    >
                      Cookwares
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Juicer Mixer Grinders
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Juicers
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Hand Mixers
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Mixer Grinders
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Choppers & Slicers
                    </Text>
                  </Box>

                  <Box>
                    <Heading
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                      my="8px"
                      fontSize={"15px"}
                    >
                      Induction Cookers
                    </Heading>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                    >
                      Food Processors
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                    >
                      Blenders
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                    >
                      Kitchen Hobs & Gas Stoves
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                    >
                      Kitchen Chimneys
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Rice Cookers
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Sandwich Makers
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Popup Toasters
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Coffee Makers & Grinders
                    </Text>
                  </Box>

                  <Box>
                    <Heading
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                      my="8px"
                      fontSize={"15px"}
                    >
                      Reconnect Disney|Marvel Kitchen Collection
                    </Heading>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                    >
                      Air Fryers
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                    >
                      Specialty Appliances
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                    >
                      Electric Kettles
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                    >
                      Water Dispensers
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Flour Mills
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Wet Grinders
                    </Text>
                  </Box>
                </Grid>
              </Link>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton
              px={4}
              py={2}
              color="white"
              transition="all 0.2s"
              _hover={{ bg: "red.600", color: "white" }}
              _expanded={{ bg: "green.600" }}
              _focus={{ boxShadow: "outline" }}
            >
              Personal Care <ChevronDownIcon />
            </MenuButton>
            <MenuList bg="#013380">
              <Link to="personalcare">
                <Grid
                  p="15px"
                  gridTemplateColumns={"repeat(2,1fr)"}
                  gap="20px"
                  justifyContent="space-around"
                  alignContent={"center"}
                  textAlign="center"
                  color="white"
                >
                  <Box>
                    <Heading
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                      my="8px"
                      fontSize={"15px"}
                    >
                      Shavers & Trimmers
                    </Heading>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                    >
                      Epilators
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                    >
                      Hair Dryers & Stylers
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                    >
                      Weighing Scales
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                    >
                      Irons
                    </Text>
                  </Box>
                  <Box>
                    <Heading
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                      my="8px"
                      fontSize={"15px"}
                    >
                      Reconnect Disney|Marvel Grooming Collection
                    </Heading>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                    >
                      Hygiene & Personal Care
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                    >
                      Digital Thermometers
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                    >
                      Massagers
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                    >
                      Misc. Care Devices
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                    >
                      Garment Steamers
                    </Text>
                  </Box>
                </Grid>
              </Link>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton
              px={4}
              py={2}
              color="white"
              transition="all 0.2s"
              _hover={{ bg: "red.600", color: "white" }}
              _expanded={{ bg: "green.600" }}
              _focus={{ boxShadow: "outline" }}
            >
              Acessories <ChevronDownIcon />
            </MenuButton>
            <MenuList bg="#013380">
              <Link to="accessories">
                <Grid
                  p="15px"
                  gridTemplateColumns={"repeat(3,1fr)"}
                  gap="20px"
                  justifyContent="space-around"
                  alignContent={"center"}
                  textAlign="center"
                  color="white"
                >
                  <Box>
                    <Heading
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                      my="8px"
                      fontSize={"15px"}
                    >
                      Bags, Cases & Sleeves
                    </Heading>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                    >
                      Smart Devices
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                    >
                      Bluetooth & WiFi Speakers
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                    >
                      Chargers & Adapters
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                    >
                      Cables & Cords
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Power Banks
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Batteries
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Smart Tracking Devices
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Smart Speakers
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Smart Lights
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Smart Sensors
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Smart Cameras
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Smart Plugs
                    </Text>
                  </Box>

                  <Box>
                    <Heading
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                      my="8px"
                      fontSize={"15px"}
                    >
                      Reconnect Disney | Marvel Accessories
                    </Heading>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                    >
                      Webcams
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                    >
                      Surge Protectors
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                    >
                      Mobile Grips & Stands
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                    >
                      Laptop Stands
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Car Mobile Holders
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Selfie Sticks
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Tripods & Monopods
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Air Conditioner Stands
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Mounts & Stands
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Hard Disks & SSD
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Pen Drives & OTG Drives
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Memory Cards
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Data Storage Devices
                    </Text>
                  </Box>

                  <Box>
                    <Heading
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                      my="8px"
                      fontSize={"15px"}
                    >
                      Headphones & Headsets
                    </Heading>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                    >
                      Cleaners & Protectors
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                    >
                      Stabilizers
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                    >
                      Power Strips & Extension Cords
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                    >
                      Screen Guards & Protectors
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Routers
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Tyre Inflators
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Paper Shredders
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Laminators
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Office Electronics
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Computer Mouse
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Keyboards
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Indoor Lighting
                    </Text>
                  </Box>
                </Grid>
              </Link>
            </MenuList>
          </Menu>
        </Flex> */}

        <Flex
          w="100%"
          h="73px"
          textAlign={"center"}
          justifyContent="space-between"
          alignItems={"center"}
          m="auto"
          bg="#FF7E00"
          px="3%"
        >
          <Menu>
            <MenuButton
              px={4}
              py={2}
              color="white"
              transition="all 0.2s"
              _hover={{ bg: "red.600", color: "white" }}
              _expanded={{ bg: "green.600" }}
              _focus={{ boxShadow: "outline" }}
            >
              Mobiles & Tablets <ChevronDownIcon />
            </MenuButton>

            <Link to="mobilesandtablets">
              <MenuList bg="#013380">
                <Grid
                  p="15px"
                  gridTemplateColumns={"repeat(3,1fr)"}
                  gap="25px"
                  justifyContent="space-around"
                  alignContent={"center"}
                  textAlign="center"
                  w="95%"
                  color="white"
                >
                  <Box>
                    <Heading
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                      my="8px"
                      fontSize={"15px"}
                    >
                      Smartphones
                    </Heading>
                  </Box>

                  <Box>
                    <Heading
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                      my="8px"
                      fontSize={"15px"}
                    >
                      Headphones & Headsets
                    </Heading>
                  </Box>

                  <Box>
                    <Heading
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                      my="8px"
                      fontSize={"15px"}
                    >
                      AI Learning Robots
                    </Heading>
                  </Box>

                  <Box>
                    <Heading
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                      my="8px"
                      fontSize={"15px"}
                    >
                      Wearable Technology
                    </Heading>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Top Selling Smartwatches
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Apple Price Drop
                    </Text>
                  </Box>

                  <Box>
                    <Heading
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                      my="8px"
                      fontSize={"15px"}
                    >
                      Tablets & eReaders
                    </Heading>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Every Day use Tablets below 15000
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Premium Tablets, Above 15001
                    </Text>
                  </Box>

                  <Box>
                    <Heading
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                      my="8px"
                      fontSize={"15px"}
                    >
                      Power Banks
                    </Heading>
                  </Box>

                  <Box>
                    <Heading
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                      my="8px"
                      fontSize={"15px"}
                    >
                      Accessories
                    </Heading>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Mobile Accessories
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Tablet Accessories
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Car Mobile Holders
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Memory Cards
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Cables & Cords
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Chargers & Adapters
                    </Text>
                  </Box>
                  <Box>
                    <Heading
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                      my="8px"
                      fontSize={"15px"}
                    >
                      eSlates
                    </Heading>
                  </Box>
                </Grid>
              </MenuList>
            </Link>
          </Menu>

          <Menu>
            <MenuButton
              px={4}
              py={2}
              color="white"
              transition="all 0.2s"
              _hover={{ bg: "red.600", color: "white" }}
              _expanded={{ bg: "green.600" }}
              _focus={{ boxShadow: "outline" }}
            >
              Televisions <ChevronDownIcon />
            </MenuButton>
            <MenuList bg="#013380">
              <Link to="televisions">
                <Grid
                  p="15px"
                  gridTemplateColumns={"repeat(3,1fr)"}
                  gap="10px"
                  justifyContent="space-around"
                  alignContent={"center"}
                  textAlign="center"
                  color="white"
                >
                  <Box>
                    <Heading
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                      my="8px"
                      fontSize={"15px"}
                    >
                      Reconnect Disney | Marvel Audio Collection
                    </Heading>
                  </Box>

                  <Box>
                    <Heading
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                      my="8px"
                      fontSize={"15px"}
                    >
                      Virtual Reality Headsets
                    </Heading>
                  </Box>

                  <Box>
                    <Heading
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                      my="8px"
                      fontSize={"15px"}
                    >
                      Stabilizers & Surge Protectors
                    </Heading>
                  </Box>

                  <Box>
                    <Heading
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                      my="8px"
                      fontSize={"15px"}
                    >
                      Televisions
                    </Heading>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Smart TVs
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      43 Inch TVs
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      55 Inch TVs
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                    >
                      Android TVs
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      32 Inch TVs
                    </Text>
                  </Box>

                  <Box>
                    <Heading
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                      my="8px"
                      fontSize={"15px"}
                    >
                      Gaming
                    </Heading>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Gaming Accessories
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Gaming Consoles
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Gaming Titles
                    </Text>
                  </Box>

                  <Box>
                    <Heading
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                      my="8px"
                      fontSize={"15px"}
                    >
                      Projectors
                    </Heading>
                  </Box>
                  <Box>
                    <Heading
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                      my="8px"
                      fontSize={"15px"}
                    >
                      Streaming Devices
                    </Heading>
                  </Box>
                </Grid>
              </Link>
            </MenuList>
          </Menu>

          <Menu>
            <MenuButton
              px={4}
              py={2}
              color="white"
              transition="all 0.2s"
              _hover={{ bg: "red.600", color: "white" }}
              _expanded={{ bg: "green.600" }}
              _focus={{ boxShadow: "outline" }}
            >
              Audio <ChevronDownIcon />
            </MenuButton>
            <MenuList bg="#013380">
              <Link to="headphones">
                <Grid
                  p="15px"
                  gridTemplateColumns={"repeat(4,1fr)"}
                  gap="20px"
                  justifyContent="space-around"
                  alignContent={"center"}
                  textAlign="center"
                  color="white"
                >
                  <Box>
                    <Heading
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                      my="8px"
                      fontSize={"15px"}
                    >
                      Headphones & Headsets
                    </Heading>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      True Wireless
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Bluetooth Neckbands
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Wired Earphones
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      On Ear Headphones
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Noise Cancelling Headphones
                    </Text>
                  </Box>
                  <Box>
                    <Heading
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                      my="8px"
                      fontSize={"15px"}
                    >
                      Bluetooth & Wifi Speakers
                    </Heading>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Bluetooth Speakers
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Smart Speakers
                    </Text>
                  </Box>
                  <Box>
                    <Heading
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                      my="8px"
                      fontSize={"15px"}
                    >
                      TV Speakers & Soundbars
                    </Heading>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Soundbars
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Home Theatre Systems
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Party speakers
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Multimedia
                    </Text>
                  </Box>
                  <Box>
                    <Heading
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                      my="8px"
                      fontSize={"15px"}
                    >
                      Musical Instruments
                    </Heading>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Guitars and Ukuleles
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Microphones
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Musical Keyboards
                    </Text>
                  </Box>
                </Grid>
              </Link>
            </MenuList>
          </Menu>

          <Menu>
            <MenuButton
              px={4}
              py={2}
              color="white"
              transition="all 0.2s"
              _hover={{ bg: "red.600", color: "white" }}
              _expanded={{ bg: "green.600" }}
              _focus={{ boxShadow: "outline" }}
            >
              Home Appliances <ChevronDownIcon />
            </MenuButton>
            <MenuList bg="#013380">
              <Link to="homeappliances">
                <Grid
                  p="15px"
                  gridTemplateColumns={"repeat(3,1fr)"}
                  gap="20px"
                  justifyContent="space-around"
                  alignContent={"center"}
                  textAlign="center"
                  color="white"
                >
                  <Box>
                    <Heading
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                      my="8px"
                      fontSize={"15px"}
                    >
                      Air Conditioners
                    </Heading>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Split Air Conditioners
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Window Air Conditioners
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Smart Air Conditioners
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Energy Efficient Air Conditioners
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      1 ton Air Conditioners
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      1.5 ton Air Conditioners
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      5 star Air Conditioners
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Air Coolers
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Air Purifiers
                    </Text>
                  </Box>
                  <Box>
                    <Heading
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                      my="8px"
                      fontSize={"15px"}
                    >
                      Washing Machines
                    </Heading>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Fully Automatic Front Load
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Fully Automatic Top Load
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Semi-Automatic Top Load
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Refrigerators
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Single Door
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Double Door
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Side by Side Refrigerators
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Convertible
                    </Text>
                  </Box>
                  <Box>
                    <Heading
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                      my="8px"
                      fontSize={"15px"}
                    >
                      Vacuum Cleaners
                    </Heading>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Robotic Vacuum Cleaners
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Dishwashers
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Geysers
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Room Heaters
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      fans
                    </Text>
                  </Box>
                </Grid>
              </Link>
            </MenuList>
          </Menu>

          <Menu>
            <MenuButton
              px={4}
              py={2}
              color="white"
              transition="all 0.2s"
              _hover={{ bg: "red.600", color: "white" }}
              _expanded={{ bg: "green.600" }}
              _focus={{ boxShadow: "outline" }}
            >
              Computers <ChevronDownIcon />
            </MenuButton>
            <MenuList bg="#013380">
              <Link to="computers">
                <Grid
                  p="15px"
                  gridTemplateColumns={"repeat(4,1fr)"}
                  gap="10px"
                  justifyContent="space-around"
                  alignContent={"center"}
                  textAlign="center"
                  color="white"
                >
                  <Box>
                    <Heading
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                      my="8px"
                      fontSize={"15px"}
                    >
                      Laptops
                    </Heading>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Basic use laptops
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Student Laptops
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Thin and light Laptops
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Multi-Tasking Laptops
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Gaming Laptops
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Content creator Laptops
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Computer Monitors
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Desktops & All-In-Ones
                    </Text>
                  </Box>

                  <Box>
                    <Heading
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                      my="8px"
                      fontSize={"15px"}
                    >
                      Bluetooth & WiFi Speakers
                    </Heading>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Internet Connectivity Devices
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Routers
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      WiFi Range Extenders
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Wireless USB Adapters
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Printers & Inks
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Printers
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Hard Disks & SSD
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Pen Drives & OTG Drives
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Memory Cards
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Pen Drives & OTG Drives
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Data Storage Devices
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Toners & Ink Cartridges
                    </Text>
                  </Box>

                  <Box>
                    <Heading
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                      my="8px"
                      fontSize={"15px"}
                    >
                      Computer Accessories
                    </Heading>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Upto 72% Off, Only on Reliancedigital.in
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Computer Networking Cables
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Laptop Chargers & Adaptor
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Laptop Batteries
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Hubs & Docks
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Mouse Pads
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Laptop Tables & Stands
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Laptop Screen Protectors
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Laptop Cooling Pad
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Laptop Bags & Sleeves
                    </Text>
                  </Box>

                  <Box>
                    <Heading
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                      my="8px"
                      fontSize={"15px"}
                    >
                      Input Devices
                    </Heading>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Keyboards
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Computer Mouse
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Stylus Pens
                    </Text>
                  </Box>
                </Grid>
              </Link>
            </MenuList>
          </Menu>

          <Menu>
            <MenuButton
              px={4}
              py={2}
              color="white"
              transition="all 0.2s"
              _hover={{ bg: "red.600", color: "white" }}
              _expanded={{ bg: "green.600" }}
              _focus={{ boxShadow: "outline" }}
            >
              Cameras <ChevronDownIcon />
            </MenuButton>
            <MenuList bg="#013380">
              <Link to="cameras">
                <Grid
                  p="15px"
                  gridTemplateColumns={"repeat(2,1fr)"}
                  gap="20px"
                  justifyContent="space-around"
                  alignContent={"center"}
                  textAlign="center"
                  color="white"
                >
                  <Box>
                    <Heading
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                      my="8px"
                      fontSize={"15px"}
                    >
                      DSLR Cameras
                    </Heading>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                    >
                      Mirrorless Cameras
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                    >
                      Point & Shoot Cameras
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                    >
                      ProSumer Cameras
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                    >
                      Action Cameras
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Photo Storage Devices
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Pen Drives
                    </Text>
                  </Box>

                  <Box>
                    <Heading
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                      my="8px"
                      fontSize={"15px"}
                    >
                      Binoculars
                    </Heading>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                    >
                      Camera Lens
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                    >
                      Digital Camera Accessories
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                    >
                      Camera Batteries & Chargers
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                    >
                      Camera bags & cases
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Action Camera Accessories
                    </Text>
                  </Box>
                </Grid>
              </Link>
            </MenuList>
          </Menu>

          <Menu>
            <MenuButton
              px={4}
              py={2}
              color="white"
              transition="all 0.2s"
              _hover={{ bg: "red.600", color: "white" }}
              _expanded={{ bg: "green.600" }}
              _focus={{ boxShadow: "outline" }}
            >
              Kitchen Appliances <ChevronDownIcon />
            </MenuButton>
            <MenuList bg="#013380">
              <Link to="kitchen">
                <Grid
                  p="15px"
                  gridTemplateColumns={"repeat(3,1fr)"}
                  gap="20px"
                  justifyContent="space-around"
                  alignContent={"center"}
                  textAlign="center"
                  color="white"
                >
                  <Box>
                    <Heading
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                      my="8px"
                      fontSize={"15px"}
                    >
                      Microwave Ovens
                    </Heading>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                    >
                      Water Purifiers
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                    >
                      Fruits and Vegetable Cleaner
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                    >
                      Oven Toaster Grillers (OTG)
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                    >
                      Cookwares
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Juicer Mixer Grinders
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Juicers
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Hand Mixers
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Mixer Grinders
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Choppers & Slicers
                    </Text>
                  </Box>

                  <Box>
                    <Heading
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                      my="8px"
                      fontSize={"15px"}
                    >
                      Induction Cookers
                    </Heading>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                    >
                      Food Processors
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                    >
                      Blenders
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                    >
                      Kitchen Hobs & Gas Stoves
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                    >
                      Kitchen Chimneys
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Rice Cookers
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Sandwich Makers
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Popup Toasters
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Coffee Makers & Grinders
                    </Text>
                  </Box>

                  <Box>
                    <Heading
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                      my="8px"
                      fontSize={"15px"}
                    >
                      Reconnect Disney|Marvel Kitchen Collection
                    </Heading>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                    >
                      Air Fryers
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                    >
                      Specialty Appliances
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                    >
                      Electric Kettles
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                    >
                      Water Dispensers
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Flour Mills
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Wet Grinders
                    </Text>
                  </Box>
                </Grid>
              </Link>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton
              px={4}
              py={2}
              color="white"
              transition="all 0.2s"
              _hover={{ bg: "red.600", color: "white" }}
              _expanded={{ bg: "green.600" }}
              _focus={{ boxShadow: "outline" }}
            >
              Personal Care <ChevronDownIcon />
            </MenuButton>
            <MenuList bg="#013380">
              <Link to="personalcare">
                <Grid
                  p="15px"
                  gridTemplateColumns={"repeat(2,1fr)"}
                  gap="20px"
                  justifyContent="space-around"
                  alignContent={"center"}
                  textAlign="center"
                  color="white"
                >
                  <Box>
                    <Heading
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                      my="8px"
                      fontSize={"15px"}
                    >
                      Shavers & Trimmers
                    </Heading>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                    >
                      Epilators
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                    >
                      Hair Dryers & Stylers
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                    >
                      Weighing Scales
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                    >
                      Irons
                    </Text>
                  </Box>
                  <Box>
                    <Heading
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                      my="8px"
                      fontSize={"15px"}
                    >
                      Reconnect Disney|Marvel Grooming Collection
                    </Heading>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                    >
                      Hygiene & Personal Care
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                    >
                      Digital Thermometers
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                    >
                      Massagers
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                    >
                      Misc. Care Devices
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                    >
                      Garment Steamers
                    </Text>
                  </Box>
                </Grid>
              </Link>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton
              px={4}
              py={2}
              color="white"
              transition="all 0.2s"
              _hover={{ bg: "red.600", color: "white" }}
              _expanded={{ bg: "green.600" }}
              _focus={{ boxShadow: "outline" }}
            >
              Acessories <ChevronDownIcon />
            </MenuButton>
            <MenuList bg="#013380">
              <Link to="accessories">
                <Grid
                  p="15px"
                  gridTemplateColumns={"repeat(3,1fr)"}
                  gap="20px"
                  justifyContent="space-around"
                  alignContent={"center"}
                  textAlign="center"
                  color="white"
                >
                  <Box>
                    <Heading
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                      my="8px"
                      fontSize={"15px"}
                    >
                      Bags, Cases & Sleeves
                    </Heading>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                    >
                      Smart Devices
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                    >
                      Bluetooth & WiFi Speakers
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                    >
                      Chargers & Adapters
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                    >
                      Cables & Cords
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Power Banks
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Batteries
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Smart Tracking Devices
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Smart Speakers
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Smart Lights
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Smart Sensors
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Smart Cameras
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Smart Plugs
                    </Text>
                  </Box>

                  <Box>
                    <Heading
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                      my="8px"
                      fontSize={"15px"}
                    >
                      Reconnect Disney | Marvel Accessories
                    </Heading>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                    >
                      Webcams
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                    >
                      Surge Protectors
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                    >
                      Mobile Grips & Stands
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                    >
                      Laptop Stands
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Car Mobile Holders
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Selfie Sticks
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Tripods & Monopods
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Air Conditioner Stands
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Mounts & Stands
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Hard Disks & SSD
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Pen Drives & OTG Drives
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Memory Cards
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Data Storage Devices
                    </Text>
                  </Box>

                  <Box>
                    <Heading
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                      my="8px"
                      fontSize={"15px"}
                    >
                      Headphones & Headsets
                    </Heading>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                    >
                      Cleaners & Protectors
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                    >
                      Stabilizers
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                    >
                      Power Strips & Extension Cords
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                    >
                      Screen Guards & Protectors
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Routers
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Tyre Inflators
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Paper Shredders
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Laminators
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Office Electronics
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Computer Mouse
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Keyboards
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Indoor Lighting
                    </Text>
                  </Box>
                </Grid>
              </Link>
            </MenuList>
          </Menu>
        </Flex>
      </Box>
    );
  } else if (isLargerThan750px) {
    return (
      <Flex
        w="100%"
        justifyContent="space-around"
        alignItems={"center"}
        m="auto"
        bg="red"
        p="20px"
        px="2%"
        gap="10px"
      >
        <Link to="/">
          <Box>
            <Image src="RUS DIGITAL.png" alt="logo" w="120px" h="50px" />
          </Box>
        </Link>
        <Flex
          bg="white"
          borderRadius={"20px"}
          w="400px"
          p="5px"
          m="auto"
          textAlign={"center"}
        >
          <Input
            border={"none"}
            fontSize={"15px"}
            borderRadius="full"
            fontWeight="bold"
            placeholder="Find Your Favorite Product"
          />
          <FcSearch fontSize={"42px"} />
        </Flex>
        <Link to="/cart">
          <Flex cursor={"pointer"}>
            <BsFillCartFill color="white" fontSize="20px" />
            <Heading
              cursor={"pointer"}
              fontSize={"17px"}
              color="white"
              _hover={{ bg: "red", textDecoration: "underline" }}
            >
              Cart
            </Heading>
          </Flex>
        </Link>
        {!isAuth ? (
          <Flex cursor={"pointer"}>
            <GrLogin color="white" fontSize="20px" />
            <Link to="login">
              <Heading
                cursor={"pointer"}
                fontSize={"17px"}
                color="white"
                _hover={{ bg: "red", textDecoration: "underline" }}
              >
                Login
              </Heading>
            </Link>
          </Flex>
        ) : (
          <Menu>
            <MenuButton
              color="black"
              as={Button}
              rightIcon={<ChevronDownIcon />}
            >
              Hi {name}
            </MenuButton>
            <MenuList>
              <MenuItem>My Profile</MenuItem>
              <MenuItem>My Order</MenuItem>
              <MenuItem>My Address</MenuItem>
              <Link to="whishlist">
                {" "}
                <MenuItem>My Wishlist</MenuItem>
              </Link>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </MenuList>
          </Menu>
        )}
        <Box mx="20px">
          <Box ref={btnRef} colorScheme="teal" onClick={onOpen}>
            <GiHamburgerMenu fontSize={"55px"} />
          </Box>
          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent bg="teal.300">
              <DrawerCloseButton />
              <DrawerHeader fontSize={"22px"} fontWeight="bold">
                Select Product Category
              </DrawerHeader>

              <DrawerBody>
                <VStack
                  justifyContent={"space-around"}
                  alignContent="center"
                  gap="25px"
                  m="auto"
                  p="auto"
                >
                  <Link to="mobilesandtablets">
                    <Heading
                      cursor={"pointer"}
                      fontSize={"17px"}
                      color="white"
                      _hover={{ bg: "red", textDecoration: "underline" }}
                    >
                      MOBILES & TABLETS
                    </Heading>
                  </Link>
                  <Link to="televisions">
                    <Heading
                      cursor={"pointer"}
                      fontSize={"17px"}
                      color="white"
                      _hover={{ bg: "red", textDecoration: "underline" }}
                    >
                      TELEVISIONS
                    </Heading>
                  </Link>
                  <Link to="homeappliances">
                    <Heading
                      cursor={"pointer"}
                      fontSize={"17px"}
                      color="white"
                      _hover={{ bg: "red", textDecoration: "underline" }}
                    >
                      HOME APPLIANCES
                    </Heading>
                  </Link>
                  <Link to="computers">
                    <Heading
                      cursor={"pointer"}
                      fontSize={"17px"}
                      color="white"
                      _hover={{ bg: "red", textDecoration: "underline" }}
                    >
                      COMPUTERS
                    </Heading>
                  </Link>
                  <Link to="kitchen">
                    <Heading
                      cursor={"pointer"}
                      fontSize={"17px"}
                      color="white"
                      _hover={{ bg: "red", textDecoration: "underline" }}
                    >
                      KITCHEN APPLIANCES
                    </Heading>
                  </Link>
                  <Link to="personalcare">
                    <Heading
                      cursor={"pointer"}
                      fontSize={"17px"}
                      color="white"
                      _hover={{ bg: "red", textDecoration: "underline" }}
                    >
                      PERSONAL CARE
                    </Heading>
                  </Link>
                  <Link to="accessories">
                    <Heading
                      cursor={"pointer"}
                      fontSize={"17px"}
                      color="white"
                      _hover={{ bg: "red", textDecoration: "underline" }}
                    >
                      ACCESSORIES
                    </Heading>
                  </Link>
                  <Link to="headphones">
                    <Heading
                      cursor={"pointer"}
                      fontSize={"17px"}
                      color="white"
                      _hover={{ bg: "red", textDecoration: "underline" }}
                    >
                      AUDIO
                    </Heading>
                  </Link>
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Box>
      </Flex>
    );
  } else if (islesserThan740px) {
    return (
      <Flex
        w="100%"
        justifyContent="space-around"
        alignItems={"center"}
        m="auto"
        bg="red"
        p="20px"
        px="2%"
        gap="10px"
      >
        <Link to="/">
          <Box>
            <Image src="RUS DIGITAL.png" alt="logo" w="120px" h="50px" />
          </Box>
        </Link>
        <Flex
          bg="white"
          borderRadius={"20px"}
          w="400px"
          p="5px"
          m="auto"
          textAlign={"center"}
        >
          <Input
            border={"none"}
            fontSize={"15px"}
            borderRadius="full"
            fontWeight="bold"
            placeholder="Find Your Favorite Product"
          />
          <FcSearch fontSize={"42px"} />
        </Flex>
        <Box mx="20px">
          <Box ref={btnRef} colorScheme="teal" onClick={onOpen}>
            <GiHamburgerMenu fontSize={"55px"} />
          </Box>
          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent bg="red.300">
              <DrawerCloseButton />

              <DrawerBody>
                <VStack
                  justifyContent={"space-around"}
                  alignContent="center"
                  gap="25px"
                  m="auto"
                  p="auto"
                >
                  {isAuth ? (
                    <Link to="profile">
                      <Heading
                        cursor={"pointer"}
                        fontSize={"24px"}
                        _hover={{ bg: "red", textDecoration: "underline" }}
                        fontWeight="bold"
                        color="black"
                        mt="35px"
                      >
                        Hi {name}
                      </Heading>
                    </Link>
                  ) : (
                    <Link to="profile">
                      <Heading
                        cursor={"pointer"}
                        fontSize={"24px"}
                        _hover={{ bg: "red", textDecoration: "underline" }}
                        fontWeight="bold"
                        color="black"
                        mt="35px"
                      >
                        Profile
                      </Heading>
                    </Link>
                  )}

                  {!isAuth ? (
                    <Link to="/login">
                      <Heading
                        cursor={"pointer"}
                        fontSize={"24px"}
                        _hover={{ bg: "red", textDecoration: "underline" }}
                        fontWeight="bold"
                        color="black"
                      >
                        Login
                      </Heading>
                    </Link>
                  ) : (
                    <Link to="/login">
                      <Heading
                        cursor={"pointer"}
                        fontSize={"24px"}
                        _hover={{ bg: "red", textDecoration: "underline" }}
                        fontWeight="bold"
                        color="black"
                        onClick={handleLogout}
                      >
                        Logout
                      </Heading>
                    </Link>
                  )}

                  <Link to="/cart">
                    <Heading
                      cursor={"pointer"}
                      fontSize={"24px"}
                      _hover={{ bg: "red", textDecoration: "underline" }}
                      fontWeight="bold"
                      color="black"
                    >
                      Cart
                    </Heading>
                  </Link>

                  <DrawerHeader fontSize={"22px"} fontWeight="bold">
                    <Divider color={"black"} />
                    Product Category
                    <Divider color={"black"} />
                  </DrawerHeader>

                  <Link to="mobilesandtablets">
                    <Heading
                      cursor={"pointer"}
                      fontSize={"17px"}
                      color="white"
                      _hover={{ bg: "red", textDecoration: "underline" }}
                    >
                      MOBILES & TABLETS
                    </Heading>
                  </Link>
                  <Link to="televisions">
                    <Heading
                      cursor={"pointer"}
                      fontSize={"17px"}
                      color="white"
                      _hover={{ bg: "red", textDecoration: "underline" }}
                    >
                      TELEVISIONS
                    </Heading>
                  </Link>
                  <Link to="homeappliances">
                    <Heading
                      cursor={"pointer"}
                      fontSize={"17px"}
                      color="white"
                      _hover={{ bg: "red", textDecoration: "underline" }}
                    >
                      HOME APPLIANCES
                    </Heading>
                  </Link>
                  <Link to="headphones">
                    <Heading
                      cursor={"pointer"}
                      fontSize={"17px"}
                      color="white"
                      _hover={{ bg: "red", textDecoration: "underline" }}
                    >
                      AUDIO
                    </Heading>
                  </Link>
                  <Link to="computers">
                    <Heading
                      cursor={"pointer"}
                      fontSize={"17px"}
                      color="white"
                      _hover={{ bg: "red", textDecoration: "underline" }}
                    >
                      COMPUTERS
                    </Heading>
                  </Link>
                  <Link to="kitchen">
                    <Heading
                      cursor={"pointer"}
                      fontSize={"17px"}
                      color="white"
                      _hover={{ bg: "red", textDecoration: "underline" }}
                    >
                      KITCHEN APPLIANCES
                    </Heading>
                  </Link>
                  <Link to="personalcare">
                    <Heading
                      cursor={"pointer"}
                      fontSize={"17px"}
                      color="white"
                      _hover={{ bg: "red", textDecoration: "underline" }}
                    >
                      PERSONAL CARE
                    </Heading>
                  </Link>
                  <Link to="accessories">
                    <Heading
                      cursor={"pointer"}
                      fontSize={"17px"}
                      color="white"
                      _hover={{ bg: "red", textDecoration: "underline" }}
                    >
                      ACCESSORIES
                    </Heading>
                  </Link>
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Box>
      </Flex>
    );
  }
}

export default Navbar;
