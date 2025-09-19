import { useState } from "react";
import styles from "./accordions.module.css";
import { GoChevronDown } from "react-icons/go";

const Accordions = ({ q }) => {
  const [isOpenPanel, setIsOpenPanel] = useState(false);

  const toggleMenuPanel = () => {
    setIsOpenPanel(!isOpenPanel);
  };

  return (
    <figure className={styles.questions} key={q._id}>
      <p className={styles.qText}>{q.question}</p>
      <GoChevronDown
        size={50}
        className={styles.qIcon}
        onClick={toggleMenuPanel}
      />
      <div>{isOpenPanel && <p className={styles.qPanel}>{q.answer}</p>}</div>
    </figure>
  );
};

export default Accordions;
