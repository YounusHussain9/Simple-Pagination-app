import { useState, useEffect } from "react";
import axios from "axios";
import Posts from "./components/post/Posts";
import Pagination from "./components/pagination/Pagination";
import "./App.css";

function App() {
  //state declaration
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(10);

  //function for receive fake data
  const getData = async () => {
    setIsLoading(true);
    const responce = await axios.get(
      `https://jsonplaceholder.typicode.com/posts`
    );
    setPosts(responce.data);
    setIsLoading(false);
  };

  //useEffect hook run to get data once when render
  useEffect(() => {
    getData();
  }, []);

  //variable declaration
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currPage = posts.slice(indexOfFirstPost, indexOfLastPost);

  //set paginate
  const paginate = (pagenumber) => setCurrentPage(pagenumber);

  return (
    <>
      <h1>Simple pagination with React</h1>
      <Posts post={currPage} loading={isLoading} />
      <Pagination
        postperpage={postPerPage}
        totalPost={posts.length}
        paginate={paginate}
      />
    </>
  );
}

export default App;
