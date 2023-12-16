/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { Star } from "@phosphor-icons/react";
import { Box, HStack, Stack, Text } from "@chakra-ui/react";

export function TournamentCard({ tournament }) {
    const navigation = useNavigate();

    return (
        <Stack
            p={2}
            shadow="md"
            rounded="md"
            bg="light.50"
            align="center"
            cursor="pointer"
            justify="space-between"
            w={{ base: "full", md: "48%" }}
            direction={{ base: "column", lg: "row" }}
            _hover={{
                color: "primary.600",
                transform: "scale(1.03)",
            }}
            onClick={() => navigation("/tournament/details", { state: { tournament } })}
        >
            <HStack spacing={4} w="full">
                <Box>
                    <HStack>
                        <Text fontWeight="medium">
                            {tournament?.tor_tx_name}
                        </Text>
                    </HStack>
                </Box>
            </HStack>

            <Stack
                justify="space-around"
                direction={{ base: "column", sm: "row" }}
            >
                <HStack justify="center">
                    <Text>Identificador:</Text>
                    <HStack fontSize={25} fontWeight="medium" color="primary.600">
                        <Text>{tournament?.tor_nr_id}</Text>
                        <Star />
                    </HStack>
                </HStack>
            </Stack>
        </Stack >
    );
}