export function Button({ children, onClick, customClass = "" }) {
  return (
    <button className={`button ${customClass}`} onClick={onClick}>
      {children}
    </button>
  );
}
