import React, { useState } from "react";
import "./index.css";




export default function App() {

  const [finalbook, setBook] = useState([]);

  function buttonHandler(event) {
    var bookname = event.target.value;
    listHandler(bookname);
  }

  function listHandler(bookname) {

    var fiction = ["Animal Farm", "1984", "The Absolutely True Diary of a Part-Time Indian "];
    var documentory = ["\"Surely You're Joking, Mr. Feynman!\": Adventures of a Curious Character ", "Ready To Fire: How India and I Survived the ISRO Spy Case ", "Karmayogi: A Biography of E. Sreedharan ", "Letters to a Young Scientist "];
    var business = ["Cleverlands: The secrets behind the success of the world's education superpowers", "Loonshots", "Rich Dad, Poor Dad "];
    var history = ["Sapiens: A Brief History of Humankind", "The End of India", "Bolna Hi Hai : Loktantra, Sanskriti Aur Rashtra Ke Baare Mein"];

    var education = ["Shiksha: My Experiments as an Education Minister", "Cleverlands: The secrets behind the success of the world's education superpowers"];

    var selfhelp = ["The Power of Habit: Why We Do What We Do and How to Change", "The 5 Second Rule: Transform Your Life, Work, and Confidence with Everyday Courage ", "The Headspace Guide to Meditation & Mindfulness "];

    var science = ["Letters to a Young Scientist ", "Ready To Fire: How India and I Survived the ISRO Spy Case", "Karmayogi: A Biography of E. Sreedharan "];


    if (bookname == "fiction") {
      setBook(fiction);
    }
    else if (bookname == "documentory") {
      setBook(documentory);
    }
    else if (bookname == "history") {
      setBook(history);
    }
    else if (bookname == "education") {
      setBook(education);
    }
    else if (bookname == "selfhelp") {
      setBook(selfhelp);
    }
    else if (bookname == "science") {
      setBook(science);
    }
    else {
      setBook(business);
    }

  }

  return (
    <div className="App container container-center">
      <h1 className="hero">📚Which books I have <span className="heading-inverted">read!!</span></h1>
      <small className="small-heading">Click on genre to get started.</small>
      <button className="link link-secondary" onClick={(e) => buttonHandler(e, 'value')} value="documentory">Documentory</button>
      <button className="link link-secondary" onClick={(e) => buttonHandler(e, 'value')} value="fiction">Fiction</button>
      <button className="link link-secondary" onClick={(e) => buttonHandler(e, 'value')} value="business">Business</button>
      <button className="link link-secondary" onClick={(e) => buttonHandler(e, 'value')} value="history">History</button>
      <button className="link link-secondary" onClick={(e) => buttonHandler(e, 'value')} value="education">Education</button>
      <button className="link link-secondary" onClick={(e) => buttonHandler(e, 'value')} value="selfhelp">Self-Help</button>
      <button className="link link-secondary" onClick={(e) => buttonHandler(e, 'value')} value="science">Science</button>
      <hr></hr>
      <div className="list list-non-bullet">{finalbook.map(item => { return <li className="box-border">{item}</li> })}</div>
    </div>
  );
}
