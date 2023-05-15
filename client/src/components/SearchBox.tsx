"use client";

import { Button, HStack, Input } from "@/components/ClientComponents";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SearchBox = () => {
  const [query, setQuery] = useState("");

  const router = useRouter();
  const search = async () => {
    router.push(`/search?q=${query}`);
  };

  return (
    <HStack>
      <Input
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        autoFocus={true}
        onKeyDown={(key) => {
          if (key.key === "Enter") {
            search();
          }
        }}
        placeholder="Who is Jesus?"
      />

      <Button
        onClick={search}
        colorScheme={"green"}
        bg={"green.400"}
        rounded={"full"}
        px={6}
        _hover={{
          bg: "green.500",
        }}
      >
        Search
      </Button>
    </HStack>
  );
};

export default SearchBox;
