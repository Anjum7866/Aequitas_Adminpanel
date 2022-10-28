import React, { useState } from "react";
import ItemScreen from "./ItemScreen";


const Item = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    // setSearchVideo("");
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    // setSearchVideo("");
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <>
      <ItemScreen
        page={page}
        rowsPerPage={rowsPerPage}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </>
  );
};

export default Item;