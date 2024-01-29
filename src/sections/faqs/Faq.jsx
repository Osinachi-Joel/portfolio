import React from "react";
import Card from "../../components/Card";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useState } from "react";

const Faq = ({ faq }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <Card className="faq" onClick={() => setShowAnswer((prev) => !prev)}>
      <div>
        <h5 className="faq_question">{faq.question}</h5>
        <button className="faq_btn">
          {showAnswer ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>
      {showAnswer && <p className="faq_answer">{faq.answer}</p>}
    </Card>
  );
};

export default Faq;
