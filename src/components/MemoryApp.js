import React from 'react';
import Card from './Card';

export default class MemoryApp extends React.Component {
  render() {
    return (
      <div>
        <h2>This renders correctly</h2>
        <Card />
      </div>
    );
  }
}
