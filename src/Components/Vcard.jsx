import React, { useState } from "react";
import { Card, Modal } from "react-bootstrap";
import { addHistory, deleteAllVideos } from "../services/allApi";


const Vcard = ({ videos, setdelVideoRes,insideCategory}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    const currentDate = new Date();
    const caption = videos.caption;
    const link = videos.youtubeLink;

    const reqObj = {
      currentDate,
      caption,
      link,
    };
    let result = await addHistory(reqObj);
    console.log(result);

    setShow(true);
  };
  const deleteVideos = async (id) => {
    let result = await deleteAllVideos(id);
    setdelVideoRes(result);
  };

  const videoDrag = (e,id) => {
    console.log(id);
    console.log(e);
    e.dataTransfer.setData('videoId',id)
  };

  return (
    <>
      <Card
        style={{ width: "15rem", height: "100%" }}
        draggable="true"
        onDragStart={(e) => videoDrag(e,videos?.id)}
      >
        <Card.Img
          onClick={handleShow}
          variant="top"
          src={videos.imageURL}
          style={{ height: "180px", objectFit: "cover", cursor: "pointer" }}
        />
        <Card.Body>
          <div className="d-flex justify-content-between align-items-center">
            <h4>{videos?.caption}</h4>
            {insideCategory?<span></span>: <button className="btn" onClick={() => deleteVideos(videos.id)}>
              <i className="fa-solid fa-trash"></i>
            </button>}
           
          </div>
        </Card.Body>
      </Card>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={true}
        centered
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>{videos?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            width="100%"
            height="355"
            src={`${videos?.youtubeLink}?autoplay=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};

export default Vcard;
