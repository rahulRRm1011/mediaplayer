import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FloatingLabel, Form } from "react-bootstrap";
import { uploadVideo } from "../services/allApi";

const Add = ({setaddVideoResponse}) => {
  const [show, setShow] = useState(false);
  const [invalidYtubelink, setinvalidYtubelink] = useState(false);
  const [videoDetails, setvideoDetails] = useState({
    caption: "",
    imageURL: "",
    youtubeLink: "",
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const ConverttoId = (videoURL) => {
    if (videoURL.includes(".be/")) {
      let videoId = videoURL.slice(17, 28);
      // https://www.youtube.com/watch?v=eIGivU0hQ14
      setvideoDetails({
        ...videoDetails,
        youtubeLink: `https://www.youtube.com/embed/${videoId}`,
      });
    } else {
      setinvalidYtubelink(true);
      console.error("Invalid youtube link");
    }
  };

  const onAddclick = async () => {
    if (
      videoDetails.caption &&
      videoDetails.imageURL &&
      videoDetails.youtubeLink
    ) {
      let result = await uploadVideo(videoDetails);
      console.log(result);
      if (result.status >= 200 && result.status <= 300) {
        alert("Successfuly added your video");
        setaddVideoResponse(result)
        handleClose();
      }
       else{
        alert("something went wrong contact the admin")
       }
    }
     else {
      alert("Fill the details");
    }
  };
  return (
    <>
      <div className="d-flex align-items-center ">
        <h3>Upload new video</h3>
        <button
          onClick={handleShow}
          className="ms-2 btn btn-warning rounded-circle fs-5 fw-bolder"
          style={{ width: "40px", height: "40px", padding: 0 }}
        >
          +
        </button>
        <Modal
          style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;" }}
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Upload your video details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <FloatingLabel
                controlId="floatingInputVideocaption"
                label="Video Caption"
                className="mb-2 w-100"
              >
                <Form.Control
                  onChange={(e) =>
                    setvideoDetails({
                      ...videoDetails,
                      caption: e.target.value,
                    })
                  }
                  type="text"
                  placeholder=""
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInputVideoimageURL"
                label="Video image URL"
                className="mb-2 w-100"
              >
                <Form.Control
                  onChange={(e) =>
                    setvideoDetails({
                      ...videoDetails,
                      imageURL: e.target.value,
                    })
                  }
                  type="text"
                  placeholder=""
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInputYoutubevideolink"
                label="Youtube Video link"
                className="mb-2 w-100"
              >
                <Form.Control
                  onChange={(e) => ConverttoId(e.target.value)}
                  type="text"
                  placeholder=""
                />
              </FloatingLabel>
            </div>
            {invalidYtubelink ? (
              <span className="text-center fs-2 text-danger">
                Invalid youtube link
              </span>
            ) : (
              ""
            )}
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button
              variant="primary"
              onClick={onAddclick}
              disabled={invalidYtubelink}
            >
              Add
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default Add;
