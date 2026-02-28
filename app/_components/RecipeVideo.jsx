// function RecipeVideo() {
//   return (
//     <main>
//       <div className="mx-3 pt-5">
//         <iframe
//           className="w-full"
//           src="https://www.youtube.com/embed/8V7y98GuvUI?si=CspZzHdpg_EPQxPH"
//           title="YouTube video player"
//           frameborder="0"
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//           referrerPolicy="strict-origin-when-cross-origin"
//           allowFullScreen
//         ></iframe>
//       </div>
//     </main>
//   );
// }
// export default RecipeVideo;

// commented above code and added lite-youtube-embed for better performance and user experience
import "lite-youtube-embed";
import "lite-youtube-embed/src/lite-yt-embed.css";

function RecipeVideo() {
  return (
    <main>
      <div className="mx-3 pt-5">
        <lite-youtube
          className="w-full aspect-video"
          videoid="8V7y98GuvUI"
        ></lite-youtube>
      </div>
    </main>
  );
}

export default RecipeVideo;
