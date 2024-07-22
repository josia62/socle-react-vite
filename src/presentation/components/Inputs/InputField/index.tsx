
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/presentation/components/ui/form";
import { Input } from '@/presentation/components/ui/input';

interface Props {
    title: string;
    form: any;
    placeHolder?: string;
  }

export const InputField = ({title, form, placeHolder = ''}: Props) => {
    return (
        <FormField
        control={form.control}
        name={title}
        render={({ field }) => (
          <FormItem>
            <FormLabel>{title}</FormLabel>
            <FormControl>
              <Input placeholder={placeHolder} {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      );
}