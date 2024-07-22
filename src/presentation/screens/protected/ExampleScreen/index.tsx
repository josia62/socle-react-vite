import {
  Form,
} from "@/presentation/components/ui/form";
import { Button } from '@/presentation/components/ui/button';
import { styles } from './style';
import { useFormulaire } from '@/hooks/Example/useFormulaire';
import { InputField } from '@/presentation/components/Inputs/InputField';
import { EXAMPLE_FIELD } from "@/data/dto/example/example-request.dto";
import { BUTTON_TITLE } from "@/data/constants/strings";

const ExampleScreen = () => {
  const { form, onSubmit } = useFormulaire();
  return (
    <div style={styles.form}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <InputField title={EXAMPLE_FIELD.USER_NAME} form={form} />
          <InputField title={EXAMPLE_FIELD.EMAIL} form={form} />
          <Button type="submit">{BUTTON_TITLE.SUBMIT}</Button>
        </form>
      </Form>
    </div>
  );
};

export default ExampleScreen;
