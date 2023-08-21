import Header  from "./components/Header";
import ProjectList from './components/ProjectList'
import projects from './projects'
import ProjectForm from "./components/ProjectForm";

function App() {
  return (
    <div className="App">Project showcase
      <Header />
      <ProjectForm />
      <ProjectList projects={projects}/>
    </div>
  )
}

export default App;
