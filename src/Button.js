export function Button({ children, onClick, customClass = "", customId = "" }) {
  return (
    <button className={`button ${customClass}`} id={customId} onClick={onClick}>
      {children}
    </button>
  );
}
