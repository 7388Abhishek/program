import React from 'react';

const johnCenaImages = [
  'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/John_Cena_July_2018.jpg/440px-John_Cena_July_2018.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/John_Cena_at_2018_San_Diego_Comic-Con.jpg/440px-John_Cena_at_2018_San_Diego_Comic-Con.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/John_Cena_2.jpg/440px-John_Cena_2.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/John_Cena_in_2012.jpg/440px-John_Cena_in_2012.jpg'
];

const App = () => {
  return (
    <div style={styles.container}>
      <h1>💪 John Cena Gallery</h1>
      <p>You can't see him... but you can see these!</p>
      <div style={styles.grid}>
        {johnCenaImages.map((url, index) => (
          <div key={index} style={styles.card}>
            <img src={url} alt={`John Cena ${index + 1}`} style={styles.image} />
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    padding: '20px'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
    gap: '20px',
    marginTop: '20px'
  },
  card: {
    backgroundColor: '#f0f0f0',
    padding: '10px',
    borderRadius: '8px'
  },
  image: {
    width: '100%',
    borderRadius: '6px'
  }
};

export default App;
