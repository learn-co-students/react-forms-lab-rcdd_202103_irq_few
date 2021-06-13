import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      input: '',
      leftChars: props.maxChars,
    };
  }

  calcLeftChars = (e) => this.setState({
    input: e.target.value,
    leftChars: this.props.maxChars - e.target.value.length
  })


  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.calcLeftChars}
          value={this.state.input}/>
        <span>{this.state.leftChars}</span>
      </div>
    );
  }
}

export default TwitterMessage;