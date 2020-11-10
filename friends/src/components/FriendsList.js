import React from 'react';
import axios from 'axios';

class FriendsList extends React.Component {

  state = {
    friends: []
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axios.get("http://localhost:5000/api/friends")
      .then(req => {
        this.setState({
          friends: req.data
        })
      }).catch(err => {
        console.log(err)
      })
  };

  render() {
    return (
      <div className="friends">
        {this.state.friends.map(friend => (
          <div className="friend"> 
            <p>{friend.name}</p>
            <p>{friend.age}</p>
            <p>{friend.email}</p>
          </div>
        ))}
      </div>
    );
  }

}

export default FriendsList;