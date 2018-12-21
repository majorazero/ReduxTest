import React, {Component} from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formTitle: "",
      formBody: ""
    }
  }

  onChange = (event) => {
     this.setState({[event.target.name] : [event.target.value]});
  }

  render(){
    return(
      <div>
        <h1>Form</h1>
        <form>
          <div>
            <label>Title</label>
            <input onChange={this.onChange} type="text" name="formTitle" />
          </div>
          <p />
          <div>
            <label>Body</label>
            <textarea onChange={this.onChange} name="formBody" />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default Form;
