import { SearchComponent } from "./components/search";
import { TileView } from "./components/view";
import { MovieContextProvider } from "./context/movieContext";

function App() {
  return (
    <MovieContextProvider>
      <div className="App">
        <div className="App__wrapper">
          <div className="app-title">
            <h1>Movie Finder</h1>
            <p>The best app to find that movie</p>
          </div>
          <SearchComponent />
          <TileView />
        </div>
      </div>
    </MovieContextProvider>
  );
}

export default App;
