import "./NotFound.css";
function Notfound() {
  return (
    //Ruta 404 Not Found
    <div className="not-found">
      <div className="warning">
        <i className="fa-solid fa-triangle-exclamation"></i>
        <h2>404 Not Found</h2>
        <i className="fa-solid fa-triangle-exclamation"></i>
      </div>
      <p>
        I can't find this page because it doesn't exist.
        Try again with another route.
      </p>
    </div>
  );
}

export default Notfound;