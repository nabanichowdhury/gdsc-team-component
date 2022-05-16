import React, { useEffect, useState } from "react";
import EachMembers from "../EachMembers/EachMembers";
import "./Team.css";

const Team = () => {
  const [members, setMembers] = useState([]);
  useEffect(() => {
    fetch("coreTeam.json")
      .then((res) => res.json())
      .then((data) => setMembers(data));
  }, []);
  const [show, setShow] = useState(false);
  return (
    <div className="team-body">
      <h1 className="team-header">Meet The Squad</h1>
      <div className="line"></div>
      <p className="team-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eius
        officiis consequuntur libero provident perspiciatis Lorem ipsum dolor,
        sit amet consectetur adipisicing elit. Expedita, dolor quos libero
      </p>

      <h1 className="team-name">Core Team</h1>
      <div className="members">
        {show
          ? members.map((member) => <EachMembers member={member}></EachMembers>)
          : members
              .slice(0, 4)
              .map((member) => <EachMembers member={member}></EachMembers>)}
      </div>
      {show ? (
        <button className="show-button" onClick={() => setShow(false)}>
          Show less
        </button>
      ) : (
        <button className="show-button" onClick={() => setShow(true)}>
          Show All
        </button>
      )}
    </div>
  );
};

export default Team;
