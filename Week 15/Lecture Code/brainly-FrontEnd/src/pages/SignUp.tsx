import { useRef } from 'react';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import axios from 'axios';
import { BACKEND_URL } from '../config';
import { useNavigate } from 'react-router-dom';

export function SignUp() {
  const usernameRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();

  async function signup() {
    try {
      const username = usernameRef.current?.value;
      const password = passwordRef.current?.value;

      if (!username || !password) {
        alert('Please fill in both fields.');
        return;
      }

      await axios.post(`${BACKEND_URL}/api/v1/signup`, {
        username,
        password,
      });

      navigate("/signin");
      alert('You have signed up successfully!');
    } catch (error) {
      alert('Signup failed. Please try again.');
      console.error('Error during signup:', error);
    }
  }

  return (
    <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
      <div className="bg-white rounded border min-w-48 p-8 rounded-md">
        <Input ref={usernameRef} placeholder="Username" />
        <Input ref={passwordRef} placeholder="Password" />
        <div className="flex justify-center pt-4">
          <Button
            onClick={signup}
            variant="primary"
            text="Sign Up"
            fullWidth={true}
            loading={false}
          />
        </div>
      </div>
    </div>
  );
}
