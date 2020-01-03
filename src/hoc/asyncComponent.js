import React, { Component } from 'react';

const asyncComponent = (importComponent) => class extends Component {
  constructor() {
    super();
    this.state = {
      component: null,
    };
  }

  componentDidMount() {
    importComponent().then((cmp) => {
      this.setState({ component: cmp.default });
    });
  }

  render() {
    const { component } = this.state;
    // eslint-disable-next-line react/jsx-props-no-spreading
    return component ? <component {...this.props} /> : null;
  }
};

export default asyncComponent;
