import React, { useEffect, useState } from "react";
import "./App.css";
import CardItems from "./Components/CardItems";
import Button from "./Components/button";
import SearchBox from "./Components/searchBox";
import { Container, Row, Col } from "react-bootstrap";
import { myQuery1 } from "./Components/graphql";

function App() {
  const [episodeList, setEpisodeList] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [textBoxValue, setTextBoxValue] = useState("");
  const [disabled, setDisabled] = useState(true);
  const myQuery = `
    query{
    episodes(page: ${page}) {
      info {
        count
        pages
      }
      results {
        name
        id
        air_date
      }
    }
}`;

  const previous = () => {
    setPage(page - 1);
  };

  const next = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    fetch("https://rickandmortyapi.com/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: myQuery1,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setTotalPages(res.data.episodes.info.pages);
        setEpisodeList(res.data.episodes.results);
        setDisabled(false);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: myQuery,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setTotalPages(res.data.episodes.info.pages);
        setEpisodeList(res.data.episodes.results);
        setDisabled(false);
      })
      .catch((error) => console.log(error));
  }, [myQuery]);

  const onChangeHandler = (e) => {
    setTextBoxValue(e.target.value);
  };

  const filteredItems = episodeList.filter((monster) =>
    monster.name.toLowerCase().includes(textBoxValue.toLowerCase())
  );

  return (
    <Container>
      <Row>
        <Col xs={12} sm={12} md={12}>
          <div className="headerDiv">
            <h1>Rick and Morty Episodes</h1>
            <SearchBox handleInputChange={onChangeHandler} />
          </div>
        </Col>
        <Col xs={12} sm={12} md={12}>
          <div className="displayItems">
            {filteredItems.map((episode) => (
              <Col xs={12} sm={12} md={12} key={episode.id}>
                <CardItems episode={episode} />
              </Col>
            ))}
          </div>
        </Col>
        <Col>
          <div className="buttonsDiv">
            <Button
              name="Previous"
              disabled={disabled || page === 1}
              onClick={previous}
            />
            <span> page {page ? page : "1"} </span>
            <Button
              name="Next"
              disabled={disabled || page === totalPages}
              onClick={next}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
