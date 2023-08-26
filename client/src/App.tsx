import React from "react";
import CommitList from "./components/CommitList.component";
import "./App.css";

const App = () => {
  return (
    <div>
      <header>
        <h1>Git Commit History App</h1>
      </header>
      <main>
        <CommitList />
      </main>
      <footer>
        <p>Alex Rosario Test</p>
      </footer>
    </div>
  )
}

export default App;