/* eslint-disable react/prop-types */
const Burger = ({ open, setOpen }) => {
  return (
    <div className="burger" onClick={() => setOpen(!open)}>
      <div className="line" ></div>
      <div className="line"></div>
      <div className="line"></div>
    </div>
  );
};

export default Burger;
