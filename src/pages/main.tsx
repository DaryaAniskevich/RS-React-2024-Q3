import React from 'react';
import Search from '../components/main/Search';
import Results from '../components/main/Results';

export default class Main extends React.Component {
  render() {
    return (
      <>
        <Search />
        <Results />
      </>
    );
  }
}
