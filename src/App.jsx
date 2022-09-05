import "./App.css";
import CardWeather from "./components/card/CardWeather";
import useLocation from "./hooks/useLocation";
import LoadingScreen from "./templates/LoadingScreen";

function App() {
  const { weather, loading } = useLocation();
  return (
    <div>
      {loading ? (
        <LoadingScreen/>
      ) : (
        <div className=" flex justify-center items-center w-screen h-screen App bg-gradient-to-t from-sky-500 to-blue-900">
          <CardWeather />
          <div className="absolute bg-sky-500 rounded-lg p-2 font-bold bottom-5 right-5 border-gray-300 border-2 text-gray-300">
            Jean Ticona Dev
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
