import { z, ZodError } from 'zod';
import { useState, ChangeEvent, FormEvent } from 'react';

import { userSchema } from "@/common/validator/zod/example.validator";

type FormData = z.infer<typeof userSchema>;

type ErrorState = Partial<Record<keyof FormData, string>>;

export const useForm = () => {
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
  
    return {
      formData,
      errors,
      handleChange,
      handleSubmit,
    };
  };