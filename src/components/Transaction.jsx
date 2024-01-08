const Transaction = ({ transaction }) => {
    const symbol = transaction.amount < 0 ? '-' : '+';

    console.log(transaction)
  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
     {transaction.text}
     <span>{symbol}{Math.abs(transaction.amount)} €</span><button className="delete-btn">x</button>
    </li>
  )
};

export default Transaction;
