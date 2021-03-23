import React from "react";

function MainPage() {
  const [number, setNumber] = useState([]);
  const [bonus, setBonus] = useState(false);
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);

  const generateNumber = (number) => {
    return (
      <div>
        <ul>
          <li>{number}</li>
        </ul>
      </div>
    );
  };

  return (
    <div>
      {number.map((num) => generateNumber(num))}

      <input
        type="checkbox"
        checked={bonus}
        onChange={(e) => setBonus(e.target.checked)}
      ></input>

      <input
        type="number"
        value={value1}
        onChange={(e) => setValue1(e.target.value)}
      ></input>
      <input
        type="number"
        value={value2}
        onChange={(e) => setValue2(e.target.value)}
      ></input>
      <input
        type="submit"
        onClick={() =>
          setNumber(
            bonus
              ? [...number, (parseInt(value1) + parseInt(value2) + 1000) * 2]
              : [...number, parseInt(value1) + parseInt(value2) + 1000]
          )
        }
      ></input>
    </div>
  );
}

export default MainPage;
