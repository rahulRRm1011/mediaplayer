import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Vcard from "./Vcard";
import { getVideoApi,uploadVideo } from "../services/allApi";

const Allvideos = ({ addVideoResponse, delvideoResponse }) => {
  const [videosData, setvideosData] = useState([]);
  const [delVideoRes, setdelVideoRes] = useState([]);
  useEffect(() => {
    getVideos();
  }, [addVideoResponse, delVideoRes, delvideoResponse]);

  const getVideos = async () => {
    let result = await getVideoApi();
    if (result.status >= 200 && result.status <= 300) {
      setvideosData(result.data);
    } else {
      alert("Error fetching video data");
    }
  };
  const onDragVideo = (e) => {
    e.preventDefault();
  };
  const onVideoDrop=async(e)=>{
    console.log(e)
    let Vdata=JSON.parse(e.dataTransfer.getData('videofromcat'))
    console.log(Vdata)
    await uploadVideo(Vdata)
    await getVideos()

  }

  return (
    <>
      <h1>All Videos</h1>
      <Row
      className="rounded border p-5"
        droppable="true"
        onDragOver={(e) => onDragVideo(e)}
        onDrop={(e) => onVideoDrop(e)}
         style={{ border: "2px dashed #007bff"}}
      >
        {videosData?.map((eachvideos, index) => (
          <Col key={index} className="mx-3" lg={4} md={6} sm={12} >
            <Vcard videos={eachvideos} setdelVideoRes={setdelVideoRes} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Allvideos;
