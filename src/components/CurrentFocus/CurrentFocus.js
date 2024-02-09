import reactLogo from "../../assets/svgs/react.svg";

const CurrentFocus = () => {
  return (
    <div className="w-full relative mt-20 md:mt-0 z-10 flex justify-around items-center mx-6 md:mx-12 lg:mx-20 xl:mx-36 ">
      <div className="flex flex-col space-y-2 lg:space-y-4">
        <h1 className="text-xl text-center md:text-left md:text-2xl xl:text-2xl  font-robotoBlack">MY CURRENT FOCUS</h1>

        <div className="flex flex-col space-y-4 lg:space-y-6 text-md lg:text-lg xl:text-xl font-robotoLight md:mx-3">
          <div className="align-bottom">
            <span>
              I'm currently embarked on an exciting journey developing my first
            </span>{" "}
            <a href="https://reactnative.dev/" className="rnEffect">
              <img
                src={reactLogo}
                alt="react logo"
                className="h-6 md:h-8 inline-block align-bottom react-logo"
              />{" "}
              <span className="font-robotoM text-lg md:text-xl xl:text-2xl underline-from-left">
                React Native
              </span>
            </a>{" "}
            <span>
              app, a project that not only challenges me but also serves a
              meaningful purpose for my community. This app aims to bridge the
              gap between the residents of my city and the local city services
              department by providing a digital platform for submitting service
              requests. Given that my city lacks a digital means for such
              submissions—relying solely on phone calls—this app represents a
              significant step forward.
            </span>
          </div>

          <p>
            The app connects to a shared server/database/API setup, utilizing{" "}
            <span className="font-robotoM">Express</span> for the server and{" "}
            <span className="font-robotoM">MongoDB</span> for the database, all
            orchestrated through a{" "}
            <span className="font-robotoM">GraphQL API</span>. This ensures a
            seamless flow of information between the React Native app used by
            residents and a React web app, which acts as an admin portal for
            city services to view and manage these requests.
          </p>
          <p>
            This project is not just a technical endeavor but a solution aimed
            at improving local infrastructure and community service
            responsiveness. I'm applying what I've learned about web development
            to make this app a reality. If anyone has experience with similar
            projects, or tips and tricks for a budding React Native developer,
            I'd greatly appreciate your insights!
          </p>
        </div>
      </div>
    </div>
  );
};

export default CurrentFocus;
