import "./formTesting.css";
import { useState } from "react";

function FormTesting() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setList((previousList) => [{ name, message }, ...previousList]);
    setName("");
    setMessage("");
  };
  return (
    <div>
      <div className="form-testing">
        <form onSubmit={handleSubmit}>
          <h3>Hi hun ! Add a message </h3>
          <hr />
          <label htmlFor="name">Name: </label>
          <br />
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <label htmlFor="message">message:</label>
          <br />

          <textarea
            type="text"
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <br />
          <button type="submit">Add !</button>
        </form>
      </div>
      <div className="rendered-list">
        <h2>My list !</h2>
        <hr />
        {list.length !== 0 &&
          list.map((item, i) => (
            <div className="list-item" key={i}>
              <h4>{item.name}</h4>
              <p>{item.message}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default FormTesting;
