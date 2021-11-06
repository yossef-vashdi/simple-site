import Article from "../article/article";
import "./main.css";
import jsonData from "../../data.json";

function Main() {
  return (
    <div className="main">
      <nav>
        <h1> Bits. </h1>
      </nav>
      <div className="container">
        {jsonData.length !== 0 &&
          jsonData.map((item) => {
            return <Article key={item.id} content={item} />;
          })}
      </div>
    </div>
  );
}

export default Main;
