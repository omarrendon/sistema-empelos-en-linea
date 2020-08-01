import React, { useState, useEffect } from "react";
import { Row, Col, Card } from "react-bootstrap";
import axios from "axios";
import PropuestasMap from "./PropuestasMap";
import Pagination from "./Pagination";
import "./Styles/Propuestas.css";


function Propuestas() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await axios.get("http://localhost:4000/api/cxp/", {});
      setData(response.data.cxps);
      setLoading(false);
    };
    fetchData();
  }, []);

  console.log(data);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPost = data.slice(indexOfFirstPost, indexOfLastPost);
  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <Row>
      <Col md={12} sm={12} xs={12} className="root">
        <p className="h2 mt-5">Mis Propuestas</p>
        <Card className="border border-dark mt-3 card-pricipal">
          <PropuestasMap post={currentPost} loading={loading} />
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={data.length}
            paginate={paginate}
          />
        </Card>
      </Col>
    </Row>
  );
}

export default Propuestas;