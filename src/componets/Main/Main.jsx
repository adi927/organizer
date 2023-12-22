import EventLog from "../EventLog/EventLog";
import Form from "../Form/Form";
import styles from "./Main.module.css";

const Main = () => {
  return (
    <div className={styles.wrapper}>
      <EventLog />
    </div>
  );
};

export default Main;
