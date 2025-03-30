import React from "react";

function Card(props) {
  
  console.log(props);

  return <div>
    <div className="card">
          <div className="top">
            <h2 className="name">{props.name}</h2>
            <img className="circle-img"
              src={props.img}
              alt="avatar_img"
            />
          </div>
          <div className="bottom">
            <p>{props.tel}</p>
            <p>{props.email}</p>
          </div>
        </div>
    </div>
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card name="Beyonce" img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg" tel="+123 456 789" email="b@beyonce.com" />
    </div>
  );
}

export default App;
