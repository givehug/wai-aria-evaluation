import React from 'react';
import Head from 'next/head';
import { widgets, Widget, WidgetNumber } from './types';
import Card from './Card';
import styles from '../styles/Widgets.module.css';

type Props = {
  libraryName: string;
} & Record<Widget, JSX.Element | undefined>;

const WidgetTemplate = ({ libraryName, ...widgetsElements }: Props) => {
  return (
    <>
      <Head>
        <title>WAI-ARIA Evaluation - ReactJS / {libraryName}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
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
                {widget || 'not available'}
              </Card>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default WidgetTemplate;
