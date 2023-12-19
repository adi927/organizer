import styles from "./Form.module.css";

const Form = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.p}>DODAJ WYDARZENIE</p>
      <div>
        <input
          type="text"
          className={styles.eventInput}
          placeholder="Napisz wydarzenie"
        ></input>
        <input
          type="text"
          className={styles.dateInput}
          placeholder="Napisz date"
        ></input>
      </div>
      <input
        type="text"
        className={styles.descriptionInput}
        placeholder="Napisz opis"
      ></input>
      <button className={styles.addButton}>
        <p className={styles.pBtn}>DODAJ</p>
      </button>
    </div>
  );
};

export default Form;
