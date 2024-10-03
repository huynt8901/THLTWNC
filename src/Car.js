import { useState } from 'react';

function Car() {
  const [car, setCar] = useState({ name: 'Tihon', color: 'Red', birthday: 2020 });
  const [newYear, setNewYear] = useState(car.birthday);

  const updateYear = () => {
    setCar({ ...car, birthday: newYear });
  };

  return (
    <>
      <p>Show information of Car:</p>
      <p>Name: {car.name}</p>
      <p>Color: {car.color}</p>
      <p>Birthday: {car.birthday}</p>
      <input type="number" value={newYear} onChange={(e) => setNewYear(e.target.value)} />
      <button onClick={updateYear}>Update Year</button>
    </>
  );
}

export default Car;
