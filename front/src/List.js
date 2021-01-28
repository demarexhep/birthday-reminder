import React from "react";

const List = ({ people, handleRemove, getAge }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article key={id} className="person">
            <img src={image} alt={name} />
            <div className="x">
              <h4>{name}</h4>
              <p>{getAge(age)} Years old.</p>
              <h4 className="h4link" onClick={() => handleRemove(id)}>
                remove
              </h4>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
