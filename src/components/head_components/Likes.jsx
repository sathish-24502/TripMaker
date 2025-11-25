import React, { useState } from "react";
import { FaThumbsDown, FaThumbsUp } from "react-icons/fa";

export default function LikeCounter() {
  var Num = 0;

  const [Like, SetLike] = useState(Num);
  const [UnLike, SetUnLikeCount] = useState(Num);

  function handleLike() {
    SetLike((prev) => prev + 1);
  }

  function handleUnLike() {
    SetUnLikeCount((prev) => prev + 1);
  }

  return (
    <div className="py-4 flex items-center gap-2">
      <span className="flex flex-col items-center justify-center">
        {/* <h1>{Like}</h1> */}
        <button
        //   onClick={handleLike}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          👍 Like
        </button>
      </span>

      <span className="flex flex-col items-center justify-center">
        {/* <h1>{UnLike}</h1> */}
        <button
        //   onClick={handleUnLike}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          👎 Dislike
        </button>
      </span>
    </div>
  );
}
