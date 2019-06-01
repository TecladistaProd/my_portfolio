import React, { PureComponent } from "react";

import { Bar, Bars, Container } from "./styled";

export default class BarComp extends PureComponent {
  state = {
    percent: 0
  };

  componentDidMount() {
    if (!this.props.percent) return null;

    setTimeout(() => {
      this.setState({ percent: this.props.percent });
    }, 200);
  }

  render() {
    return (
      <Container>
        <i>{this.props.label}</i>
        <Bars color={this.props.backcolor}>
          <Bar color={this.props.color} percent={this.state.percent} />
        </Bars>
      </Container>
    );
  }
}
