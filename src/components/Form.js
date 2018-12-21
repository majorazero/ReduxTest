import React, {Component} from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {createPost} from "../actions/postActions";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      id: ""
    }
  }

  onChange = (event) => {
     this.setState({[event.target.name] : event.target.value});
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.createPost({
      title: this.state.title,
      body: this.state.body,
      id: this.state.title+this.state.body
    });
  }

  render(){
    return(
      <div>
        <h1>Form</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Title</label>
            <input onChange={this.onChange} type="text" name="title" />
          </div>
          <p />
          <div>
            <label>Body</label>
            <textarea onChange={this.onChange} name="body" />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

Form.propTypes = {
  createPost: PropTypes.func.isRequired
};

export default connect(null,{createPost})(Form);
