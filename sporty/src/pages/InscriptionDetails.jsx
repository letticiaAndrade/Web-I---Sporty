import { useLocation } from "react-router-dom";
import { HStack, Stack } from "@chakra-ui/react";
import { Header, TitlePage } from "../components";
import { CirclesFour, Trophy } from "@phosphor-icons/react";
import { Badge, Box, Flex, Heading, Text } from "@chakra-ui/react";

export function InscriptionDetails() {
    let { inscription } = useLocation().state;

    return (
        <Flex w="full" h="100vh">
            <Header />

            <Flex flexDir="column" px={2} pb={8} flex={9} bgColor="light.100">
                <TitlePage title="Detalhes do Torneio" Icon={Trophy} />
                <Stack direction="column" flexWrap="wrap" mt={8} spacing={3}>

                    <Box my={10} color="dark.500" shadow="md" bg="light.50" p={2} rounded="md">
                        <Box h={.5} bg="light.200" my={3} rounded="full" />
                        <HStack>
                            <CirclesFour size={40} />
                            <Heading size="lg">Inscrição</Heading>
                        </HStack>
                        <Stack px={4} pb={2}>
                            <Stack key={inscription?.id} borderWidth={1} rounded="md" shadow="md" bgColor="light.100" p={2} my={1}>
                                <HStack flexWrap="wrap">
                                    <Badge rounded="md" px={2} colorScheme="primary">
                                        {inscription?.id}
                                    </Badge>
                                </HStack>

                                <Box h="1px" bgColor="light.200" />

                                <Heading size="md">Identificador: {inscription?.id}</Heading>
                                <HStack>
                                    <Text>Identificadores dos Participantes </Text>
                                    <Badge rounded="md" px={2} colorScheme="primary">
                                        {inscription?.userId1}
                                    </Badge>
                                    <Badge rounded="md" px={2} colorScheme="secondary">
                                        {inscription?.userId2}
                                    </Badge>
                                </HStack>
                            </Stack>
                        </Stack>

                    </Box >
                </Stack >
            </Flex>
        </Flex>
    )
}