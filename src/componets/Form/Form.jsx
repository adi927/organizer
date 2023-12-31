import React, { useState } from "react";
import styles from "./Form.module.css";

const Form = ({ events, setEvents, isError, setIsError }) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  const AddProduct = () => {
    if (name === "" || date === "" || description === "") {
      setIsError(true);
    } else {
      setIsError(false);
      const event = {
        name: name,
        date: date,
        description: description,
        id: Math.random(),
      };

      setEvents([...events, event]);
    }
  };

  return (
    <div className={styles.wrapper}>
      <p className={styles.p}>DODAJ WYDARZENIE</p>
      <div className={styles.inputs}>
        <input
          type="text"
          className={styles.eventInput}
          placeholder="Napisz wydarzenie"
          value={name}
          onChange={(event) => setName(event.target.value)}
          maxLength="1000"
        />
        <input
          type="text"
          className={styles.dateInput}
          placeholder="Napisz date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
        />
      </div>
      <input
        required
        maxLength="1000"
        type="text"
        className={styles.descriptionInput}
        placeholder="Napisz opis"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button onClick={AddProduct} className={styles.addButton}>
        <p className={styles.pBtn}>DODAJ</p>
      </button>
    </div>
  );
};

export default Form;
