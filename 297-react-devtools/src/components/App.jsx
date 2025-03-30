import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>

      <Avatar 
        img="https://media.licdn.com/dms/image/v2/D5603AQFlInb1T-SAkw/profile-displayphoto-shrink_200_200/B56ZSUHOL0HsAc-/0/1737651709368?e=2147483647&v=beta&t=PBXeF9NTfHA6PMz0-1rVPj4cMHocEOV_Ludy-jGzyyI" 
      />

      <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      />
    </div>
  );
}

export default App;
