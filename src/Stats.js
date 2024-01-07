import { Button } from "./Button.js";

export function Stats() {
  return (
    <div>
      <h1 className="heading">STATISTICS</h1>
      <div>
        <ul className="statslist">
          <li>
            <div>
              <Button>$100 total amount earned</Button>
            </div>
          </li>
          <li>
            <div>
              <Button>$100 total amount earned</Button>
            </div>
          </li>
          <li>
            <div>
              <Button>$100 total amount earned</Button>
            </div>
          </li>
          <li>
            <div>
              <Button>$100 total amount earned</Button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
