import React from "react";

function TopButtons({ setQuery }) {
  const cities = [
    {
      id: 1,
      title: "Bengaluru",
    },
    {
      id: 2,
      title: "Mysuru",
    },
    {
      id: 3,
      title: "Chennai",
    },
    {
      id: 4,
      title: "Raleigh",
    },
  ];

  return (
    <div className="flex items-center justify-around my-6 flex-wrap">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-white text-lg font-medium mr-1"
          onClick={() => setQuery({ q: city.title })}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopButtons;
