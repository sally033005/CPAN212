import Education from './components/Education';
import Experience from './components/Experience';
import Overview from './components/Overview';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Online Resume</h1>
      </header>
      <Overview />
      <Education />
      <Experience />
    </div>
  );
}

export default App;
