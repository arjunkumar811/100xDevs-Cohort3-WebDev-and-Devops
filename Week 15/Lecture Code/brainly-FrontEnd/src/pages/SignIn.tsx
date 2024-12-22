import { useState, useRef } from 'react';
import { Button } from '../components/Button';
import { Input } from './../components/Input';
import { BACKEND_URL } from '../config';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



export function SignIn() {
  const usernameRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  async function signin() {
    setError(''); 
    setLoading(true);

    try {
      const username = usernameRef.current?.value;
      const password = passwordRef.current?.value;

      if (!username || !password) {
        alert('Please fill in both fields.');
        setLoading(false);
        return;
      }

      const response = await axios.post(`${BACKEND_URL}/api/v1/signin`, {
        username,
        password,
      });

      const jwt = response.data.token;
      localStorage.setItem('token', jwt);
      navigate("/dashboard");
      

    } catch (error) {
      setError('Sign-in failed. Please check your credentials and try again.');
      console.error('Error during sign-in:', error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
      <div className="bg-white rounded border min-w-48 p-8 rounded-md">
        <Input ref={usernameRef} placeholder="Username" />
        <Input ref={passwordRef} placeholder="Password" />
        
        {error && <div className="text-red-500 text-center mb-4">{error}</div>}

        <div className="flex justify-center pt-4">
          <Button onClick={signin} variant="primary" text="Sign In" fullWidth={true} loading={loading} />
        </div>
      </div>
    </div>
  );
}
