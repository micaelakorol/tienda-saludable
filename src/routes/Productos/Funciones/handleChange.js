import React, { useContext } from "react";
import { UserContext } from "../../../context/Context";

const HandleValues = () => {
  const { setFilter, setSearchParams } = useContext(UserContext);
  const handleChange = (e) => {
    let newFilter = e.target.value;
    setFilter(newFilter);

    if (newFilter) {
      setSearchParams({ filter: newFilter });
    } else {
      setSearchParams({});
    }
  };
  return { handleChange };
};

export default HandleValues;
