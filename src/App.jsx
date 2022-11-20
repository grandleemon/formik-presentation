import './App.css';
import {Link} from "react-router-dom";

const App = () => {
  return (
    <div className="wrapper">
        <div className='flex flex-col gap-2  p-10 rounded-[6px]'>
            <Link to='/simple-react-form' className='link'>Form in simple React</Link>
            <Link to='/formik-simple-example' className='link'>Formik form (simple example)</Link>
            <Link to='/formik-advanced-example' className='link'>Formik form (advanced example)</Link>
            <Link to='/formik-with-custom-components' className='link'>Formik form (custom components example)</Link>
        </div>
    </div>
  );
}

export default App;
