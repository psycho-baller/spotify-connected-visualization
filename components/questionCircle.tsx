import { FaQuestion } from "react-icons/fa";
import Footer from "./footer";


export default function FloatingButton() {
  return (
      <div className="floating-button adjust-z">
        {/* <i className="fas fa-question-circle adjust-z"></i> */}

        <FaQuestion className="adjust-z" />
        <div className="invisible-space"/>
        <div className="popover adjust-z">
          <p className=" text-purple-200">
            <strong className="text-purple-100">What is this?</strong>
            <br />
            {/* <br /> */}
            This is a visual representation of my favorite songs of for each of
            the 53 weeks of 2022... but for each song, you can see the
            people&apos;s instagram accounts that I think of when I listen to
            it.
            <br />
            <br />
            <strong className="text-purple-100">How can I find my song?</strong>
            <br />
            {/* <br /> */}
            You can search up your instagram username using the search bar
            above. The current method of finding the username is not the most
            accurate but it does get you close enough for most songs
            {/* search for your song by name, artist, or album. If you can't find your song, it's probably because I don't have it in my playlist. You can add it to my playlist by clicking the "Add to Playlist" button on the song page. */}
          </p>
          <br />
          <Footer />
        </div>
      </div>
  );
}