import React, {Component} from "react";
import axios from "axios";

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: []
    };
  }

  componentDidMount = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res)=>{
      this.setState({post:res.data});
    })
  }

  render(){
    const items = this.state.post.map(item => {
      return (
        <div key={item.id}>
          <h1>{item.title}</h1>
          <p>{item.body}</p>
        </div>
      );
    })
    return(
      <div>
        <h1>Homepage</h1>
        {items}
      </div>
    );
  }
}

export default Homepage;
