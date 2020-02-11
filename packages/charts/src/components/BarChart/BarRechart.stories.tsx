import React from 'react';
import { BarRechart } from './BarRechart';

const dataset = [
  {
    xValue: 'January',
    users: 100,
    sessions: 300
  },
  {
    xValue: 'February',
    users: 230,
    sessions: 330
  },
  {
    xValue: 'March',
    users: 240,
    sessions: 404
  },
  {
    xValue: 'April',
    users: 280,
    sessions: 80
  },
  {
    xValue: 'May',
    users: 100,
    sessions: 300
  },
  {
    xValue: 'June',
    users: 230,
    sessions: 330
  },
  {
    xValue: 'July',
    users: 20,
    sessions: 470
  },
  {
    xValue: 'August',
    users: 220,
    sessions: 180
  },
  {
    xValue: 'September',
    users: 200,
    sessions: 360
  },
  {
    xValue: 'October',
    users: 250,
    sessions: 500
  },
  {
    xValue: 'November',
    users: 240,
    sessions: 404
  },
  {
    xValue: 'December',
    users: 280,
    sessions: 80
  }
];

const singleData = [
  {
    xValue: 'January',
    data: 100
  },
  {
    xValue: 'February',
    data: 300
  },
  {
    xValue: 'March',
    data: 530
  },
  {
    xValue: 'April',
    data: 200
  }
];

export default {
  title: 'Rechart - BarChart',
  component: BarRechart
};

const clickHandler = (data) => {
  console.log(data);
};

function renderStory() {
  return (
    <BarRechart
      dataPointClickHandler={clickHandler}
      legendClickHandler={clickHandler}
      labelKey={'xValue'}
      dataset={dataset}
      width={'97%'}
      height={'40vh'}
      noLegend={false}
      loading={true}
      chartConfig={{
        barSize: 100,
        xAxisVisible: true,
        yAxisVisible: true,
        secondYAxis: { dataKey: 'users' }
      }}
    />
  );
}

const renderStoryWithCustomColor = () => (
  <BarRechart
    dataPointClickHandler={clickHandler}
    labelKey={'xValue'}
    dataset={singleData}
    color={'red'}
    width={'95%'}
    height={'40vh'}
  />
);

export const withCustomColor = renderStoryWithCustomColor();

withCustomColor.story = {
  name: 'With Custom Color'
};

export const defaultStory = renderStory();

defaultStory.story = {
  name: 'Default'
};

export const loadingPlaceholder = () => <BarRechart labelKey={'xValue'} width={'30%'} />;

loadingPlaceholder.story = {
  name: 'Loading Placeholder'
};