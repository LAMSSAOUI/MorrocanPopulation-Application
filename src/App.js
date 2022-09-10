import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Details from './pages/Details';
import Home from './pages/Home';
import { ReactQueryDevtools } from 'react-query-devtools';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'


const queryClient = new QueryClient()


function App() {

  return (
    <>
    <QueryClientProvider client={queryClient} >
    <div className='App'>
      <BrowserRouter>
   
        <Routes>
          <Route 
            path="/" 
            element={<Home />} 
          />
          <Route 
            path="/Details/*" 
            element={<Details />  } 
          />
        </Routes>
  
    </BrowserRouter>
    </div>
    
    </QueryClientProvider>
     </>
  )
}

export default App;
