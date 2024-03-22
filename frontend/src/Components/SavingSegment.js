import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { API_URL } from "../Constant/URL";
import axios from "axios";

const options = [
  {
    label: "First Name",
    value: "first_name",
  },
  {
    label: "Last Name",
    value: "last_name",
  },
  {
    label: "Gender",
    value: "gender",
  },
  {
    label: "Age",
    value: "age",
  },
  {
    label: "Account Name",
    value: "account_name",
  },
  {
    label: "City",
    value: "city",
  },
  {
    label: "State",
    value: "state",
  },
];

function SavingSegment() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [segmentName, setSegmentName] = useState("");
  const [segmentSchema, setSegmentSchema] = useState("");
  const HandlingName = (event) => setSegmentName(event.target.value);
  const HandlingSchema = (event) => setSegmentSchema(event.target.value);

  const PostData = async () => {
    await axios.post(API_URL, { segmentName, segmentSchema });
  };

  // Render New schemas
  const [count, setCount] = useState(0);
  const handleButtonClick = () => {
    setCount(count + 1);
    setSegmentSchema("")
  };
  const renderSelect = () => {
    return (
      <select
        className="form-select"
        value={segmentSchema}
        onChange={HandlingSchema}
      >
        <option selected>Add new Schema</option>
        {options.map((option) => (
          <option key={option.value}>{option.label}</option>
        ))}
      </select>
    );
  };

  return (
    <>
      <div
        className="container d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <Button className="btn btn-success" onClick={handleShow}>
          Save Segment
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="text-white bg-info">
          <Modal.Title>Saving Segment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <label htmlFor="segment-name" className="form-label">
              Enter the Name of the Segment
            </label>
            <input
              type="text"
              placeholder="Name of the Segment"
              className="form-control"
              id="segment-name"
              value={segmentName}
              onChange={HandlingName}
            />
            <p className="my-3">
              To save your segment, you need to add the schemas to build the
              query
            </p>
            <div className="border border-primary">
                {[...Array(count)].map((_, index) => (
                <div key={index}>
                  {renderSelect()}
                  <br />
                </div>
                ))}
            </div>

            <select
              className="form-select my-2"
              value={segmentSchema}
              onChange={HandlingSchema}
              disabled={count}
            >
              <option selected>Add Schema to Segment</option>
              {options.map((option) => (
                <option key={option.value}>{option.label}</option>
              ))}
            </select>
            <button
              type="button"
              className="btn btn-link text-success fw-bold"
              onClick={handleButtonClick}
            >
              +Add new Schema
            </button>
          </Form>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-start">
          <Button className="bg-success" onClick={PostData}>
            Save the Segment
          </Button>
          <Button className="bg-white text-danger border-0" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal> 
    </>
  );
}

export default SavingSegment;
