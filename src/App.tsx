import Tooltip from "./core/components/Tooltip";

function App() {
  return (
    <div className="min-h-screen bg-slate-700">
      <Tooltip content="Tooltip">
        <button type="button">Hover Over Me</button>
      </Tooltip>
    </div>
  );
}

export default App;
