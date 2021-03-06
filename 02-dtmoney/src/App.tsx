import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal'
import { useState } from "react";
import { NewtransactionModal } from "./components/NewTransactionModal";
import { TransactionsContext } from "./TransactionsContext";

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal(){
      setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal(){
      setIsNewTransactionModalOpen(false);
  }
  return (
    <TransactionsContext.Provider value={[]}>
     <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>


     <Dashboard/>
     <NewtransactionModal
     isOpen={isNewTransactionModalOpen}
     onRequestClose={handleCloseNewTransactionModal}/>
    
     <GlobalStyle/>
    </TransactionsContext.Provider>
  );
}


