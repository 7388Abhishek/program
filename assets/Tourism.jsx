import React from 'react';

function App() {
  return (
    <div className="app">
      {/* Hero Section */}
      <header className="hero">
        <h1>Incredible India</h1>
        <p>Experience the colors, culture, and charm of India</p>
        <a href="#destinations">Explore Destinations</a>
      </header>

      {/* Destinations Section */}
      <section id="destinations" className="section">
        <h2>Top Destinations</h2>
        <div className="cards">
          <div className="card">
            <img src="https://source.unsplash.com/400x300/?taj-mahal" alt="Taj Mahal" />
            <h3>Agra</h3>
            <p>Home to the iconic Taj Mahal, a symbol of love and architecture.</p>
          </div>
          <div className="card">
            <img src="https://source.unsplash.com/400x300/?jaipur" alt="Jaipur" />
            <h3>Jaipur</h3>
            <p>The Pink City offers royal palaces, forts, and vibrant bazaars.</p>
          </div>
          <div className="card">
            <img src="https://source.unsplash.com/400x300/?kerala" alt="Kerala" />
            <h3>Kerala</h3>
            <p>Known for its serene backwaters, greenery, and houseboats.</p>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="section">
        <h2>Rich Cultural Heritage</h2>
        <p>
          India is a land of festivals, traditions, languages, and religions. From colorful Holi and Diwali to serene Buddhist monasteries and vibrant dance forms like Kathak and Bharatanatyam — each state tells a different story.
        </p>
      </section>

      {/* Contact Section */}
      <footer className="footer">
        <h2>Plan Your Journey</h2>
        <p>Email: info@incredibleindia.com</p>
        <p>Phone: +91-12345-67890</p>
        <p>&copy; 2025 Incredible India Tourism</p>
      </footer>
    </div>
  );
}

export default App;
