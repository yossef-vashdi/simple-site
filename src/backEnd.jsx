import axios from "axios";
import "./backEnd.css";
import { useState, useRef } from "react";

function BackEnd() {
  const [response, setResponse] = useState("");
  const [counter, setCounter] = useState(0);
  const buttonState = useRef();
  const handleButton = async () => {
    buttonState.current.disabled = true;
    setCounter((pre) => pre + 1);
    const res = await axios(
      "https://procrastination-simple-site.herokuapp.com/"
    );
    res.data && setResponse(res.data);
    buttonState.current.disabled = false;
  };
  return (
    <div className="back-end">
      <h1>Sending simple requests to server</h1>
      <p> please click the button to send a request to the server</p>
      <button onClick={handleButton} ref={buttonState}>
        Send !
      </button>
      <h4>
        {response &&
          `You've sent ${counter} requests, The server response is : ${response}`}
      </h4>
    </div>
  );
}

export default BackEnd;
