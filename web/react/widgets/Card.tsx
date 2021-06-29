import React from 'react';
import styles from './styles.module.css';

type Props = {
  widgetName: string;
  widgetNumber: string;
  children: React.ReactNode;
};

const Card = (props: Props) => {
  return (
    <div className={styles.card}>
      <h4
        className={styles.cardTitle}
      >{`${props.widgetNumber}. ${props.widgetName}`}</h4>
      <div>{props.children}</div>
    </div>
  );
};

export default Card;
