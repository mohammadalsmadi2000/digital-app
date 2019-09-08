import React, {Component} from 'react';
import { Root } from "native-base";
import Login from "./Components/login/login";
import Routes from "./routes/route/";

export default class Auth extends React.Component {
  render() {
    return (
      <Root>
        <Routes />
      </Root>
    );
  }
}
