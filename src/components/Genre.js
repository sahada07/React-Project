import React, { useState, useContext } from "react";
import Header from "./Header";
import Deals from "./Deals";
import Footer from "./Footer";
import { CartContext } from "../CartContext";  // Import CartContext

const Genre = ({ books }) => {
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  // Access addToCart from CartContext
  const { addToCart } = useContext(CartContext);

  const handleSearch = (term) => {
    setSearchTerm(term); // Update the search term state
  };

  const filteredBooks = books.filter((book) => {
    const matchesGenre = selectedGenre === "All" || book.genre === selectedGenre;
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesGenre && matchesSearch;
  });

  return (
    <div className="genre-container">
      <Header onSearch={(term) => setSearchTerm(term)} />

      <section className="genre" id="genre">
        <h1 className="heading">
          <span>All Genre</span>
        </h1>

        {/* Dropdown to select genre */}
        <div>
          <select value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)}>
            <option value="All">All</option>
            <option value="featured">featured</option>
            <option value="adventure">adventure</option>
            <option value="philosophy">philosophy</option>
            <option value="science fiction">science fiction</option>
            <option value="business">business</option>
          </select>
        </div>

        {/* Book list filtered by genre and search term */}
        <div className="swiper genre-slider">
          <div className="swiper-wrapper">
            {filteredBooks.map((book) => (
              <div className="swiper-slide box" key={book.book_id}>
                <div className="icons">
                  <a href="#" className="fas fa-search"></a>
                  <a href="#" className="fas fa-heart"></a>
                  <a href="#" className="fas fa-eye"></a>
                </div>

                <div className="image">
                  <img src={book.image} alt={book.title} />
                </div>

                <div className="content">
                  <h3>{book.title}</h3>
                  <div className="price">
                    ${book.price} <span>$20.99</span>
                  </div>
                  {/* Update Add to Cart button */}
                  <button 
                    className="btn"
                    onClick={() => addToCart(book)}  // Call addToCart on button click
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Deals />
      <Footer />
    </div>
  );
};

export default Genre;
