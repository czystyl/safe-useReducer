import { useState } from 'react';
import Button from './components/Button';
import FormReducer from './FormReducer';
import FormState from './FormState';

type FormType = 'state' | 'reducer';

function App() {
  const [formType, setFormType] = useState<FormType>('state');

  return (
    <div className="flex justify-center mt-4 flex-col items-center">
      <h1 className="text-xl font-bold italic text-green-900">Examples:</h1>

      <div className="flex flex-row mt-4">
        <Button
          title="useState"
          onClick={() => setFormType('state')}
          isActive={formType === 'state'}
        />
        <Button
          title="useReducer"
          onClick={() => setFormType('reducer')}
          isActive={formType === 'reducer'}
        />
      </div>

      <div className="mt-8">
        {formType === 'state' ? <FormState /> : null}
        {formType === 'reducer' ? <FormReducer /> : null}
      </div>
    </div>
  );
}

export default App;
