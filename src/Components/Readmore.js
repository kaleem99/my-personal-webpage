import React, { useState } from 'react';

const ReadMore = ({ text, maxLength }) => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleShowFullText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <div>
      {showFullText ? text : `${text.slice(0, maxLength)}...`}
      {showFullText ? (
        <button onClick={toggleShowFullText}>Read Less</button>
      ) : (
        <button onClick={toggleShowFullText}>Read More</button>
      )}
    </div>
  );
};

export default ReadMore;
