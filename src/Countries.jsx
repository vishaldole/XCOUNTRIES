import { useEffect, useState } from "react";

const CountryCard = ({ name, flag, abbr }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "4px",
        justifyContent: "center",
        alignItems: "center",
        width: "200px",
        height: "200px",
        border: "1px solid gray",
        borderRadius: "6px",
        textAlign: "center",
      }}
    >
      <img
        src={flag}
        alt={`Flag of ${abbr}`}
        style={{ width: "100px", height: "100px", margin: "5px" }}
      />
      <h3>{name}</h3>
    </div>
  );
};

const API = "https://xcountries-backend.azurewebsites.net/all";

export default function Countries() {
  //   const temp = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "10px",
        margin: "20px 40px",
      }}
    >
      {data.map(({ name, flag, abbr }) => (
        <CountryCard key={abbr} name={name} flag={flag} abbr={abbr} />
      ))}
    </div>
  );
}
