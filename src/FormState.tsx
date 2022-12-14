import { useState } from 'react';
import TextInput from './components/TextInput';
import Button from './components/Button';
import { sendToAPI } from './fakeApi';
import Success from './components/Success';
import ErrorMessage from './components/ErrorMessage';

function FormState() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  async function handleEmailSend() {
    setLoading(true);
    setSuccess(null);
    setErrorMessage(null);

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setLoading(false);
      return setErrorMessage('Invalid email');
    }

    try {
      const response = await sendToAPI();

      setLoading(false);
      setSuccess(response);
      setEmail('');
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      }

      setLoading(false);
    }
  }

  function handleInputChange(value: string) {
    setLoading(false);
    setSuccess(null);
    setErrorMessage(null);
    setEmail(value);
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleEmailSend();
        }}
        className="flex mb-4"
      >
        <TextInput
          value={email}
          onChange={handleInputChange}
          placeholder="name@example.com"
        />

        <Button
          title="Send  🚀"
          isActive
          onClick={handleEmailSend}
          disabled={email === ''}
          isLoading={loading}
        />
      </form>

      {errorMessage && <ErrorMessage error={errorMessage} />}
      {success && <Success message={success} />}
    </div>
  );
}

export default FormState;
