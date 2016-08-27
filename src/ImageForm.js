import React from 'react';

class ImageForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick=this.handleClick.bind(this);
  }
  handleClick() {
    var url = this.textField.value;
    this.props.onFormSubmit(url);
  }
  render() {
    return (
      <form className="imageForm">
        <label>Image URL</label>
        <input type="text" ref={(ref) => this.textField = ref} ></input>
        <button type="button" onClick={this.handleClick}>Load Image</button>
      </form>
    )
  }
}

export default ImageForm;
