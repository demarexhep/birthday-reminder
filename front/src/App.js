import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [people, setPeople] = useState(data);

  const handleRemove = (id) => {
    let removeOne = people.filter((person) => person.id !== id);
    setPeople(removeOne);
  };
  const getAge = (dateString) => {
    //Funkcioni ne te cilen e kalkulon daten nga 24/11/1995 => 25 vjeq.
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };
  return (
    <>
      <main>
        <section className="container">
          <h3>
            {people.length} <b>B</b>irth<b>d</b>ays <b>Today</b>
          </h3>
          <List people={people} handleRemove={handleRemove} getAge={getAge} />
          <button className="btn" onClick={() => setPeople([])}>
            Clear All
          </button>
        </section>
      </main>
    </>
  );
}

export default App;
