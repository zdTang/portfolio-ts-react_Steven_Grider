import { Component } from "react";

interface User {
  name: string;
  age: number;
}
interface UserSearchProps {
  users: User[];
}

interface UserSearchState {
  name: string;
  user: User | undefined;
}

class UserSearch extends Component<UserSearchProps> {
  state: UserSearchState = {
    name: "",
    user: undefined,
  };
  // use normal function will cause This context issue
  onClick = () => {
    const foundUser = this.props.users.find((user) => {
      return user.name === this.state.name;
    });
    this.setState({ user: foundUser });
  };

  render() {
    const { name, user } = this.state;

    return (
      <div>
        <h3>Guest List</h3>
        {user && user.name}
        {user && user.age}
        <input
          type="text"
          value={name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <button onClick={this.onClick}>Add Guest</button>
      </div>
    );
  }
}

export default UserSearch;
