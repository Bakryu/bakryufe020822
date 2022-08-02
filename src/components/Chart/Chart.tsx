import styles from "./Chart.module.scss";
interface Props {
  name: string;
  children: number;
  width: number;
  position: number;
}

const Chart: React.FC<Props> = ({ name, children, width, position }) => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.name}>{name}</span>
      <div className={styles.chart}>
        <div
          className={styles.item}
          style={{
            left: `${position - width}%`,
            width: `${width}%`,
          }}
        >
          {+children.toFixed(1)}
        </div>
      </div>
    </div>
  );
};

export default Chart;
