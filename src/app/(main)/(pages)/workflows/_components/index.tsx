import React from 'react'
import Workflow from './Workflow'

type Props = {}

const Workflows = (props: Props) => {
  return (
    <div className='relative flex flex-col gap-4'>
        <section className="flex flex-col gap-4 m-2">
            <Workflow
                description='createing a test workflow'
                id='da2343wksfsd555a'
                name='Automation Workflow'
                publish={false}
            />
        </section>
    </div>
  )
}

export default Workflows