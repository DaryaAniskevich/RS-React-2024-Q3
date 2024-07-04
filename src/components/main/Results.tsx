import React from 'react';
import { apiUrl, localStorageSearchValue } from '../../helpers/constants';
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
    window.addEventListener('storage', this.handleLocalStorageChange, false);
    this.fetchData();
  }

  componentWillUnmount() {
    window.removeEventListener('storage', this.handleLocalStorageChange, false);
  }

  handleLocalStorageChange = () => {
    this.fetchData();
  };

  fetchData = () => {
    const localSearch = localStorage.getItem(localStorageSearchValue);
    try {
      this.setState({ isLoading: true });
      if (localSearch) {
        fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams({
            name: localSearch,
          }),
        })
          .then((result) => result.json())
          .then((result) => {
            this.setState({ items: result.foods, isLoading: false });
          });
      } else {
        fetch(apiUrl)
          .then((result) => result.json())
          .then((result) => {
            this.setState({ items: result.foods, isLoading: false });
          });
      }
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
