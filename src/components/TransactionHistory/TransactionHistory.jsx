import styles from './TransactionHistory.css';
import PropTypes from 'prop-types';

function TransactionHistory({ transactions }) {
  return (
    <table className={styles.transactionHistory}>
      <thead>
        <tr>
          <th className={styles.tableHead}>Type</th>
          <th className={styles.tableHead}>Amount</th>
          <th className={styles.tableHead}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id}>
              <td className={styles.tableData}>{type}</td>
              <td className={styles.tableData}>{amount}</td>
              <td className={styles.tableData}>{currency}</td>
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
