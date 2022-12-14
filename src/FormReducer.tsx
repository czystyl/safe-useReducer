import { EventHandler, FormEventHandler, useReducer } from 'react';
import TextInput from './components/TextInput';
import Button from './components/Button';
import { sendToAPI } from './fakeApi';
import Success from './components/Success';
import ErrorMessage from './components/ErrorMessage';

type Typing = { type: 'typing'; email: string };
type Fetching = { type: 'fetching' };
type FetchSuccess = { type: 'success'; message: string };
type FetchFailed = { type: 'failed'; error: string };

type ResponseState = Typing | Fetching | FetchSuccess | FetchFailed;

type BaseState = {
  email: string;
};

type State = BaseState & ResponseState;

const initialState: State = {
  type: 'typing',
  email: '',
};

type Action = Fetching | Typing | FetchSuccess | FetchFailed;

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'typing':
    case 'fetching':
    case 'failed': {
      return { ...state, ...action };
    }

    case 'success': {
      return { ...action, email: '' };
    }
  }
}

function FormReducerPlus() {
  const [state, dispatch] = useReducer(reducer, initialState);

  async function handleEmailSend() {
    if (!/^\S+@\S+\.\S+$/.test(state.email)) {
      return dispatch({ type: 'failed', error: 'Invalid email' });
    }

    try {
      dispatch({ type: 'fetching' });

      const response = await sendToAPI();

      dispatch({ type: 'success', message: response });
    } catch (error) {
      if (error instanceof Error) {
        dispatch({ type: 'failed', error: error.message });
      }
    }
  }

  function handleInputChange(email: string) {
    dispatch({ type: 'typing', email });
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
          value={state.email}
          onChange={handleInputChange}
          placeholder="name@example.com"
        />

        <Button
          title="Send 🚀"
          isActive
          onClick={handleEmailSend}
          disabled={state.email === ''}
          isLoading={state.type === 'fetching'}
        />
      </form>

      {state.type === 'failed' && <ErrorMessage error={state.error} />}
      {state.type === 'success' && <Success message={state.message} />}
    </div>
  );
}

export default FormReducerPlus;
