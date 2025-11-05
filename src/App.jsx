import React from 'react'
import {AllPages} from '@app/routes/router'
import { useRoutes } from "react-router-dom";

function App() {
  const all_pages = useRoutes(AllPages());
  
  return (
    <>
      {all_pages}
    </>
  )
}

export default App
