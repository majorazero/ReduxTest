import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {fetchPosts} from "../actions/postActions";

class Homepage extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    this.props.fetchPosts();
  }

  //replacing componentWillRecieveProps

  static getDerivedStateFromProps(props,state){
    console.log(props);
    if(props.newPost){
      props.posts.unshift(props.newPost);
      return null;
    }
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

Homepage.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object
}

const mapStateToProps = state => ({
  posts: state.posts.items, //refer to root reducer as to why we named this posts
  newPost: state.posts.item
})

export default connect(mapStateToProps,{fetchPosts})(Homepage);
