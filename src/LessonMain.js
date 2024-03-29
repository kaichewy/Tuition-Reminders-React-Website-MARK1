import { Button } from "./Button.js";

export function Lesson({ index, name, date, time, key, currentDate }) {
  const diffDays = (date.getDay() - currentDate.getDay() + 7) % 7;
  const options = { hour: "numeric", minute: "numeric", hour12: true };

  const time12HourFormat = new Date(`2000-01-01T${time}`).toLocaleTimeString(
    undefined,
    options
  );

  return (
    <li
      key={key}
      className={
        diffDays <= 1 ? `red-background` : index % 2 ? `off-white-bg` : ``
      }
    >
      <div>
        <p>
          <span className="blue">{name.toUpperCase()}: </span>
          <span className="black bolder bigger">{date.getDate()}</span>{" "}
          <span className="darker">
            {date.toLocaleString("default", { month: "short" }).toUpperCase()}{" "}
          </span>{" "}
          <span className="orange big">
            (
            {date.toLocaleString("default", { weekday: "short" }).toUpperCase()}
            )
          </span>{" "}
          | <span className="blue">{time12HourFormat}</span>{" "}
          <Button>EDIT ✏️</Button>
        </p>
        <p>
          <span className={diffDays <= 1 ? "red" : "green"}>
            [{diffDays === 1 ? "TOMORROW" : `in ${diffDays} days`}]
          </span>
        </p>
      </div>
    </li>
  );
}
