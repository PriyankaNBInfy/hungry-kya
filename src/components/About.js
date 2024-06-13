import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent constructor");
  }

  componentDidMount() {
    console.log("Parent component Did Mount");
  }
  render() {
    console.log("Parent render");
    return (
      <div>
        <h1>About Us</h1>
        <UserClass name={"1"} location={"Bengaluru (Class)"} />
        <UserClass name={"2"} location={"Bengaluru (Class)"} />
        <UserClass name={"3"} location={"Bengaluru (Class)"} />
      </div>
    );
  }
}

export default About;
