import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function BookDetail() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch(`https://inky-picturesque-bait.glitch.me/books/${id}`)
      .then((response) => response.json())
      .then((data) => setBook(data));
  }, [id]);

  return (
    <div>
      {book ? (
        <div>
          <h2>{book.name}</h2>
          <p>Category: {book.category}</p>
          <p>Price: {book.price}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
export default BookDetail;