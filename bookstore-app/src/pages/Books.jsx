import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/books.css'

function Books() {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the books from the API
    fetch('https://inky-picturesque-bait.glitch.me/books')
      .then((response) => {
        // Check if the response is ok
        if (!response.ok) {
          throw new Error('Failed to fetch books');
        }
        return response.json();
      })
      .then((data) => {
        console.log('API Response:', data); // Log the data to inspect the structure
        if (Array.isArray(data.books)) {
          setBooks(data.books);  // Access books property from the response
        } else {
          setError('Failed to fetch books. Data format is incorrect.');
        }
      })
      .catch((error) => {
        setError(error.message);  // Handle network or API errors
      });
  }, []);

  return (
    <div>
      <h1>Books</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}  {/* Show error message if exists */}
      {books.length > 0 ? (
        books.map((book) => (
          <div key={book.id}>
            <Link to={`/books/${book.id}`}>
              <img src={book.coverImage} alt={book.name} style={{ width: '150px', height: '200px' }} />
              <p>{book.name}</p>
            </Link>
          </div>
        ))
      ) : (
        <p>Loading...</p>  /* Show loading message if no books are loaded yet */
      )}
    </div>
  );
}

export default Books;
