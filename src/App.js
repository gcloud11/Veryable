import './App.css';
import React, { Component } from 'react';
import Card from './components/Card';
// import Card1 from './components/Users/card1';
import user from './users.json';
import Wrapper from './components/Wrapper';
import Title from "./components/Title";


class App extends Component {
  // Setting this.state.user to the users json array
  state = {
    user
  };
  // Map over this.state.users and render a User component for each user object
  render() {
    return (
      <Wrapper> 
        <Title>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" padding="100px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>&nbsp;
          Users
        </Title>
        {this.state.user.map(user => (
          <Card        
            name={user.firstName + " " + user.lastName} 
            role={user.role}
            email={user.email}
            street={user.street + " " + user.city + " "  + user.state + " " + user.zip}
            phone={user.phone}
            created={user.createdAt}
            login={user.lastLoggedIn}>
          </Card>
          
        ))}
      </Wrapper>
    );
  }
}
export default App;
