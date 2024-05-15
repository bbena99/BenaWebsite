import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { AppRoutes } from './core';
import { PageLayout } from './pages';

function App() {
  console.log(AppRoutes)
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageLayout routes={AppRoutes}/>}>
            <Route index element={AppRoutes[0].pageElement}/>
            {AppRoutes.slice(1).map(r=>{
              return (
                <Route key={r.displayName+"_Route"} path={r.routePath} element={r.pageElement}/>
              )
            })}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
