import { z } from 'zod';
import { INPUT_ERRORS } from '@/data/constants/errors';

export const formSchema = z.object({
  username: z.string().min(2, {
    message: INPUT_ERRORS.USER_NAME_ERROR,
  }),
  email: z.string().email({
    message: INPUT_ERRORS.EMAIL_ERROR,
  }),
  sex: z.string({
    required_error: INPUT_ERRORS.SELECT_ERROR,
  }),
  dob: z.date({
    required_error: INPUT_ERRORS.DATE_PICK_ERROR,
  }),
});