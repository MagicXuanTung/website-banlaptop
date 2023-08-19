import React from "react";
import { Box, Flex, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const AdminPage = () => {
    const navigate = useNavigate();

    return (
        <>
            <Flex
                flexDirection={"column"}
                justifyContent="center"
                alignItems={"center"}
                fontWeight="700"
                fontSize={30}
                marginBottom="50"
            >
                Admin page in here
            </Flex>
        </>
    );
};
