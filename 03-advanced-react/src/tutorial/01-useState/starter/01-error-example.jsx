const ErrorExample = () => {
  let counter = 0;

  const handleBtnClick = (e) => {
    counter++;
    console.log(counter);
    document.getElementById("display").innerHTML = counter;
  };

  return (
    <div style={{ margin: "2rem auto" }}>
      <h2 id="display">{counter}</h2>
      <button type="button" className="btn" onClick={handleBtnClick}>
        Counter++
      </button>
    </div>
  );
};

export default ErrorExample;
