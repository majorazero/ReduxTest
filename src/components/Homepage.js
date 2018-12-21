import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchPosts} from "../actions/postActions";

class Homepage extends Component {

  componentDidMount = () => {
    this.props.fetchPosts();
  }

  render(){
    const items = this.props.posts.map(item => {
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

const mapStateToProps = state => ({
  posts: state.posts.items //refer to root reducer as to why we named this posts
})

export default connect(mapStateToProps,{fetchPosts})(Homepage);
