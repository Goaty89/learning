import React from 'react';

class App extends React.Component {
  render() {
    let txt = this.props.txt;

      return (
          <div>
            <h1 className="">Hello {txt}</h1>
            <b>{this.props.cat}</b>
          </div>
      )
  }
}

App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
}
//const App = () => <h1>Hello stateless</h1>

export default App
