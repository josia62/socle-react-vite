import {
  Form,
} from "@/presentation/components/ui/form";
import { Button } from '@/presentation/components/ui/button';
import { styles } from './style';
import { useFormulaire } from '@/hooks/Example/useFormulaire';
import { InputField } from '@/presentation/components/Inputs/InputField';
import { EXAMPLE_FIELD } from "@/data/dto/example/example-request.dto";
import { BUTTON_TITLE } from "@/data/constants/strings";
import { INPUT_TYPE } from "@/data/constants/types";
import { InputSelect } from "@/presentation/components/Inputs/InputSelect";
import { sexDatas } from "@/data/constants/data";
import { InputDatePicker } from "@/presentation/components/Inputs/InputDatePicker";

const FormScreen = () => {
  const { form, onSubmit } = useFormulaire();
  return (
    <div style={styles.form}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <InputField title={EXAMPLE_FIELD.USER_NAME} form={form} type={INPUT_TYPE.SIMPLE} />
          <InputField title={EXAMPLE_FIELD.EMAIL} form={form} type={INPUT_TYPE.TEXT_AREA} />
          <InputSelect title={EXAMPLE_FIELD.SEX} form={form} data={sexDatas} />
          <InputDatePicker title={EXAMPLE_FIELD.DATE_OF_BIRTH} form={form} />
          <Button type="submit">{BUTTON_TITLE.SUBMIT}</Button>
        </form>
      </Form>
    </div>
  );
};

export default FormScreen;
