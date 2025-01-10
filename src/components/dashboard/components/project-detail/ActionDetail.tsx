import React from 'react'
import ActionBoardLeft from './components/ActionBoardLeft'
import ActionBoardRight from './components/ActionBoardRight'

interface IPropsPageDedailProject {
  dataDetailProject: any
}
const ActionDetail = ({dataDetailProject}: IPropsPageDedailProject) => {
  return (
    <div className="flex flex-wrap gap-2 items-center justify-between py-2 min-h-14 bg-[#FFD700] px-4 rounded-md">
      <div className="flex items-center gap-4 w-full sm:w-auto">
        <ActionBoardLeft nameProject={dataDetailProject.project_name} />
      </div>

      <div className="flex items-center gap-4 w-full sm:w-auto justify-end sm:justify-start">
        <ActionBoardRight />
      </div>
    </div>
  )
}

export default ActionDetail