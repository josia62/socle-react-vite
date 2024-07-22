
import {
    FormControl,
    FormField,
    FormItem,
} from "@/presentation/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/presentation/components/ui/select";

interface Props {
    title: string;
    form: any;
    data: string[]
}

export const InputSelect = ({title, form, data }: Props) => {
    return (
      <FormField
      control={form.control}
      name={title}
      render={({ field }) => (
        <FormItem>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                  <SelectValue>{field.value}</SelectValue>
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {data.map((option, index) => (
                <SelectItem key={index} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </FormItem>
      )}
    />    
    );
}