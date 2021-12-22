import React from "react";
import "./main.css";

function Main() {
  return (
    <div>
      <main className="main-card">
        <h1>
          Hi ! my name is yossi <br /> and I'm passionate about coding.
        </h1>
        <img
          src={require("../../img/my avatar.jpeg")}
          className="my-avatar"
          alt="author"
        />
      </main>
      <article className="articles">
        <div>
          <h2>Basic form</h2>
          <p>
            one of the basic things every developer must know is to build form,
            so I did something simple. we have form with two inputs, submit
            button, and after submit the content is inserted into a list which
            is rendered below the form.
          </p>
          <ul>
            <legend>Contain :</legend>
            <li>form</li>
            <li>inputs</li>
            <li>saves values after submission</li>
            <li>renders the values</li>
          </ul>
        </div>
        <a href="http://localhost:3000/form" target="_blank" rel="noreferrer">
          <img src={require("../../img/form.jpg")} alt="form" />
          click to see
        </a>
      </article>
      <article className="articles">
        <div>
          <h2>Basic back end</h2>
          <p>
            one of the basic things every full-stack-developer must know is to
            build back end, so I did something simple. we have listener (using
            express), and an end point to deal with requests. (includes front
            end to present the response).
          </p>
          <ul>
            <legend>Contain :</legend>
            <li>listener</li>
            <li>end point</li>
            <li>front-end to send request and present response</li>
          </ul>
        </div>
        <a
          href="http://localhost:3000/back-end"
          target="_blank"
          rel="noreferrer"
        >
          <img src={require("../../img/back end.jpg")} alt="back end" />
          click to see
        </a>
      </article>
    </div>
  );
}

export default Main;
