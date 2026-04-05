function Home({ startLoading, stopLoading }) {
  const handleClick = () => {
    startLoading();

    setTimeout(() => {
      stopLoading();
    }, 1500);
  };

  return (
    <button onClick={handleClick}>
      
    </button>
  );
}

export default Home;
