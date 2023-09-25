import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    const logout = async () => {
      try {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        navigate('/login');
      } catch (error) {
        console.error('Logout error:', error);
      }
    };

    logout();

  }, [navigate]); 

  return <div></div>;
}
