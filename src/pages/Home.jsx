import React from "react";
import { Link } from "react-router-dom";

import Allvideos from "../Components/Allvideos";
import Allcategories from "../Components/Allcategories";
import Add from "../Components/Add";
import { useState } from "react";

const Home = () => {
  const [addVideoResponse,setaddVideoResponse] = useState([])
  const [delvideoResponse,setdelvideoResponse] = useState([])
  return (
    <div>
      <div className="container d-flex justify-content-between my-4">
        <Add setaddVideoResponse={setaddVideoResponse}/>
        <Link to={"/history"}>Watch History</Link>
      </div>
      <div className="container-fluid row ">
        <div className="col-lg-6">
          <Allvideos addVideoResponse={addVideoResponse} delvideoResponse={delvideoResponse}/>
        </div>
        <div className="col-lg-6">
          <Allcategories setdelvideoResponse={setdelvideoResponse}/>
        </div>
      </div>
    </div>
  );
};

export default Home;
