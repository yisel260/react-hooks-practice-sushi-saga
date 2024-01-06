import React from "react";

function Sushi({sushiName, image, price, sushiClicked, eaten}) {
  return (
    <div className="sushi">
      <div className="plate" onClick={(sushi)=>{sushiClicked(sushi)}}>
        {/* Tell me if this sushi has been eaten! */}
        {}
        {eaten? null : (
          <img
            src={image}
            alt={sushiName}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {sushiName} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
