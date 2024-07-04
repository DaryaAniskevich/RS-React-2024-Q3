import React from 'react';
import { apiUrl } from '../../helpers/constants';
import Loader from '../common/Loader';
import { ResultsState } from '../../helpers/types';
import ListItem from './ListItem';

export default class Results extends React.Component<Record<string, never>, ResultsState> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      isLoading: true,
      isError: false,
      items: [],
    };
  }

  componentDidMount(): void {
    this.fetchData();
  }

  fetchData = () => {
    try {
      fetch(apiUrl)
        .then((result) => result.json())
        .then((result) => {
          this.setState({ items: result.foods, isLoading: false });
        });
    } catch (e) {
      this.setState({ isError: true, isLoading: false });
    }
  };

  render() {
    const { isLoading, isError, items } = this.state;

    let content;

    if (isLoading) {
      content = <Loader />;
    } else if (isError) {
      content = <div>Something went wrong</div>;
    } else {
      content = (
        <ul className="list">
          {items.map((item) => (
            <ListItem key={item.uid} food={item} />
          ))}
        </ul>
      );
    }

    return (
      <div className="results">
        <h2>Results</h2>
        {content}
      </div>
    );
  }
}
