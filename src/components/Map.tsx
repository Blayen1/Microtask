import React from "react";

type topCarsTypeProps = {
  cars: Array<topCarsType>;
};

type topCarsType = {
  manufacturer: string;
  model: string;
};

export function Task(props: topCarsTypeProps){
  return (
    <div>
      {props.cars.map((el, index) => {
        return (
          <table>
            <tr>
              <th key={index}>{el.manufacturer}</th>
              <th>{el.model}</th>
            </tr>
          </table>
        );
      })}

    
    </div>

  );

};









