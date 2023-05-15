"use client";

import { Box, Container, Heading, Stack, Text } from "@chakra-ui/react";
import Head from "next/head";

import SearchBox from "@/components/SearchBox";

export default function Home() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Container maxW={"3xl"}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            Smart{" "}
            <Text as={"span"} color={"green.400"}>
              Bible
            </Text>
          </Heading>
          <SearchBox />
        </Stack>
      </Container>
    </>
  );
}
