import { Badge, Heading, Stack, Text } from "@/components/ClientComponents";
import SearchBox from "@/components/SearchBox";

const Search = async ({ searchParams }: { searchParams: any }) => {
  const res = await fetch(`http://127.0.0.1:8000/search?q=${searchParams.q}`, {
    method: "POST",
  });

  const props = { ...(await res.json()), q: searchParams.q };

  return (
    <div>
      {props.answer && (
        <center>
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
            m={5}
          >
            <SearchBox />
            <Badge bgColor={"green.200"}>{props.answer}</Badge>
          </Heading>
          <br />
          <br />
        </center>
      )}

      <Heading
        fontWeight={600}
        fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
        lineHeight={"110%"}
        m={5}
      >
        <Text as={"span"} position={"relative"}>
          Verses
        </Text>
      </Heading>
      {props.verses.map((verse: any) => (
        <Stack
          key={verse.verse_id + verse.version}
          p="4"
          boxShadow="lg"
          m="4"
          borderRadius="sm"
        >
          <Stack direction="row" alignItems="center">
            <Text fontWeight="semibold">{verse.verse_id}</Text>
            <Badge color={"green.400"}>{verse.version}</Badge>
          </Stack>

          <Stack
            direction={{ base: "column", md: "row" }}
            justifyContent="space-between"
          >
            <Text fontSize={{ base: "sm" }} textAlign={"left"} maxW={"4xl"}>
              {verse.verse}
            </Text>
          </Stack>
        </Stack>
      ))}
    </div>
  );
};

export default Search;
