import {
  FaUser,
  FaMap,
  FaLock,
  FaCalendarTimes,
  FaPhone,
  FaEnvelopeOpen,
} from "react-icons/fa";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="block bcg-black"></div>
      <div className="block">
        <div className="container">
          <img
            src="https://randomuser.me/api/portraits/med/men/75.jpg"
            className="user-img"
            alt=""
          />
          <p className="user-title">Title</p>
          <p className="user-value">Value</p>
          <div className="values-list">
            <button data-label="name" className="icon">
              <FaUser />
            </button>
            <button data-label="street" className="icon">
              <FaMap />
            </button>
            <button data-label="phone" className="icon">
              <FaPhone />
            </button>
            <button data-label="age" className="icon">
              <FaCalendarTimes />
            </button>
            <button data-label="email" className="icon">
              <FaEnvelopeOpen />
            </button>
            <button data-label="password" className="icon">
              <FaLock />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
