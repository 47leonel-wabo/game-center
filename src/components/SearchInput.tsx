import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { FaSearch } from "react-icons/fa";
import useGameStore from "../stores/store";

const SearchInput = () => {
  const setSearchText = useGameStore((selector) => selector.setSearchText);
  const searchRef = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (searchRef.current && searchRef.current.value.trim().length >= 3)
          setSearchText(searchRef.current.value);
      }}
      className="nav-bar-search-form"
      style={{ marginLeft: 32 }}
    >
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <FaSearch color="gray.300" />
        </InputLeftElement>
        <Input
          ref={searchRef}
          placeholder="Search Game..."
          type="text"
          variant="filled"
          borderRadius={20}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
