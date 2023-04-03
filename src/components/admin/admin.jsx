import "./admin.css";
import { useEffect, useState } from "react";

const Admin = () => {
  const [cinemaData, setCinemaData] = useState();

  let freeSeats = 0;
  cinemaData?.seats.forEach((seat) => {
    if (seat.status === "free") {
      freeSeats += 1;
    }
  });

  useEffect(() => {
    fetch("http://localhost:7777/api/v1/cinema")
      .then((res) => res.json())
      .then((data) => setCinemaData(data[1]))
      .catch((err) => console.log(err));
  }, []);

  const reset = () => {
    fetch(`http://localhost:7777/api/v1/reset`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => setCinemaData(data[1]))
      .catch((err) => console.log(err));
  };
  return (
    <div className="Admin">
      <p>Admin</p>
      <div>
        <p>Sales: {cinemaData?.turnover} $</p>
      </div>
      <div>
        <p>Free seats: {freeSeats}</p>
      </div>
      <div>
        <button onClick={reset}>RESET</button>
      </div>
    </div>
  );
};

export default Admin;
