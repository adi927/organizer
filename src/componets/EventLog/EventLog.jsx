import Form from "../Form/Form";
import styles from "./EventLog.module.css";
import React, { useState } from "react";

const EventLog = () => {
  const [events, setEvents] = useState([]);
  const [isError, setIsError] = useState(false);

  const deleteEvent = (eventId) => {
    setEvents((current) => current.filter((event) => event.id !== eventId));
  };

  return (
    <div>
      <Form
        events={events}
        setEvents={setEvents}
        isError={isError}
        setIsError={setIsError}
      />
      <div className={styles.errorWrapper}>
        {isError ? (
          <p className={styles.error}>Błąd, proszę wprowadzić dane</p>
        ) : null}
      </div>
      <div className={styles.wrapper}>
        <div className={styles.contentWrapper}>
          {events.map((event) => (
            <div className={styles.container} key={event.id}>
              <div className={styles.headline}>
                <p className={styles.headlineParagraph}>{event.name}</p>
              </div>
              <div className={styles.subheadline}>
                <p className={styles.description}>{event.description}</p>
              </div>
              <div className={styles.footer}>
                <p className={styles.date}>{event.date}</p>
              </div>
              <svg
                onClick={() => deleteEvent(event.id)}
                className={styles.deleteButton}
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.5459 13.9541C15.7572 14.1654 15.876 14.4521 15.876 14.7509C15.876 15.0498 15.7572 15.3365 15.5459 15.5478C15.3346 15.7592 15.0479 15.8779 14.749 15.8779C14.4501 15.8779 14.1635 15.7592 13.9521 15.5478L7.99996 9.59376L2.0459 15.5459C1.83455 15.7573 1.54791 15.876 1.24902 15.876C0.950136 15.876 0.663491 15.7573 0.452147 15.5459C0.240802 15.3346 0.12207 15.048 0.12207 14.7491C0.12207 14.4502 0.240802 14.1635 0.452147 13.9522L6.40621 8.00001L0.454022 2.04595C0.242677 1.8346 0.123945 1.54796 0.123945 1.24907C0.123945 0.950188 0.242677 0.663544 0.454022 0.452199C0.665366 0.240855 0.95201 0.122123 1.2509 0.122123C1.54978 0.122123 1.83643 0.240855 2.04777 0.452199L7.99996 6.40626L13.954 0.451262C14.1654 0.239917 14.452 0.121185 14.7509 0.121185C15.0498 0.121185 15.3364 0.239917 15.5478 0.451262C15.7591 0.662606 15.8778 0.94925 15.8778 1.24814C15.8778 1.54702 15.7591 1.83367 15.5478 2.04501L9.59371 8.00001L15.5459 13.9541Z"
                  fill="black"
                />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventLog;
