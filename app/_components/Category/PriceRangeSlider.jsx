import React from "react";
import {Slider} from "@nextui-org/react";

export default function PriceRangeSlider() {
  const [value, setValue] = React.useState([100, 300]);

  return (
    <div className="flex flex-col gap-2 w-full h-full max-w-md items-start justify-center py-5">
      <Slider 
        label="Price"
        renderLabel={({children, ...props}) => (
            <label {...props} className="font-semibold text-lg flex gap-2 items-center pb-3">
              {children}
              
            </label>
          )}
          
        step={10}
        maxValue={1000}
        minValue={0}
        disableThumbScale={true}
        size="sm"
        value={value} 
        onChange={setValue}
        className="max-w-md"
      />
    </div>
  );
}
