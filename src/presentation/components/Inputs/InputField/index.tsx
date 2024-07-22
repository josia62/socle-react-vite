
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/presentation/components/ui/form";
import { Input } from '@/presentation/components/ui/input';
import { INPUT_TYPE } from "@/data/constants/types";
import { Textarea } from "@/presentation/components/ui/textarea";

interface Props {
    title: string;
    form: any;
    type: string;
    placeHolder?: string;
  }

export const InputField = ({title, form, type, placeHolder = ''}: Props) => {
    
  const renderInput = (field: any, type: string, placeholder?: string) => {
    switch (type) {
      case INPUT_TYPE.SIMPLE:
        return <Input placeholder={placeholder} {...field} />;
      case INPUT_TYPE.TEXT_AREA:
        return <Textarea placeholder={placeholder} {...field} />;
      default:
        return null;
    }
  };

    return (
        <FormField
        control={form.control}
        name={title}
        render={({ field }) => (
          <FormItem>
            <FormLabel>{title}</FormLabel>
            <FormControl>
                {renderInput(field, type, placeHolder)}
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      );
}