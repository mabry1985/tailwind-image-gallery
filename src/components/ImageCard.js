import React from 'react'

const ImageCard = ({ image }) => {
  const tags = image.tags.split(',');
  return (
    <div className="flex justify-between">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={image.webformatURL} alt="random pic" />
        <div className="px-6 py4">
          <div className="font-bold text-blue-400 text-xl my-2">
            Photo by {image.user}
          </div>
          <ul>
            <li>
              <strong className="text-blue-500">Views:</strong>
              {image.views}
            </li>
            <li>
              <strong className="text-blue-500">Downloads:</strong>
              {image.downloads}
            </li>
            <li>
              <strong className="text-blue-500">Likes:</strong>
                {image.likes}
            </li>
          </ul>
        </div>
        <div className="px-6 py-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semi-bold text-gray-700 mr-2"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ImageCard
