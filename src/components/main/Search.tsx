import React from 'react';
import { localStorageSearchValue } from '../../helpers/constants';

export default class Search extends React.Component<Record<string, never>, { inputValue: string }> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }

  componentDidMount(): void {
    const localStorageValue = localStorage.getItem(localStorageSearchValue);
    if (localStorageValue) {
      this.setState({ inputValue: localStorageValue });
    }
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ inputValue: event.target.value });
  };

  handleSubmit = () => {
    const { inputValue } = this.state;
    localStorage.setItem(localStorageSearchValue, inputValue);
  };

  render() {
    const { inputValue } = this.state;
    return (
      <div className="search">
        <input value={inputValue} onChange={this.handleChange} />
        <button type="submit" onClick={this.handleSubmit}>
          Search
        </button>
      </div>
    );
  }
}
