export default function Burger() {
  return (
    <>
      <div
        className="burger"
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </>
  );
}
