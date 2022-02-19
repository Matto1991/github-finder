import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    backColor: "black",

    enviroment: {
      clientId: "",
      clientSecret: "",
    },
    users: [],
    loading: false,
  };

  async componentDidMount() {
    /* this.setState({
      enviroment: {
        clientId: `${process.env.REACT_APP_GITHUB_CLIENT_ID}`,
        clientSecret: `${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`,
      },
    }); */

    this.setState({ loading: true });

    const res = await axios.get(`https://api.github.com/users?client_id=$
    {process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
    {process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({ users: res.data, loading: false });
    /*  setTimeout(() => {
      this.setState({ backColor: "red" });
    }, 2000); */
  }

  render() {
    return (
      <div
        className="App"
        /*  style={{
          backgroundColor: `${this.state.backColor}`,
        }} */
      >
        <Navbar />
        <div className="container">
          {/* <p>client_id:{this.state.enviroment.clientId}</p> */}

          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
