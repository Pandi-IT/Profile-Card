 import '/src/App.css'
const userData = [
  {
    name: "James",
    city: "chennai",
    description: "Front-end developer",
    skills: ["UI / UX", "Front End Development", "HTML", "CSS", "JavaScript", "React", "Node"],
    online: false,
    profile: "public/image/1.jpeg",

  },
  {
    name: "Vijay",
    city: "madurai",
    description: "Full Stack web developer",
    skills: ["Vlogging", "Web Development", "HTML", "CSS", "JavaScript", "React", "Angular"],
    online: true,
    profile: "public/image/2.jpeg",

  },
  {
    name: "Nancy",
    city: "mumbai",
    description: "Senior Software Developer",
    skills: ["C", "C++", "Java Programming", "Python", "C#.Net", "MySQL", "MongoDB"],
    online: true,
    profile: "public/image/3.jpeg",
  },
];


function User(props) {
  return (
    <div className="card - container">
      <span className={props.online ? "pro online" : "pro offline"}>
        {props.online ? "ONLINE" : "OFFLINE"}</ span>
      <img src={props.profile} className="img" alt="user" />
      <h3>{props.name}</h3>
      <h3>{props.city}</h3>
      <p>{props.description}</p>
      <div className=" buttons">
        <button className="primary">Message</button>
        <button className="primary outline">Following</ button>
      </div> <div className="skills">
        <h6>Skills</h6>
        <ul>
          {props.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export const UserCard = () => {
  return (
    <>
      {userData.map((user, index) => (
        <User key={index} name={user.name}
          city={user.city}
          description={user.description}
          online={user.online}
          profile={user.profile}
          skills={user.skills} />
      ))}
    </>

  )
};