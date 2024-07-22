import { format } from "date-fns"
import { fr } from "date-fns/locale";

import {
    FormControl,
    FormField,
    FormItem,
    FormMessage
} from "@/presentation/components/ui/form";
import { CalendarIcon } from "lucide-react"
import { Calendar } from "../../ui/calendar";
import { Button } from "../../ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../ui/popover"
import { cn } from "@/common/utils"
import { INPUT_TEXT } from "@/data/constants/strings";

interface Props {
    title: string;
    form: any;
}

export const InputDatePicker = ({title, form }: Props) => {
    return (
      <FormField
      control={form.control}
      name={title}
      render={({ field }) => (
        <FormItem>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP",  { locale: fr })
                      ) : (
                        <span>{INPUT_TEXT.PICK_A_DATE}</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                  />
                </PopoverContent>
              </Popover>
              <FormMessage/>
        </FormItem>
      )}
    />    
    );
}