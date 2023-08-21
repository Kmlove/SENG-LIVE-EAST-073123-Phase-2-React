
export default function ProjectItem({ project }) {

    const {about, id, image, link, name, phase} = project

    return (
      <>
        <figure>
          <img src = {image} alt={name}/>
        </figure>

        <article>
          <h4>{name}</h4>
          <p>{about}</p>
        </article>
      </>

  )
}
