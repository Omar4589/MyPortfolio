import "./bugs.css";
import { crawl1, crawl2 } from "./helperFunctions";

const Bugs = () => {
  crawl1();
  setInterval(() => {
    crawl2();
  }, 21800);

  return (
    <div>
      <span style={{ zIndex:2  }} className="hide-bug bug">🪲 </span>
      <span style={{ zIndex:2  }} className="hide-bug bug1">🪲 </span>
      <span style={{ zIndex:2  }} className="hide-bug bug2">🪲 </span>
      <span style={{ zIndex:2  }} className="hide-bug bug3">🪲 </span>
      <span style={{ zIndex:2  }} className="hide-bug bug4">🪲 </span>
    </div>
  );
};

export default Bugs;
