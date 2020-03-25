import React from "react";
import { axiosWithAuth } from "../utilities/AxiosAuth";

class AddFriend extends React.Component {
  state = {
    addFriend: {
      id: Date.now,
      name: "",
      age: "",
      email: ""
    }
  };

  handleChange = e => {
    this.setState({

       addFriend: {...this.state.addFriend ,
        [e.target.name]: e.target.value}
      }
    );
  };

  addNewFriend = e => {
    e.preventDefault();

    axiosWithAuth()
    .post("/api/friends/", this.state.addFriend)
    .then(res => {

      this.setState({ addFriend: [...res.data]})
         this.props.history.push("/friends");
      })
      .catch(err => console.log(err));
  };

  render() {
    console.log();
    return (
      <div>
        <form onSubmit={this.addNewFriend}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={this.state.addFriend.name}
            onChange={this.handleChange}
          /><br />

          <input
            type="text"
            name="age"
            placeholder="Age"
            value={this.state.addFriend.age}
            onChange={this.handleChange}
          /> <br />
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={this.state.addFriend.email}
            onChange={this.handleChange}
          /><br />
          <button>Add Friend</button>
        </form>
      </div>
    );
  }
}
export default AddFriend;