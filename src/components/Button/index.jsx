export default function Button({ children }) {
  return (
    <button className="bg-primary-color text-primary-dark-color w-full rounded-sm py-[2px] text-[26px]">
      {children}
    </button>
  );
}
