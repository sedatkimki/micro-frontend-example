import { Input, InputGroup, InputRightElement, Box } from "@chakra-ui/react";
import { MdSearch } from "react-icons/md";
import useSearch from "../store";

const Search = () => {
  const [search, setSearch] = useSearch();
  const onChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <InputGroup size="md" width={300}>
      <Input
        pr="4.5rem"
        type={"text"}
        placeholder="Search products"
        value={search}
        onChange={onChange}
      />
      <InputRightElement pointerEvents="none">
        <Box as={MdSearch} color="gray.300" />
      </InputRightElement>
    </InputGroup>
  );
};

export default Search;
