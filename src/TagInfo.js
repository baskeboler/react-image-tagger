import React from 'react';
import {connect} from 'react-redux';
import {Card, Form, FormInput, FormField, Button} from 'elemental';

class TagInfo extends React.Component {

  render() {
    if (this.props.tag.selected) {
      return (
        <Card>
          <h5>
            Tag {this.props.tag.id}
          </h5>
          <Form>
            <FormField label="Tag Description">
              <FormInput type="text" multiline/>
            </FormField>
            <Button type="primary">Save Tag Data</Button>
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
    tag: state.selectedTag
  };
}
const SelectedTagInfo = connect(mapStateToProps)(TagInfo);
export default SelectedTagInfo;
