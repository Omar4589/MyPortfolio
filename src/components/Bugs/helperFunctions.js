export const showBugs = () => {
    document.querySelectorAll(".hide-bug").forEach((bug, index) => {
      setTimeout(() => {
        bug.classList.remove("hide-bug");
      }, index * 300);
    });
  };

  export const hideBugs = () => {
    document
      .querySelectorAll(".bug, .bug1, .bug2, .bug3, .bug4")
      .forEach((bug) => {
        bug.classList.add("hide-bug");
      });
  };

  export const crawl1 = () => {
    setTimeout(() => {
      showBugs();
    }, 16800);

    setTimeout(() => {
      hideBugs();
    }, 19000);
  };

  export const crawl2 = () => {
    setTimeout(() => {
      showBugs();
    }, 17000);

    setTimeout(() => {
      hideBugs();
    }, 19500);
  };
