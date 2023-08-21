// import React from 'react'
// Don't need to use the line above anymore

// type rfc to get a shortcut to create a functional component

import ProjectItem from "./ProjectItem"

//Using inline export here
export default function ProjectList({projects}) {

  const projectMap = projects.map((eachP) => {
    return < ProjectItem key={eachP.id} project={eachP} />
  })

  return (
    <>
      <div>ProjectList</div>
      {projectMap}
    </>

  )
}
