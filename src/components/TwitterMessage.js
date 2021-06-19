import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: "";
    };
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input value={this.state.value} onChange={(e)=>setState({value: e.target.value})} type="text" name="message" id="message" />
      </div>
    );
  }
}

export default TwitterMessage;
