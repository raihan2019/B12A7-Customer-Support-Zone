import { Suspense ,useState } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Navbar2 from './components/navbar/Navbar2';
import Tickets from './components/tickets/Tickets';
import { ToastContainer } from 'react-toastify';
import Footer from './components/footer/Footer';

const customerPromise = fetch('/customer.json').then(res => res.json());

function App() {

   
    const [countProgress , setCountProgress] = useState(0);
    const [resolveInfo , setResolveInfo] = useState([]);
    const [cardInfo , setCardInfo] = useState([]);
    const [countResolve , setCountResolve]= useState(0)
    const handleInProgress =(t) =>{
      setCountProgress(countProgress + 1);
      
      setCardInfo([...cardInfo , t]);

    


    };
    const handleTaskStatus = () =>{
      setCountProgress(countProgress - 1 );
      setCountResolve(countResolve + 1);


    } 

  return (
    <div>
      <Navbar></Navbar>
      <Navbar2 countResolve = {countResolve} setCountResolve ={setCountResolve} countProgress
        ={countProgress} setCountProgress ={
          setCountProgress
        }></Navbar2>
      <Suspense fallback= {<span className="loading loading-spinner loading-xl"></span>}>
        <Tickets resolveInfo={resolveInfo} setResolveInfo={setResolveInfo} 
        countResolve = {countResolve} setCountResolve ={setCountResolve} handleTaskStatus={handleTaskStatus} cardInfo={cardInfo} setCardInfo={setCardInfo} handleInProgress = {handleInProgress} countProgress
        ={countProgress} setCountProgress ={
          setCountProgress
        } customerPromise={customerPromise}></Tickets>
      </Suspense>

      <Footer></Footer>
      <ToastContainer />
    </div>
    
  )
}

export default App;
