import React from 'react'
import ProjectInfo from "../../_components/Investment/ProjectInfo";
import { ImSpinner } from "react-icons/im";
import { IoMdBook } from "react-icons/io";
function ProjectSection1() {
    const description = "You want to make your own garden but you don't have time. You are not in a position to leave the city and live in the garden because of the retreat. You may be able to do 10 days in a year but it is not possible for you throughout the year.";
  return (
    <main>
      <div className="all-items grid grid-cols-1 md:grid-cols-3 gap-7">
        <ProjectInfo title="There is desire, but no time" description={description} icon={<ImSpinner/>}/>
        <ProjectInfo title="No experience, retreat with" description={description} icon={<IoMdBook/>}/>
        <ProjectInfo title="Investment is much needed" description={description} icon={<ImSpinner/>}/>
      </div>
    </main>
  )
}

export default ProjectSection1
