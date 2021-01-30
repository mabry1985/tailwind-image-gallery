import React, { useState, useEffect } from "react";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${query}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="flex justify-between">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img
          className="w-full"
          src="https://source.unsplash.com/random"
          alt="random pic"
        />
        <div className="px-6 py4">
          <div className="font-bold text-purple-500 text-xl my-2">
            Photo by Josh Mabry
          </div>
          <ul>
            <li>
              <strong>Views:</strong>
              4000
            </li>
            <li>
              <strong>Downloads:</strong>
              4000
            </li>
            <li>
              <strong>Likes:</strong>
              4000
            </li>
          </ul>
        </div>
        <div className="px-6 py-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semi-bold text-gray-700 mr-2">
            #tag1
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semi-bold text-gray-700 mr-2">
            #tag2
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semi-bold text-gray-700 mr-2">
            #tag3
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
