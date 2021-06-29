import React from 'react';
import { widgets, WidgetName, WidgetNumber } from './types';
import Card from './Card';
import styles from '../styles/Widgets.module.css';

type Props = {
  libraryName: string;
} & Partial<Record<WidgetName, JSX.Element>>;

const WidgetTemplate = ({ libraryName, ...widgetsElements }: Props) => {
  return (
    <div className={styles.container}>
      <h1>Framework - ReactJS</h1>
      <h2>Library - {libraryName}</h2>
      <div className={styles.cards}>
        {(Object.keys(widgets) as WidgetNumber[]).map((widgetNumber) => {
          const widgetName = widgets[widgetNumber];
          const widget = widgetsElements[widgetName];

          return (
            <Card
              key={widgetName}
              widgetNumber={widgetNumber}
              widgetName={widgetName}
            >
              {widget || '-'}
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default WidgetTemplate;
