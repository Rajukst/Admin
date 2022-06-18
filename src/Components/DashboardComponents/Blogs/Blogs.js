import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import SetBlogs from "./SetBlogs";

const Blogs = () => {
  const [myBlogs, setMyBlogs] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((data) => setMyBlogs(data));
  }, []);
  return (
    <Row xs={1} md={4} lg={4} className="g-4">
      {myBlogs.slice(0, 30).map((getMyBlogs) => (
        <SetBlogs key={getMyBlogs.id} getAllBlogs={getMyBlogs}></SetBlogs>
      ))}
    </Row>
  );
};

export default Blogs;
