import { useContext, useState } from "react";
import { SearchContext, SearchEventContext } from "react-ctrl-f";

export const SearchComponent = () => {
  //   const { searchValue, activeCount, totalCount } = useContext(SearchContext);
  //   const { onSearchChange, onPrev, onNext } = useContext(SearchEventContext);
  const [searchValue, setSearchValue] = useState("");
    const [classNames, setClassNames] = useState() as [HTMLCollectionOf<Element>, any]
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // get classNames that match the searchValue
    // classNames = 
          console.log(classNames);

    if (classNames) {
        // scroll to the first match
        
        var count = 10;
          while (count > 0) {
            
            setTimeout(() => {
            classNames[0].scrollIntoView({
              behavior: "auto",
              block: "center",
              inline: "center",
            });
            count -= 1;

            }
            , 100);
            
          }
    }
    
    // loop through classNames and add a class to them
    // for (let i = 0; i < classNames.length; i++) {
    //     console.log(classNames[i]);
    // }
        


  };
  return (
    <form onSubmit={handleSubmit} style={{ padding: 16, zIndex: 16695055, position: "fixed" }}>
      <input
        style={{ width: 200, marginRight: "12px", height: "24px" }}
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
          setClassNames(document.getElementsByClassName(e.target.value));
          
        }}
      />
      <button
        style={{ height: "28px" }}
        title="Up"
        //   onClick={onPrev}
      >
        Prev
      </button>
      <span style={{ padding: "0px 12px" }}>
        {/* {activeCount}/{totalCount} */}
      </span>
      <button
        style={{ height: "28px" }}
        title="Down"
        //   onClick={onNext}
      >
        Next
      </button>
      <input type="submit" />
    </form>
  );
};

export default SearchComponent;
