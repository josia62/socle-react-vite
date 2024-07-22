import { useSelector } from 'react-redux';

import { userActions } from '@/services/zustand/actions/user';
import { userStates } from '@/services/zustand/states/user';
import { useForm } from '@/hooks/Example/useForm';
import { styles } from './style';

const ExampleScreen = () => {
  const { credentials } = useSelector(({ auth }: any) => auth);
  const { age } = userStates();
  const { incrementAge, handleUpdateAge } = userActions();
  const { formData, errors, handleChange, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <div style={styles.formGroup}>
        <label style={styles.label}>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} style={styles.input} />
        </label>
        {errors.name && <p style={styles.error}>{errors.name}</p>}
      </div>
      <div style={styles.formGroup}>
        <label style={styles.label}>
          Age:
          <input type="number" name="age" value={formData.age} onChange={handleChange} style={styles.input} />
        </label>
        {errors.age && <p style={styles.error}>{errors.age}</p>}
      </div>
      <button type="submit" style={styles.button}>Submit</button>
    </form>
  );
};

export default ExampleScreen;
