import React, { useState } from "react";
import unsplash from "./api/unsplash";
import ImageList from "./Component/ImageList";
import SearchBar from "./Component/Searchbar";

function App() {
  const [images, setImages] = useState([]);
  const onSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });
    setImages(response.data.results);
  };
  return (
    <div className="ui container" style={{ marginTop: "10px" }}>
      <SearchBar onSubmitTerm={onSearchSubmit} />
      <p style={{ textAlign: "center", fontSize: "2em" }}>
        Double click on image to copy url
      </p>
      <ImageList images={images} />
    </div>
  );
}

export default App;
