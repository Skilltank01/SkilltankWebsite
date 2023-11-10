import "./App.css"
import Navbar from "./Components/Navbar/Navbar"
import MainRoutes from "./Routes/MainRoutes"
import Footer from "./Components/Footer/Footer"
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
// import { studentloadUser } from './Redux/actions.js/user';

function App() {

  const {  message, error } = useSelector(
    state => state.user
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }

    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    }
  }, [dispatch, error, message]);

  // useEffect(() => {
  //   dispatch(studentloadUser());

  // }, [dispatch]);
  return (

    <div className="App">
      <Navbar />
      <MainRoutes />
      <Footer />
      <Toaster />
    </div>
  )
}

export default App;
