import './App.css';
import { Balance } from './components/Balance';
import { Header } from "./components/Header";
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList.jsx'
import { AddTransaction } from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';


function App() {
  return (
    <GlobalProvider>
      <Header header='Expense Tracker' />
      <div className='container'>
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
