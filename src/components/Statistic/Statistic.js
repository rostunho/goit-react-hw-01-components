import PropTypes from 'prop-types';
import randomColor from 'js/random-bg-color';
import styles from './Statistic.module.css';

function Statistic({ title, stats }) {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <ul className={styles.list}>
        {stats.map(({ id, label, percentage }) => {
          const bgColor = randomColor();
          return (
            <li
              className={styles.item}
              key={id}
              style={{ backgroundColor: bgColor }}
            >
              <span className={styles.label}>{label}</span>
              <span className={styles.percentage}>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

Statistic.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Statistic;
