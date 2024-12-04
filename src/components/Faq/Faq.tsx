import React, { useState } from "react";
import styles from "./Faq.module.css";
import { FaChevronDown, FaChevronUp, FaQuestionCircle } from "react-icons/fa";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqProps {
  faqs: FaqItem[];
}

const Faq: React.FC<FaqProps> = ({ faqs }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.faq}>
      <h2 className={styles.faqTitle}>
        <FaQuestionCircle className={styles.faqIcon} /> Perguntas Frequentes
      </h2>
      {faqs.map((faq, index) => (
        <div key={index} className={`${styles.faqItem} ${activeIndex === index ? styles.active : ""}`}>
          <h3 onClick={() => toggleFaq(index)} className={styles.faqQuestion}>
            {faq.question}
            {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
          </h3>
          {activeIndex === index && <p className={styles.faqAnswer}>{faq.answer}</p>}
        </div>
      ))}
    </section>
  );
};

export default Faq;
