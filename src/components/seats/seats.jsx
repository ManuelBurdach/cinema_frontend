import { useEffect, useState } from "react";
import "./seats.css";

const Seats = () => {
  const [cinemaData, setCinemaData] = useState();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BASELINK}/api/v1/cinema`)
      .then((res) => res.json())
      .then((data) => setCinemaData(data[1].seats))
      .catch((err) => console.log(err));
  }, []);

  const book = (seatNum) => {
    fetch(`${import.meta.env.VITE_BASELINK}/api/v1/cinema/${seatNum}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => setCinemaData(data[1].seats));
  };

  return (
    <>
      <div className="SeatsParent">
        <div>
          <div>
            <div className="firstclass"></div>
            <p>seat loge</p>
          </div>
          <div>
            <div className="woodclass"></div>
            <p>seat parquet</p>
          </div>
          <div>
            <div className="occupies"></div>
            <p>seat occupied</p>
          </div>
        </div>

        <div className="Seats">
          {cinemaData?.map((seat, index) => {
            return (
              <div
                key={index}
                className={seat.status !== "free" ? "occupies" : seat.class + " free"}
                onClick={() => {
                  if (seat.status === "free") book(seat.seatNum);
                }}
              ></div>
            );
          })}
          <div className="canvas"></div>
          <p>Canvas</p>
        </div>
      </div>
    </>
  );
};

export default Seats;
