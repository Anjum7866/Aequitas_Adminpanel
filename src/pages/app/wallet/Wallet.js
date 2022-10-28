import React, { useState } from 'react'
import WalletScreen from './WalletScreen';
import WalletForm from './walletForm';

const Wallet = () => {
  const [page,setPage] = useState(0);
  const [rowsPerPage,setRowsPerPage] = useState(10);
  const [currentScreen, setCurrentScreen] = useState(0);
  const [walletAmount, setWalletAmount] = useState("");
  const [walletDetails, setWalletDetails] = useState("");


  const handleChangePage = (event, newPage) => {
    // setSearchVideo("");
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    // setSearchVideo("");
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const onClickAddNew = () => {
    setEditWalletAmount({ isEditing: false, editItem: null });
    onDiscard();
    setCurrentScreen(1);
    console.log("edit user from onclicknew", editWalletAmount);
  };
  const onClickBack = () => {
    onDiscard();
    setCurrentScreen(0);
  };
  const onChangeWalletAmount = (e) => {
    setWalletAmount(e.target.value);
  };
  const onChangeWalletDetails = (e) => {
    setWalletDetails(e.target.value);
  };
  return (
    <>
     {currentScreen === 0 && (
    <WalletScreen
        page={page}
        rowsPerPage={rowsPerPage}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
      />
       )}
       {currentScreen === 1 && (
        <WalletForm 
          onClickBack={onClickBack}
          onSubmit={onSubmit}
          onUpdate={onUpdate}
          onDiscard={onDiscard}
          onChangeWalletAmount={onChangeWalletAmount}
          onChangeWalletDetails={onChangeWalletDetails}
          walletAmount={walletAmount}
          walletDetails={walletDetails}
        />
       )}
    </>
  )
}

export default Wallet;


























