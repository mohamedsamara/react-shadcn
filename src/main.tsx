import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import 'styles/index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <h1 className="text-gray-900 text-2xl">React Shadcn</h1>
  </StrictMode>,
)
