import './App.css';
import {Link} from "react-router-dom";

const App = () => {
  return (
    <div className="wrapper">
        <div className='flex gap-x-2 border border-white/80 p-10 rounded-[6px]'>
            <Link to='/simple-react-form' className='p-5 border border-transparent hover:border-white/80 rounded-[6px] transition-colors'>Form in simple React</Link>
            <Link to='/formik-simple-example' className='p-5 border border-transparent hover:border-white/80 rounded-[6px] transition-colors'>Formik form (simple example)</Link>
        </div>
    </div>
  );
}

export default App;
