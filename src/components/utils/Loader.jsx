import React, { useEffect, useState } from "react";

export default function Loader() {
  const [showName, setshowName] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setshowName(true);
    }, 3000);
  }, []);

  return (
    <>
      <div className="animation_one">
        <p className="thin ef_one">Ashish</p>
        <p className="ef_one">Singh</p>
        <p className="thin ef_one">Rathod</p>
      </div>

      {/* {showName && (
        <div className="animation_two">
          <div className="reveal_box">
            <div className="reveal_text"> Ashish Singh Rathod </div>
          </div>
        </div>
      )} */}
    </>
  );
}
