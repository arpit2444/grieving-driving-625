import React, { useState } from "react";

import {
  Box,
  Button,
  FormControl,
  FormLabel,
  GridItem,
  Heading,
  HStack,
  Input,
  Select,
  SimpleGrid,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Textarea,
  useToast,
  VStack,
} from "@chakra-ui/react";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

import Confetti from "./OrderSuccessCelebration";



const CheckoutYourDetails = () => {
  const toast = useToast();

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
const [userDetails,setUserDetails]=useState(false)
  const [cardNumber, setCardNumber] = useState(0);
  const [cvv, setCVV] = useState(0);
  const [expiry, setExpiry] = useState(0);


// function to submit the address details with if else conditions
  function DetailsSubmitButton() {
    const id = "test-toast";
    if (name && address && city) {
      return (
        <Button
          colorScheme="red"
          mt={4}
          onClick={() => {
            setUserDetails(true)

            if (!toast.isActive(id)) {
              toast({
                id,
                title: "Shipping Details Saved",
                description: "We've saved your shipping details",
                status: "info",
                duration: 2000,
                isClosable: true,
                position: "top",
              });
            }
          }}
        >
          Save Details
        </Button>
      );
    } else {
      return (
        <Button
          colorScheme="red"
          mt={4}
          onClick={() => {
            if (!toast.isActive(id)) {
              toast({
                id,
                title: "Fill details",
                description: "Fill all of the above shipping details to proceed",
                status: "error",
                duration: 2000,
                isClosable: true,
                position: "top",
              });
            }
          }}
        >
          Save Details
        </Button>
      );
    }
  }

// function to place order after adding card details with if else condition

  function PaymentSubmitButton() {
    const id = "test-toast";
    if (cardNumber.length==16 && cvv.length==3 && expiry.length==4 && userDetails==true) {
      return (
        <Button
          colorScheme="red"
          mt={4}
          onClick={() => {
            if (!toast.isActive(id)) {
              toast({
                id,
                title: "Congratulations 🎉 Your order is placed",
                description:
                  "Your order will be delivered within 2-3 working days.",
                status: "success",
                duration: 2000,
                isClosable: true,
                position: "top",
              });
              <Confetti />;
            }
          }}
        >
          Place Order
        </Button>
      );
    } else {
      return (
        <Button
          colorScheme="red"
          onClick={() => {
            if (!toast.isActive(id)) {
              toast({
                id,
                description: "Fill above payment details correctly to proceed",
                status: "error",
                duration: 2000,
                isClosable: true,
                position: "top",
              });
            }
          }}
        >
          Place Order
        </Button>
      );
    }
  }

  // function to handle cash on delivery 

  function CashOnDeliveryPaymentSubmitButton() {
    const id = "test-toast";
if(userDetails==true){
    return (
      <Button
        mt={3}
        colorScheme="red"
        onClick={() => {
          if (!toast.isActive(id)) {
            toast({
              id,
              title: "Congratulations 🎉 Your order is placed",
              description:
                "Your order will be delivered within 2-3 working days.",
              status: "success",
              duration: 2000,
              isClosable: true,
              position: "top",
            });
          }
        }}
      >
        Place Order
      </Button>
    );}
    else{
      return (
      <Button
        mt={3}
        colorScheme="red"
        onClick={() => {
          if (!toast.isActive(id)) {
            toast({
              id,
              title: "Fill details",
                description: "Fill above shipping details to proceed",
              status: "error",
              duration: 2000,
              isClosable: true,
              position: "top",
            });
          }
        }}
      >
        Place Order
      </Button>)
    }
  }
// main function return statement
  return (
    <>
      <Stack m={"auto"} w={"full"} p={5} spacing={3} align="flex-start">
        <Accordion w={"full"} defaultIndex={[0]} allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton _expanded={{ bg: "green", color: "white" }}>
                <Box as="span" flex="1" textAlign="left">
                  Your Details
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <VStack w="full" h="full" p={2} spacing={10} align="flex-start">
                <SimpleGrid columns={2} columnGap={3} rowGap={4}>
                  <GridItem colSpan={2}>
                    <FormControl>
                      <FormLabel>Name</FormLabel>
                      <Input
                        placeholder="Enter Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </FormControl>
                  </GridItem>

                  <GridItem colSpan={2}>
                    <FormControl>
                      <FormLabel>Address</FormLabel>
                      <Textarea
                        placeholder="Enter Your Address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </FormControl>
                  </GridItem>
                  <GridItem colSpan={1}>
                    <FormControl>
                      <FormLabel>City</FormLabel>
                      <Input
                        placeholder="Enter City"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                      />
                    </FormControl>
                  </GridItem>
                  <GridItem colSpan={1}>
                    <FormControl>
                      <FormLabel>Country </FormLabel>
                      <Select placeholder="India"></Select>
                    </FormControl>
                  </GridItem>

                  <GridItem colSpan={2}>
                    <DetailsSubmitButton />
                  </GridItem>
                </SimpleGrid>
              </VStack>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Stack>

      <Stack m={"auto"} w={"full"} p={5} spacing={3} align="flex-start">
        <Accordion w={"full"} defaultIndex={[0]} allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton _expanded={{ bg: "green", color: "white" }}>
                <Box as="span" flex="1" textAlign="left">
                  Payment
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Stack>
                <Tabs variant="enclosed-colored" colorScheme="teal" isFitted>
                  <TabList>
                    <Tab _selected={{ color: "white", bg: "teal" }}>
                      Cash on Delivery
                    </Tab>

                    <Tab _selected={{ color: "white", bg: "teal" }}>
                      Card Payment
                    </Tab>
                  </TabList>

                  <TabPanels>
                    <TabPanel>
                      <Text>Deliver to above address !</Text>
                      <CashOnDeliveryPaymentSubmitButton />
                    </TabPanel>
                    <TabPanel>
                      <Text m={1} p={2}>
                        Card Number
                      </Text>

                      <Input
                        id="ccn"
                        type={Number}
                        inputmode="numeric"
                        pattern="[0-9]{16}"
                        autocomplete="cc-number"
                        maxlength={16}
                        placeholder="xxxx xxxx xxxx xxxx"
                        onChange={(e) => setCardNumber(e.target.value)}
                      />

                      <HStack>
                        <Box>
                          <Text m={1} p={2}>
                            CVV
                          </Text>
                          <Input
                            type="password"
                            inputmode="numeric"
                            pattern="[0-9]{3}"
                            maxLength={3}
                            placeholder={"Enter 3 digits CVV"}
                            onChange={(e) => setCVV(e.target.value)}
                            mb={3}
                          />
                        </Box>

                        <Box>
                          <Text m={1} p={2}>
                            Expiry (MMDD)
                          </Text>
                          <Input
                            type= {Number}
                            inputmode="numeric"
                            pattern="[0-9]{3}"
                            maxLength={4}
                            placeholder={"Enter 4 digits expiry"}
                            onChange={(e) => setExpiry(e.target.value)}
                            mb={3}
                          />
                        </Box>
                      </HStack>

                      <PaymentSubmitButton mt={3} />
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </Stack>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Stack>
    </>
  );
};

export default CheckoutYourDetails;
