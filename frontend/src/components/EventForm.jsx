import React from "react";

const event = ({name, date , location})=>{
  return (
    <div className="p-4 border rounded-lg shadow-md bg-white">
      <h2 className="text-lg font-bold mt-2">{name}</h2>
      <p className="text-gray-600"> {date}</p>
      <p className="text-sm text-gray-700 mt-1">Genre: {location}</p>
    </div>
  )
}


export default event ;

