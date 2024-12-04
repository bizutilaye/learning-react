export default function App() {
  return (
    <div>
      <Logo />
      <Form />
      <PakingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>Far Away</h1>;
}
function Form() {
  return (
    <div>
      <h3>what do you need for your 😍 trip?</h3>
    </div>
  );
}
function PakingList() {
  return <div className="list">List</div>;
}
function Stats() {
  return (
    <footer>
      <em>💼 You have x items on your list, and you already packed x(x%)</em>
    </footer>
  );
}
