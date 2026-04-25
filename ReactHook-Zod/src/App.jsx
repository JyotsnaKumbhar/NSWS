import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");

 function handleSubmit(e)
 {
  e.preventDefault();
  console.log(name);
 }
console.log("render");

  return (
    <>
  <form onSubmit={handleSubmit} className="form">
    <div className="input-group">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>

    <button type="submit">Submit</button>
  </form>
</>
  );
}

export default App;
