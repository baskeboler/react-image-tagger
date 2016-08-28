import React from 'react';
import {connect} from 'react-redux';
import {Card, Form, FormInput, FormField, Button} from 'elemental';
import {saveTagData} from './actions';

class TagInfo extends React.Component {
  constructor(props) {
    super(props);
    this.handleSave=this.handleSave.bind(this);
  }
  handleSave() {
    var tag = Object.assign({}, this.props.tag, {text: this.field.refs.input.value});
    console.log(`saving tag `, tag);
    this.props.onSaveTagData(tag);
  }
  componentWillReceiveProps(newProps) {
    if (this.field) {
      this.field.refs.input.value = newProps.tag.text || "";
    }
  }

  render() {
    if (this.props.tag.selected) {
      return (
        <Card>
          <h5>
            Tag {this.props.tag.id}
          </h5>
          <Form>
            <FormField label="Tag Description">
              <FormInput type="text" multiline ref={ref => this.field = ref}>
                {this.props.tag.text || ""}
              </FormInput>
            </FormField>
            <Button onClick={this.handleSave} type="primary">Save Tag Data</Button>
          </Form>
        </Card>
      );
    } else {
      return (
        <Card>
          <p>No tag selected</p>
        </Card>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    tag: state.selectedTag.selected ? {...state.selections.find(s => s.id == state.selectedTag.id), selected: true} : state.selectedTag
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSaveTagData: (tag) => {
      dispatch(saveTagData(tag));
    }
  }
}
const SelectedTagInfo = connect(mapStateToProps, mapDispatchToProps)(TagInfo);
export default SelectedTagInfo;
