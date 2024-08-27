import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default function FreeSolo() {

  const [searchTerm, setSearchTerm] = React.useState('');
  const [filteredBooks, setFilteredBooks] = React.useState([]);
  const [ItemsData, setItemsData] = React.useState([]);

  const URI = "https://xenonstack-q6kv.onrender.com/books/data"

  // FETCHING BOOKS COLLECTION 

  React.useEffect(() =>{
    fetch(URI)
    .then(res => res.json())
    .then(data =>{
      setItemsData(data);
    })
  }, [])

  const handleInputChange = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    const keywords = term.split(' ').filter(Boolean);

    const filtered = ItemsData.filter((book) =>
      keywords.every((keyword) => book.title.toLowerCase().includes(keyword))
    );

    setFilteredBooks(filtered);
  };

  return (
    
    <div>
      <div className='search-bar'>
        <div className='search-bar-input'>
          <input
            type="text"
            placeholder="Search books..."
            value={searchTerm}
            onChange={handleInputChange}
            className='search-input'
          />
          <Button variant="primary" id='search-button'>Search</Button>
        </div>
        
        {searchTerm && (
          <div className='search-options'>
            <ul>
              {filteredBooks.map((book) => (
                <li key={book.id}>{book.title}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      
    </div>
  );
}
