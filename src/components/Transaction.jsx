import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Transaction = ({ transaction }) => {
    const { deleteTransaction } = useContext( GlobalContext);

    const symbol = transaction.amount < 0 ? '-' : '+';

    console.log(transaction)
  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
     {transaction.text}
     <span>{symbol}{Math.abs(transaction.amount)} €</span>
     <button className="delete-btn" onClick={() => deleteTransaction(transaction.id)}>
       x 
     </button>
    </li>
  )
};

export default Transaction;
