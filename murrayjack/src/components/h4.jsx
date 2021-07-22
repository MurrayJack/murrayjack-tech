import * as React from "react";
import { AiOutlineSmile, AiOutlineHeart, AiOutlineFullscreenExit, AiOutlineFullscreen } from "react-icons/ai";

export const H4 = ({ caption, type }) => {
  return (
    <>
      <h4>
        <span>{caption}</span>
        {type === "user" && <AiOutlineSmile />}
        {type === "kskills" && <AiOutlineFullscreenExit />}
        {type === "oskills" && <AiOutlineFullscreen />}
        {type === "projects" && <AiOutlineHeart />}
      </h4>
      <style jsx>{`
        h4 {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 6px;
          align-items: center;
        }

      `}</style>
    </>
  );
};
