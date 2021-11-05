import "./article.css";
import logo from "../../img/testImg.jpeg";

function Article(props) {
  const { id, img, text, title } = props.content;
  !id && console.log("no id !");
  return (
    <div className="article">
      <div className="articleTopBar"></div>

      <pre className="articleText">
        <img src={logo} alt="im img" className="articleImg" />
        <pre className="articleTitle">{title}</pre>
        {text}
      </pre>
    </div>
  );
}

export default Article;
