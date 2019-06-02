import React, { createContext, PureComponent } from "react";

const AvatarContext = createContext();

class ContextProvider extends PureComponent {
  state = {
    avatar: null
  };
  async componentDidMount() {
    let data = await fetch("https://api.github.com/users/tecladistaprod");
    data = await data.json();
    this.setState({ avatar: data.avatar_url });
  }
  render = () => (
    <AvatarContext.Provider value={this.state}>
      {this.props.children}
    </AvatarContext.Provider>
  );
}

const Consumer = AvatarContext.Consumer;

export { ContextProvider, Consumer };
