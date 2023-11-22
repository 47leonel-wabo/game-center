import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const SearchInput = () => {
  return (
    <InputGroup marginX={2}>
      <InputLeftElement pointerEvents="none">
        <FaSearch color="gray.300" />
      </InputLeftElement>
      <Input
        placeholder="Search Game..."
        type="text"
        variant="filled"
        borderRadius={20}
      />
    </InputGroup>
  );
};

export default SearchInput;
