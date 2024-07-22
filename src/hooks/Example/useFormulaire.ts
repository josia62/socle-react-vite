import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { formSchema } from "@/common/validator/zod/example.validator";

export const useFormulaire = () => {
  const initialValues  = {
    username: "",
    email: "",
  }
   
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: initialValues 
  });

  const onSubmit = (values: z.infer<typeof formSchema>) =>  {
    console.log(values);
  }

  return {
      form,
      onSubmit
  }
};