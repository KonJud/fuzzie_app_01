import { ConnectionsProvider } from '@/providers/connection-provider'
import EditorProvider from '@/providers/editor-provider'
import React from 'react'

type Props = {}

const Page = (props: Props) => {
  return (
    <EditorProvider>
      <ConnectionsProvider>
        <></>
      </ConnectionsProvider>
    </EditorProvider>
  )
}

export default Page