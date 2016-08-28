import React from 'react';
import {Form, Button, FormField, FormInput, Glyph, InputGroup, Card} from 'elemental';

class ImageForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick=this.handleClick.bind(this);
  }
  handleClick() {
    var url = this.textField.refs.input.value;
    this.props.onFormSubmit(url);
  }
  render() {
    return (
      <Form >
        <Card>
          <p><strong>Dimensions: </strong>{this.props.size.w} x {this.props.size.h}</p>
          <p>(current image {this.props.imgSrc})</p>

        </Card>
        <Card>
          <FormField label="Image URL ">
            <InputGroup contiguous>
              <InputGroup.Section grow>
                <FormInput autofocus placeholder="Enter a URL pointing to an image file." type="text" ref={(ref) => this.textField = ref} ></FormInput>
              </InputGroup.Section>
              <InputGroup.Section>
                <Button type="primary" onClick={this.handleClick}>
                  <Glyph icon="sync"/>
                </Button>
              </InputGroup.Section>
            </InputGroup>
          </FormField>
        </Card>
      </Form>
    )
  }
}

export default ImageForm;
