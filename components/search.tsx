import { useState } from "react";

export const SearchComponent = () => {
  const [searchValue, setSearchValue] = useState("");
  const [classNames, setClassNames] = useState() as [
    HTMLCollectionOf<Element>,
    any
  ];
  const [totalCount, setTotalCount] = useState(0);
  const [currentCount, setCurrentCount] = useState(0);

  let index = 0;
  let counter: number;
  // let previousScrollTop = 0;
  // let currentScrollTop = 0;
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // check if the decrement or increment button is clicked
      if (currentCount < totalCount) {
        index = currentCount;
        setCurrentCount((curr) => curr + 1);
      } else {
        setCurrentCount(0);
        index = 0;
      }

    if (classNames[index]) {
      classNames[index].scrollIntoView({
        behavior: "auto",
        block: "center",
        // inline: "center",
      });
      // check if we can increment more

      counter = 0;
      // scroll to the first match
      let loop = setInterval(() => {
        // currentScrollTop = window.innerHeight;
        // if (currentScrollTop > previousScrollTop) {
        //   console.log("Scrolling down");
        // } else {
        //   console.log("Scrolling up");
        // }
        // previousScrollTop = currentScrollTop;
        classNames[index].scrollIntoView({
          behavior: "auto",
          block: "center",
          // inline: "center",
        });
        counter++;
        if (
          // classNames[index].getBoundingClientRect().top >=
          //   window.innerHeight * 0.4 &&
          // classNames[index].getBoundingClientRect().bottom <=
          //   window.innerHeight * 0.6
          counter >= 7
        ) {
          // window.scrollTo(0, -100);

          clearInterval(loop);
        }
      }, 80);
    }

  };

  return (
    <form
    // id='search'
      // onSubmit={handleSubmit}
      style={{ padding: 16, zIndex: 166910055, position: "fixed" }}
    >
      <input
        style={{ width: 100, marginRight: "12px", height: "24px" }}
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
          setClassNames(
            document.getElementsByClassName(e.target.value.toLowerCase())
          );
          // get classNames that match the searchValue
          setTotalCount(document.getElementsByClassName(e.target.value).length);
          setCurrentCount(0);
        }}
      />
      <span style={{ padding: "0px 12px" }}>
        {currentCount}/{totalCount}
      </span>
      <input type="submit" />
    </form>
  );
};

export default SearchComponent;
