import React from "react";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FloatingLabel, Form } from "react-bootstrap";
import {
  addCategory,
  getCategoryApi,
  singleVideo,
  updatecategoryApi,
  deleteAllVideos,
  deleteCategoryApi,
} from "../services/allApi";
import Vcard from "./Vcard";

const Allcategories = ({ setdelvideoResponse }) => {
  const [show, setShow] = useState(false);
  const [categoryName, setcategoryName] = useState("");
  const [categoryData, setcategoryData] = useState("");

  useEffect(() => {
    getAllCategory();
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addCategoryclick = async () => {
    const reqObj = {
      categoryName,
      videos: [],
    };
    let result = await addCategory(reqObj);
    handleClose();
    getAllCategory();
    console.log(result);
  };

  const getAllCategory = async () => {
    let res = await getCategoryApi();
    setcategoryData(res.data);
    console.log(categoryData);
  };

  const onVideoDrop = async (e, eachData) => {
    console.log(e);
    console.log(eachData);

    console.log(e.dataTransfer.getData("videoId"));
    let vId = e.dataTransfer.getData("videoId");
    let result = await singleVideo(vId);

    console.log(result);
    eachData.videos.push(result.data);
    let updateResult = await updatecategoryApi(eachData.id, categoryData);
    if (updateResult.status == 200) {
      let delRes = await deleteAllVideos(vId);
      setdelvideoResponse(delRes);
    }
    console.log(updateResult);
  };
  const onDragging = (e) => {
    e.preventDefault();
  };
  const onDeleteClick = async (id) => {
    await deleteCategoryApi(id);
    await getAllCategory();
  };
      const onVideoDrag=async(e,category,video)=>{

        // console.log(e)
        // console.log(category)
        // console.log(video)
        let stringData = JSON.stringify(video)
        // console.log(stringData)
       e.dataTransfer.setData('videofromCat',stringData)
      //  console.log(e)
       let newCatArr=category.videos.filter((item)=>item.id!=video.id)
       console.log(newCatArr)
       let id=category.id
       let categoryName=category.categoryName

       const reqObj ={
        id,categoryName,videos:newCatArr
       }
       await updatecategoryApi(reqObj)
       getAllCategory()
      }
  
  return (
    <>
      <div className="d-flex justify-content-around">
        <h1>All Categories</h1>
        <button
          onClick={handleShow}
          className="ms-2 btn btn-warning rounded-circle fs-5 fw-bolder"
          style={{ width: "40px", height: "40px", padding: 0 }}
        >
          +
        </button>
      </div>
      {categoryData?.length > 0 ? (
        <div className="container-fluid">
        <div className="row">
          {categoryData.map((eachData, index) => (
            <div className="col-lg-6 mb-4" key={index}>
              <div
                onDragOver={onDragging}
                onDrop={(e) => onVideoDrop(e, eachData)}
                className="card shadow-sm p-3 h-100"
                style={{ border: "2px dashed #007bff", minHeight: "250px",minWidth:"500px"}}
              >
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h4 className="text-primary fw-bold">{eachData.categoryName}</h4>
                  <Button
                    variant="outline-danger"
                    size="sm"
                    onClick={() => onDeleteClick(eachData.id)}
                  >
                    <i className="fa-solid fa-trash"></i>
                  </Button>
                </div>
                {eachData?.videos?.length > 0 ? (
                  <div className="row">
                    {eachData.videos.map((eachVideo, vidIndex) => (
                      <div draggable="true" onDragStart={(e)=>onVideoDrag(e,eachData,eachVideo)} className="col-md-6 mb-3" key={vidIndex}>
                        <Vcard videos={eachVideo} insideCategory={true} />
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted">Drop videos here</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      ) : (
        <div>No categories found</div>
      )}

      <Modal
        style={{ boxShadow: "rgba(0, 0, 0, 0.5) 0px 5px 15px" }}
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Add category details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="border rounded p-1">
            <FloatingLabel
              controlId="floatingInputcategory"
              label="Input category"
              className="mb-2 w-100"
            >
              <Form.Control
                onChange={(e) => setcategoryName(e.target.value)}
                type="text"
                placeholder=""
                value={categoryName}
              />
            </FloatingLabel>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addCategoryclick}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Allcategories;
