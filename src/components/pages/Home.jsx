import mainLogo from "../../assets/mainLogo.png";
import BackgroundVideo from "../../assets/BackgroundVideo.mp4";
import "./home.css";

export default function Home() {
  return (
    <>
      <div className="hero">
        <video muted loop={true} autoPlay={true}>
          <source src={BackgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <img src={mainLogo} alt="MACRO4BIM" />
        <h2>BLOG ON BIM DIGITAL TECHNOLOGY IN THE AEC INDUSTRY</h2>
      </div>
      <h1>Macro4BIM</h1>
      <h2>What do we do</h2>
      <h3>Blogging & Research</h3>
      <p>
        Macro4BIM is a blog focused on digital design and consulting within the
        Architecture, Engineering, and Construction (AEC) industry. It covers topics
        related to Building Information Modeling (BIM) and computational BIM, particularly
        the advanced use of platforms like Dynamo and Python code. The blog provides
        insights, tools, and solutions for professionals such as BIM specialists,
        coordinators, and developers.
      </p>
      <p>
        Here you will find many interesting solutions explained in hopefully funny and
        pleasant posts that aims to help you in your work as well as educate you on how
        the solution was achieved... yes, we like to explain the script, not only share!
        😁
      </p>
    </>
  );
}
