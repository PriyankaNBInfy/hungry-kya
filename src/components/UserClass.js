import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
    console.log(this.props.name + " Constructor");
  }

  componentDidMount() {
    console.log(this.props.name + " Component Did Mount");
  }
  render() {
    console.log(this.props.name + " Render");
    const { name, location } = this.props;
    const { count, count2 } = this.state;
    return (
      <div className="user-card">
        <h2>Count 1: {count}</h2>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increment
        </button>
        <h3>Name:{name}</h3>
        <p>Location:{location}</p>
      </div>
    );
  }
}

export default UserClass;
