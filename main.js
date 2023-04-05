function App() {
  const [quotes, setQuotes] = React.useState([]);
  const [randomQuote, setRandomQuote] = React.useState("");
  const [color, setColor] = React.useState("#fff");

  React.useEffect(() => {
    // fetch data
    async function fetchData() {
      const res = await fetch("https://type.fit/api/quotes");
      const data = await res.json();
      // update setQuotes state with data
      setQuotes(data);
      //provide random index to generate random quote
      let randomIndex = Math.floor(Math.random() * data.length);
      // update setRandomQuote state with data from randomeIndex
      setRandomQuote(data[randomIndex]);
    }
    fetchData();
  }, []);

  const getNewQuote = () => {
    const colors = [
      "#16a085",
      "#27ae60",
      "#2c3e50",
      "#e74c3c",
      "#77B1A9",
      "#73A857",
      "#472E32",
    ];

    let randomIndex = Math.floor(Math.random() * quotes.length);
    let randomColorIndex = Math.floor(Math.random() * colors.length);
    setRandomQuote(quotes[randomIndex]);
    setColor(colors[randomColorIndex]);
  };

  return (
    <div style={{ backgroundColor: color, minHeight: "100vh" }}>
      <div className="container pt-5">
        <div className="jumbotron">
          <div className="card">
            <div className="card-header">Inspirational Quotes</div>
            <div className="card-body">
              {randomQuote ? (
                <>
                  <h5 className="card-title">
                    - {randomQuote.author || "No Author"}
                  </h5>
                  <p className="card-text">&quot;{randomQuote.text}&quot;</p>
                </>
              ) : (
                <h2>Loading</h2>
              )}

              <div className="row">
                <button onClick={getNewQuote} className="btn btn-primary">
                  New Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
