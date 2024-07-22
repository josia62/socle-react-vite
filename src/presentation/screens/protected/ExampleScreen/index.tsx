import { useSelector } from 'react-redux';
import { Input } from '@/presentation/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/presentation/components/ui/form";
import { Button } from '@/presentation/components/ui/button';
import { styles } from './style';
import { useFormulaire } from '@/hooks/Example/useFormulaire';
import { userActions } from '@/services/zustand/actions/user';
import { userStates } from '@/services/zustand/states/user';

const ExampleScreen = () => {
  const { credentials } = useSelector(({ auth }: any) => auth);
  const { age } = userStates();
  const { incrementAge, handleUpdateAge } = userActions();
  const { form, onSubmit } = useFormulaire();
  return (
    <div style={styles.form}>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="example@domain.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
    </div>
  );
};

export default ExampleScreen;
