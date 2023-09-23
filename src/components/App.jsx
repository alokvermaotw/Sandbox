import React from "react";
import emojipedia from "../emojipedia";

function Term(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {props.icon}
        </span>
        <span>{props.name}</span>
      </dt>
      <dd>{props.desc}</dd>
    </div>
  );
}

function termCreater(term) {
  return (
    <Term
      key={term.id}
      icon={term.emoji}
      name={term.name}
      desc={term.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        <Term
          icon="💪"
          name="Tense Biceps"
          desc="“You can do that!” or “I feel strong!” Arm with tense biceps. Also
              used in connection with doing sports, e.g. at the gym."
        />
        {emojipedia.map(termCreater)}
      </dl>
    </div>
  );
}

export default App;
