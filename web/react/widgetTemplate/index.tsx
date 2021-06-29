import React from 'react';
import { widgets, WidgetName, WidgetNumber } from '../widgets'
import Card from './Card'
import styles from './styles.module.css'

type Props = {
  libraryName: string
} & Partial<Record<WidgetName, React.FunctionComponent>>

const WidgetTemplate = ({libraryName, ...Widgets}: Props) => {
  return (
    <div className={styles.container}>
      <h1>Framework - ReactJS</h1>
      <h2>Library - {libraryName}</h2>
      <div className={styles.cards}>
        {(Object.keys(widgets) as WidgetNumber[]).map(widgetNumber => {
          const widgetName = widgets[widgetNumber]
          const WidgetComponent = Widgets[widgetName]

          return <Card widgetNumber={widgetNumber} widgetName={widgetName}>{WidgetComponent ? <WidgetComponent/> : '-'}</Card>
        })}
      </div>
    </div>
  );
};

export default WidgetTemplate
