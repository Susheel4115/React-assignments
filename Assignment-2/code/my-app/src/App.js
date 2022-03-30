import "./App.css";

function App(props) {
  const { employee } = props;

  return (
    <div className="container">
      {/* Start your React code here */}
      <img className="image1" src={employee.profileImg} />
      <p className="name">{employee.name}</p>
      <p className="location">Location</p>
      <p className="realloc">{employee.location}</p>
      <p className="bloodgroup">Blood group</p>
      <p className="blood">{employee.bloodGroup}</p>
      <p className="age">Age</p>
      <p className="employeeage">{employee.age}</p>
    </div>
  );
}

export default App;
