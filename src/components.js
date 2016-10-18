import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="header">

      </header>
    )
  }
}


class Article extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <article className="app">

      </article>
    );
  }
}


class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer className="footer">

      </footer>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      userID = 0,
      
    }
  }
  render() {

  }
}
