import Typed from "react-typed";

const Title = () => {
  // const [hideCursor, setHideCursor] = useState(false);

  // const handleComplete = () => {
  //   setTimeout(() => {
  //     setHideCursor(true);
  //   }, 3000); // 3000 milliseconds = 3 seconds
  // };

  return (
    <div
      id="title-container"
      className="text-3xl relative z-10  md:text-3xl lg:text-4xl select-none font-robotoItalic "
    >
      <Typed
        strings={["Web Developer", "Web Developer"]}
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
