import { Button } from "./Button.js";

export function Lesson({ index, name, date, time, currentDate }) {
  const days = Math.floor((new Date(date) - currentDate) / (1000 * 24 * 3600));
  const hours = Math.round((new Date(date) - currentDate) / (1000 * 24 * 60));
  return (
    <li
      className={days <= 1 ? `red-background` : index % 2 ? `off-white-bg` : ``}
    >
      <div>
        <p>
          <span className="blue">{name}, </span>
          <span className="green">{date}</span>
          <span className="black">{date}</span>{" "}
          {/* <span className="orange">({day})</span>,{" "} */}
          <span className="darker">{time}</span> <Button>EDIT ✏️</Button>
        </p>
        <p>
          <span className="red">
            [in {days === 0 ? `${hours} hour(s)` : `${days} day(s)`}]
          </span>
        </p>
      </div>
    </li>
  );
}
