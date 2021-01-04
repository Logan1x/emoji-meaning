import React, { useState } from "react";
import "./index.css";

// dark mode 

var currentTheme = 'dark';

function changeTheme() {
  document.body.classList.toggle('dark-mode');

  if (currentTheme === 'dark') {
    document.getElementById('toggleknop').innerHTML = '<i class="fas fa-sun" id="zon" style="color:#d8c658;"></i>';
    currentTheme = 'sun';
  } else {
    document.getElementById('toggleknop').innerHTML = '<i class="fas fa-moon" id="maan" style="color:#737eac;"></i>';
    currentTheme = 'dark';
  }
}


// application code

var emojiDictionary = {
  "😀": "Grinning Face",
  "😃": "Grinning Face with Big Eyes",
  "😄": " Grinning Face with Smiling Eyes",
  "😁": " Beaming Face with Smiling Eyes",
  "😆": " Grinning Squinting Face",
  "😅": " Grinning Face with Sweat",
  "🤣": " Rolling on the Floor Laughing",
  "😂": " Face with Tears of Joy",
  "🙂": " Slightly Smiling Face",
  "🙃": " Upside-Down Face",
  "😉": " Winking Face",
  "😊": " Smiling Face with Smiling Eyes",
  "😇": " Smiling Face with Halo",
  "🥰": " Smiling Face with Hearts",
  "😍": " Smiling Face with Heart-Eyes",
  "🤩": " Star-Struck",
  "😘": "Face Blowing a Kiss",
  "😗": "Kissing Face",
  "☺": "Smiling Face",
  "😚": "Kissing Face with Closed Eyes",
  "😙": "Kissing Face with Smiling Eyes",
  "🥲": "Smiling Face with Tear",
  "😋": "Face Savoring Food",
  "😛": "Face with Tongue",
  "😜": " Winking Face with Tongue",
  "🤪": " Zany Face",
  "😝": " Squinting Face with Tongue",
  "🤑": " Money-Mouth Face",
  "🤗": " Hugging Face",
  "🤭": " Face with Hand Over Mouth",
  "🤫": " Shushing Face",
  "🤔": " Thinking Face",
  "🤐": " Zipper-Mouth Face",
  "🤨": " Face with Raised Eyebrow",
  "😐": " Neutral Face",
  "😑": " Expressionless Face",
  "😶": " Face Without Mouth",
  "😏": " Smirking Face",
  "😒": " Unamused Face",
  "🙄": " Face with Rolling Eyes",
  "😬": " Grimacing Face",
  "🤥": " Lying Face",
  "😌": " Relieved Face",
  "😔": " Pensive Face",
  "😪": " Sleepy Face",
  "🤤": " Drooling Face",
  "😴": " Sleeping Face",
  "😷": " Face with Medical Mask",
  "🤒": " Face with Thermometer",
  "🤕": " Face with Head-Bandage",
  "🤢": " Nauseated Face",
  "🤮": " Face Vomiting",
  "🤧": " Sneezing Face",
  "🥵": " Hot Face",
  "🥶": " Cold Face",
  "🥴": " Woozy Face",
  "😵": " Dizzy Face",
  "🤯": " Exploding Head",
  "🤠": " Cowboy Hat Face",
  "🥳": " Partying Face",
  "🥸": " Disguised Face",
  "😎": " Smiling Face with Sunglasses",
  "🤓": " Nerd Face",
  "🧐": " Face with Monocle",
  "😕": " Confused Face",
  "😟": " Worried Face",
  "🙁": " Slightly Frowning Face",
  "☹": " Frowning Face",
  "😮": " Face with Open Mouth",
  "😯": " Hushed Face",
  "😲": " Astonished Face",
  "😳": " Flushed Face",
  "🥺": " Pleading Face",
  "😦": " Frowning Face with Open Mouth",
  "😧": " Anguished Face",
  "😨": " Fearful Face",
  "😰": " Anxious Face with Sweat",
  "😥": " Sad but Relieved Face",
  "😢": " Crying Face",
  "😭": " Loudly Crying Face",
  "😱": " Face Screaming in Fear",
  "😖": " Confounded Face",
  "😣": " Persevering Face",
  "😞": " Disappointed Face",
  "😓": " Downcast Face with Sweat",
  "😩": " Weary Face",
  "😫": " Tired Face",
  "🥱": " Yawning Face",
  "😤": " Face with Steam From Nose",
  "😡": " Pouting Face",
  "😠": " Angry Face",
  "🤬": " Face with Symbols on Mouth",
  "😈": " Smiling Face with Horns",
  "👿": " Angry Face with Horns",
  "💀": " Skull",
  "☠": " Skull and Crossbones",
  "💩": " Pile of Poo",
  "🤡": " Clown Face",
  "👹": " Ogre",
  "👺": " Goblin",
  "👻": " Ghost",
  "👽": " Alien",
}

var emojiindict = Object.keys(emojiDictionary);

export default function App() {
  const [emojiMeaning, setMeaning] = useState("");

  function emojiHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we don't have this in our database";
    }
    // console.log(meaning);
    setMeaning(meaning);
  }

  function emojiclicked(item) {
    var meaning = emojiDictionary[item];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <nav className="navigation container">
        <div className="nav-brand">emoji-meaning</div>
        <ul className="list-non-bullet nav-pills">
          <li className="list-item-inline">
            <a className="link link-active" href="/">home</a>
          </li>
          <li className="list-item-inline">
            <a className="link" href="/">github</a>
          </li>
          <li className="list-item-inline">
            <a className="link" href="https://logan1x.github.io">about</a>
          </li>
          <li className="list-item-inline">
            <span id="toggleknop" onClick={changeTheme}><i className="fas fa-moon" id="zon"
              style={{ color: "#737eac" }}></i></span>
          </li>
        </ul>
      </nav>
      <div className="container container-center">
        <h1 className="hero">Do you meaning of this <span className="heading-inverted">emoji?</span></h1>
        <p>Start typing emoji to see some magic happen!</p>
        <input onChange={emojiHandler} placeholder="Type an emoji here" />
        <h2>{emojiMeaning}</h2>
        <p> Emoji's we know </p>
        <div className="emojishow" >{emojiindict.map((item) => {
          return (
            <span onClick={() => emojiclicked(item)} style={{ padding: ".5rem" }}>
              {item}
            </span>
          );
        })}
        </div></div>
      <footer className="footer">
        <div className="footer-header">Connect with me on</div>
        <ul className="social-links list-non-bullet">
          <li className="list-item-inline">
            <a className="link" href="https://github.com/logan1x">
              Github
                </a>
          </li>
          <li className="list-item-inline">
            <a className="link" href="https://twitter.com/herkuch">
              Twitter
                </a>
          </li>
          <li className="list-item-inline">
            <a className="link" href="https://linkedin.com/in/logan1x">
              LinkedIn
                </a>
          </li>

        </ul>
      </footer>
    </div>
  );
}
