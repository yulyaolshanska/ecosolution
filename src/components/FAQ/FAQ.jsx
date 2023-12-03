import React, { useState } from 'react';
import { faqData } from '../../data/faq';
import { ReactComponent as Minus } from '../../assets/icons/minus.svg';
import { ReactComponent as Plus } from '../../assets/icons/add.svg';
import { ReactComponent as ArrowBottom } from '../../assets/icons/arrow-bottom.svg';
import ButtonWithText from '../Buttons/ButtonWithText';
import styles from './FAQ.module.scss';

const FAQ = () => {
    const [openedQuestion, setOpenedQuestion] = useState(faqData[0].id);

    const handleClick = id => {
        setOpenedQuestion(id === openedQuestion ? null : id);
    };

    return (
        <div className={styles.container} id="faq">
            <h2 className={styles.title}>Frequently Asked Questions</h2>
            <ul className={styles.faqList}>
                {faqData.map(({ id, question, answer }) => (
                    <>
                        <div className={styles.horizontalLine}></div>
                        <li className={styles.faqItem} key={id}>
                            <div className={styles.questionContainer}>
                                {openedQuestion === id ? (
                                    <Minus width={16} />
                                ) : (
                                    <Plus />
                                )}

                                <h3
                                    className={styles.faqQuestion}
                                    onClick={() => handleClick(id)}
                                >
                                    {question}
                                </h3>
                            </div>
                            {openedQuestion === id && (
                                <p className={styles.faqAnswer}>{answer}</p>
                            )}
                        </li>
                    </>
                ))}
            </ul>
            <div className={styles.contactUs}>
                <p className={styles.contactUsText}>
                    Didn&apos;t find the answer to your question?
                </p>
                <ButtonWithText
                    text="Contact Us"
                    variant="contactsBtn"
                    hash="#contacts"
                >
                    <ArrowBottom />
                </ButtonWithText>
            </div>
        </div>
    );
};

export default FAQ;
