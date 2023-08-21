import Header  from "./components/Header";
import ProjectList from './components/ProjectList'
import projects from './projects'

function App() {
  return (
    <div className="App">Project showcase
      <Header />
      <ProjectList projects={projects}/>
    </div>
  )
}

export default App;
