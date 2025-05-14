import React from "react";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import { deletehisApi, getHistoryApi } from "../services/allApi";
import { useState, useEffect } from "react";

const History = () => {
  const [historyData, sethistoryData] = useState([]);

  useEffect(() => {
    gethistoryData();
  }, []);

  const gethistoryData = async () => {
    let result = await getHistoryApi();
    sethistoryData(result.data);
  };

  const deleteHistory = async (id) => {
    await deletehisApi(id);

    gethistoryData();
  };

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="text-warning">Watch History</h2>
        <Link to="/home" className="btn btn-outline-primary">
          Back to Home
        </Link>
      </div>

      <Table striped bordered hover responsive>
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Caption</th>
            <th>Link</th>
            <th>Timestamp</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {historyData?.map((eachHis, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{eachHis.caption}</td>
              <td>{eachHis.link}</td>
              <td>{eachHis.currentDate}</td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteHistory(eachHis.id)}
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default History;
