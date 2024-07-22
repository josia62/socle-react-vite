import { useState, ChangeEvent, FormEvent } from 'react';
import { userSchema } from '@/common/validator/zod/example.validator';
import { z, ZodError } from 'zod';
import { useSelector } from 'react-redux';
import { userActions } from '@/services/zustand/actions/user';
import { userStates } from '@/services/zustand/states/user';

type FormData = z.infer<typeof userSchema>;

type ErrorState = Partial<Record<keyof FormData, string>>;

const ExampleScreen = () => {
  const { credentials } = useSelector(({ auth }: any) => auth);
  const { age } = userStates();
  const { incrementAge, handleUpdateAge } = userActions();
  const [formData, setFormData] = useState<FormData>({ name: '', age: '' as unknown as number });
  const [errors, setErrors] = useState<ErrorState>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      userSchema.parse({ ...formData, age: Number(formData.age) });
      setErrors({});
    } catch (e) {
      if (e instanceof ZodError) {
        const newErrors: ErrorState = e.errors.reduce((acc, curr) => {
          const path = curr.path[0] as keyof FormData;
          acc[path] = curr.message;
          return acc;
        }, {} as ErrorState);
        setErrors(newErrors);
      }
    }
  };

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

const styles = {
    form: {
      maxWidth: '400px',
      margin: '0 auto',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '8px',
      backgroundColor: '#f9f9f9',
    },
    formGroup: {
      marginBottom: '15px',
    },
    label: {
      display: 'block',
      marginBottom: '5px',
      fontWeight: 'bold',
    },
    input: {
      width: '100%',
      padding: '8px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      boxSizing: 'border-box' as 'border-box',
    },
    button: {
      width: '100%',
      padding: '10px',
      backgroundColor: '#007BFF',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
    error: {
      color: 'red',
      marginTop: '5px',
    },
  };

export default ExampleScreen;
