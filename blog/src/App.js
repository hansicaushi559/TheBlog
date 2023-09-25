import './App.css';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Posts from './components/Posts';
import axiosInstance from './axios';


function App() {
  const [blog, setBlog] = useState([])
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState('');

  const handleSearch = async (query) => {
    try {
      const response = await axiosInstance.get(`search?search=${query}`);
      setBlog(response.data);
    } catch (error) {
      console.error('Error searching posts:', error);
    }
  };

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const response = await axiosInstance.get();
        setBlog(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getBlogs();

    const checkAuthentication = async () => {
      try {
        const response = await axiosInstance.get('user/check-auth/');
        setIsAuthenticated(response.data.isAuthenticated);
        setUserName(response.data.userName);
      } catch (error) {
        console.error('Error checking authentication:', error);
      }
    };

    checkAuthentication();
  }, []);

  return (
    <>
      <Header isAuthenticated={isAuthenticated} userName={userName} onSearch={handleSearch} />
      <div className="App">
        <Posts posts={blog} />
      </div>
      <Footer />
    </>
  );
}

export default App;
