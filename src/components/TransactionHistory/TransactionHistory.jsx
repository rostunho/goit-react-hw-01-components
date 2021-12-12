import styles from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

function TransactionHistory({ transactions }) {
  return (
    <table className={styles.transactionHistory}>
      <thead>
        <tr className={styles.tableRow}>
          <th className={styles.title}>Type</th>
          <th className={styles.title}>Amount</th>
          <th className={styles.title}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id} className={styles.tableRow}>
              <td className={styles.type}>{type}</td>
              <td className={styles.amount}>{amount}</td>
              <td className={styles.currency}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};

export default TransactionHistory;
