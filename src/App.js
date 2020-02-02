import React, { Component } from 'react';

class App extends Component {
  state = {
    users: []
  }
  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users/')
      .then(res => res.json())
      .then((data) => {
        this.setState({ users: data })
        console.log(this.state.users)
      })
      .catch(console.log)
  }
  render() {

    return (
      <div className="container">
        
        <h1 class="text-danger">User List</h1>
        <div class="row">
          {this.state.users.map((user) => (
        <div className="col-lg-6">
            <div className="card border-0">
              <div className="card-body">
                <h5 className="card-title text-info">{user.name}</h5>
                <h6 className="card-subtitle mb-2 text-success">
                  {user.id
                  }) {user.username
                  } <br/><br/>
                  <span class="ml-4">{user.phone
                  } </span><br/>
                  <span class="ml-4">{user.address.street
                  }</span> <br/>
                  <span class="ml-4">{user.address.suite
                  } </span><br/>
                  <span class="ml-4">{user.address.city
                  } </span><br/>
                  <span class="ml-4">{user.address.zipcode
                  } </span><br/><br/>
                  <a class="ml-5" href="{user.website}">{user.website
                  } </a><br/>
                  <span class="ml-5">
                  {user.company.name
                  }</span>
                </h6>
              </div>
            </div>
        </div>
          ))}
          
        </div>
      </div>
    );
  }
}
export default App;