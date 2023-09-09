import { useState } from "react";
import styles from "./styles";
import Typed from "react-typed";
import "./cursor.css";


const Title = () => {
  // const [hideCursor, setHideCursor] = useState(false);

  // const handleComplete = () => {
  //   setTimeout(() => {
  //     setHideCursor(true);
  //   }, 3000); // 3000 milliseconds = 3 seconds
  // };

  return (
    <div style={{ ...styles.main }} className="text-3xl absolute top-96 pt-5 mx-5">
      <Typed
        strings={[
          "Web Developer",
          "Web Developer",
          "Fun Fact:",
          "Fun Fact: I'm afraid of bugs...",
          "Fun Fact: I'm afraid of bugs, but only those with legs!",
        ]}
        loop={true}
        typeSpeed={40}
        backSpeed={40}
        startDelay={500}
        backDelay={2500}
        cursorChar={"|"}
      />
    </div>
  );
};

export default Title;
