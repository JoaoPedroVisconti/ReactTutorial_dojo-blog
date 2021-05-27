const Home = () => {
  const handleClick = () => {
    console.log('Hello, World');
  };

  const handleClickAgain = (name) => {
    console.log('Hello, ' + name);
  };

  return (
    <div className="home">
      <h2>Home Page</h2>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={() => handleClickAgain('Mario')}>CLick me Again</button>
    </div>
  );
};

export default Home;
