import React from 'react';
import Search from '../components/main/Search';
import Results from '../components/main/Results';

export default class Main extends React.Component<Record<string, never>, { isError: boolean }> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      isError: false,
    };
  }

  addError = () => {
    this.setState({ isError: true });
  };

  render() {
    const { isError } = this.state;
    if (isError) {
      throw new Error('Something went wrong');
    }
    return (
      <main className="container">
        <button type="button" onClick={this.addError} className="button-boundary">
          Check Error Boundary
        </button>
        <Search />
        <Results />
      </main>
    );
  }
}
