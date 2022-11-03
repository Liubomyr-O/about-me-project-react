import "./App.css";
import React, { useState } from "react";

import LiubomyrDesigner from "./Liubomyr_designer.json";
import LiubomyrProgrammer from "./Liubomyr_programmer.json";
import LiubomyrTraveller from "./Liubomyr_traveller.json";

function App() {
  let [user, setUser] = useState(LiubomyrDesigner);

  return (
    <main className="App">
      <div className="alterEgo">
        <div
          className="icon designer"
          onClick={() => setUser(LiubomyrDesigner)}
        >
          <div className="icon_image design_icon"></div>
        </div>
        <div
          className="icon developer"
          onClick={() => setUser(LiubomyrProgrammer)}
        >
          <div className="icon_image programmer_icon"></div>
        </div>
        <div
          className="icon traveler"
          onClick={() => setUser(LiubomyrTraveller)}
        >
          <div className="icon_image travel_icon"></div>
        </div>
        <div className="vertical_text">
          Click on the icon to see the alter ego
        </div>
      </div>
      <section className="user_info">
        <h1>{"Hi, I'm " + user.name}</h1>
        <h3>{user.profession}</h3>
        <p>{user.description}</p>

        <h5>Skills:</h5>
        <ul>
          {user.skills.map((el) => (
            <li key={el}>
              <a href={`https://en.wikipedia.org/wiki/${el}`} target="blank">
                {el}
              </a>
            </li>
          ))}
        </ul>
      </section>
      <section className="user_image">
        <img src={user.img} alt={user.name + " image"} />
      </section>
    </main>
  );
}

export default App;
