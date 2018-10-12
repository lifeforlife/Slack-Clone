import React from "react";
import { Form, Input, Button, Modal } from "semantic-ui-react";
import PropTypes from "prop-types";

import { InlineError, InlineHint } from "@/components/common";

const EditFeelingModal = ({
  text,
  isModalOpen,
  clientError,
  feeling,

  toggleModalOpen,
  handleChange,
  handleClose,
  handleSave
}) => (
  <React.Fragment>
    {isModalOpen && (
      <Modal size="small" open={isModalOpen} onClose={toggleModalOpen}>
        <Modal.Content>
          <Form>
            <Form.Field>
              {feeling ? (
                <Input
                  value={text}
                  onChange={handleChange}
                  name="text"
                  fluid
                  placeholder={`${feeling}`}
                />
              ) : (
                <Input
                  value={text}
                  onChange={handleChange}
                  name="text"
                  fluid
                  placeholder="how you feeling"
                />
              )}
              {clientError.text ? (
                <InlineError text={clientError.text} />
              ) : (
                <InlineHint text={"max characters: 32"} />
              )}
            </Form.Field>
            <Form.Group widths="equal">
              <Button type="button" primary onClick={handleSave} fluid>
                Save
              </Button>
              <Button type="button" fluid onClick={handleClose}>
                Cancel
              </Button>
            </Form.Group>
          </Form>
        </Modal.Content>
      </Modal>
    )}
    {!isModalOpen &&
      feeling && (
        <React.Fragment>
          <span className="">
            {feeling}{" "}
            <span onClick={toggleModalOpen} className="toggle-edit-button">
              <i className="fas fa-pencil-alt" />
              edit
            </span>
          </span>
        </React.Fragment>
      )}
    {!isModalOpen &&
      !feeling && (
        <span className="toggle-edit-button" onClick={toggleModalOpen}>
          <i className="fas fa-pencil-alt" />
          add channel feeling
        </span>
      )}
  </React.Fragment>
);

EditFeelingModal.propTypes = {
  text: PropTypes.string.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
  clientError: PropTypes.object.isRequired,
  feeling: PropTypes.string.isRequired,

  toggleModalOpen: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleSave: PropTypes.func.isRequired
};

export default EditFeelingModal;
