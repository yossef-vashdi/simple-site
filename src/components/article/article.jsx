import "./article.css";
// import logo from "../../img/testImg.jpeg";

function Article(props) {
  const { id, img, text, title } = props.content;
  !id && img && console.log("no id !");
  return (
    <div className="article">
      <div className="articleTopBar"></div>

      <pre className="articleText">
        {/* <img src={logo} alt="im img" className="articleImg" /> */}
        <p className="articleTitle">{title}</p>
        {text}
      </pre>
    </div>
  );
}

export default Article;
