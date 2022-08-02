import { useEffect, useState } from "react";
import initialData from "../../mocks/constants";
import Button from "../Button";
import Chart from "../Chart";

import styles from "./Diagram.module.scss";

const Diagram: React.FC = () => {
  const [data, setData] = useState(initialData);

  const randomDataHandler = () => {
    return data.map(({ name }) => {
      return { name, time: Math.random() * 100 };
    });
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setData(randomDataHandler());
    }, 30000);

    return () => clearInterval(intervalId);
  }, []);

  const positionHandler = () => {
    const sum = data.reduce(
      (sum, { time }) => {
        sum.global = +sum.global.toFixed(1) + +time.toFixed(1);
        sum.itemsPosition.push(+sum.global.toFixed(1));
        return sum;
      },
      { global: 0 as number, itemsPosition: [] as Array<number> }
    );
    const positionList = sum.itemsPosition.reduce((list, position, idx) => {
      list.push({
        position: (position / sum.global) * 100,
        width: (data[idx].time / sum.global) * 100,
      });

      return list;
    }, [] as Array<{ position: number; width: number }>);
    return positionList;
  };

  const positionList = positionHandler();

  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.title}>SPENT TIME (SECOND)</h1>
        <Button onClick={() => setData(randomDataHandler())}>
          Random Diagram
        </Button>
      </header>
      <div className={styles.diagram}>
        {data.map(({ name, time }, idx) => {
          return (
            <Chart
              name={name}
              key={name}
              width={positionList[idx].width}
              position={positionList[idx].position}
            >
              {time}
            </Chart>
          );
        })}
      </div>
    </>
  );
};

export default Diagram;
