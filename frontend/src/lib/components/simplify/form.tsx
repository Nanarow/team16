import {
  ButtonHTMLAttributes,
  PropsWithChildren,
  HTMLInputTypeAttribute,
} from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FieldErrors,
  FieldValues,
  UseFormReturn,
  useForm,
  Path,
  PathValue,
} from "react-hook-form";
import { z } from "zod";
import { Tooltip } from "./tooltip";
import {
  Input,
  Textarea,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  AlertCircle,
  Button,
  Checkbox,
  Switch,
  RadioGroup,
  RadioGroupItem,
  Label,
  DatePicker,
  InputProps,
  TextareaProps,
} from "@shadcn/ui";

interface Fields<T extends FieldValues> {
  form: UseFormReturn<T, any, undefined>;
}

interface FormProps<T extends FieldValues> extends PropsWithChildren {
  validator: z.ZodType<T>;
  onValid: (data: T) => void;
  onInvalid?: (errorFields: FieldErrors<T>) => void;
  fields: ({}: Fields<T>) => React.ReactNode;
  className?: string;
}
type FormType = <T extends FieldValues>({}: FormProps<T>) => JSX.Element;
const Form: FormType & {
  Input: typeof FormInput;
  TextArea: typeof FormTextArea;
  Select: typeof FormSelect;
  SubmitButton: typeof FormSubmitButton;
  DatePicker: typeof FormDatePicker;
  Checkbox: typeof FormCheckbox;
  Switch: typeof FormSwitch;
  RadioGroup: typeof FormRadioGroup;
} = <T extends FieldValues>({
  children,
  validator,
  onValid,
  onInvalid,
  fields,
  className,
}: FormProps<T>) => {
  const form = useForm<T>({ resolver: zodResolver(validator) });
  return (
    <form
      onSubmit={form.handleSubmit(onValid, onInvalid)}
      className={className}
    >
      {fields({ form })}
      {children}
    </form>
  );
};

// *form input

interface FormInputProps<T extends FieldValues> extends InputProps {
  name: Path<T>;
  type: HTMLInputTypeAttribute;
  useForm: UseFormReturn<T, any, undefined>;
}

const FormInput = <T extends FieldValues>({
  type,
  name,
  useForm,
  className,
  ...props
}: FormInputProps<T>) => {
  const {
    formState: { errors },
    setValue,
  } = useForm;

  return (
    <div className="flex flex-col gap-1 relative grow">
      {/* {errors[name] && (
        <Tooltip
          className=" bg-red-500 text-white"
          content={() => {
            return <p>{`${errors[name]?.message}`}</p>;
          }}
          side="right"
        >
          <AlertCircle className="absolute top-1/2 -translate-y-1/2 text-red-500 right-1 scale-75" />
        </Tooltip>
      )} */}
      <Input
        type={type}
        {...props}
        onChange={(e) => {
          const value = type === "number" ? +e.target.value : e.target.value;
          setValue(name, value as PathValue<T, Path<T>>, {
            shouldValidate: true,
            shouldDirty: true,
          });
        }}
      />
      {errors[name] && (
        <p className="text-sm text-red-500">{`${errors[name]?.message}`}</p>
      )}
    </div>
  );
};

// *text area
interface FormTextAreaProps<T extends FieldValues> extends TextareaProps {
  name: Path<T>;
  useForm: UseFormReturn<T, any, undefined>;
}

const FormTextArea = <T extends FieldValues>({
  name,
  useForm,
  className,
  ...props
}: FormTextAreaProps<T>) => {
  const { setValue } = useForm;
  return (
    <Textarea
      {...props}
      onChange={(e) =>
        setValue(name, e.target.value as PathValue<T, Path<T>>, {
          shouldValidate: true,
          shouldDirty: true,
        })
      }
      className={className}
    />
  );
};

// *select
interface FormSelectProps<T extends FieldValues> {
  name: Path<T>;
  useForm: UseFormReturn<T, any, undefined>;
  items: ItemList[];
  className?: string;
  placeholder?: string;
}

export interface ItemList {
  value: string | "label-separator";
  label: string;
}

const FormSelect = <T extends FieldValues>({
  name,
  useForm,
  className,
  placeholder,
  items,
}: FormSelectProps<T>) => {
  const { setValue } = useForm;
  return (
    <Select
      onValueChange={(v) =>
        setValue(name, v as PathValue<T, Path<T>>, {
          shouldValidate: true,
          shouldDirty: true,
        })
      }
    >
      <SelectTrigger className={className}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {items.map((item) => {
            if (item.value === "label-separator") {
              return <SelectLabel key={item.label}>{item.label}</SelectLabel>;
            }
            return (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

// *text area
interface FormDatePickerProps<T extends FieldValues> {
  name: Path<T>;
  useForm: UseFormReturn<T, any, undefined>;
  className?: string;
}

const FormDatePicker = <T extends FieldValues>({
  name,
  useForm,
  className,
  ...props
}: FormDatePickerProps<T>) => {
  const { setValue } = useForm;
  return (
    <DatePicker
      {...props}
      onSelect={(v) =>
        setValue(name, v as PathValue<T, Path<T>>, {
          shouldValidate: true,
          shouldDirty: true,
        })
      }
      className={className}
    />
  );
};

// *submit button

interface SubmitButtonProps<T extends FieldValues>
  extends PropsWithChildren,
    ButtonHTMLAttributes<HTMLButtonElement> {
  useForm: UseFormReturn<T, any, undefined>;
}
const FormSubmitButton = <T extends FieldValues>({
  useForm,
  children,
  ...btnProps
}: SubmitButtonProps<T>) => {
  return (
    <Button type="submit" disabled={!useForm.formState.isDirty} {...btnProps}>
      {children}
    </Button>
  );
};

// *checkbox
interface FormCheckboxProps<T extends FieldValues> {
  name: Path<T>;
  useForm: UseFormReturn<T, any, undefined>;
  className?: string;
  id?: string;
}
const FormCheckbox = <T extends FieldValues>({
  name,
  useForm,
  className,
  id,
}: FormCheckboxProps<T>) => {
  const { setValue } = useForm;
  return (
    <Checkbox
      id={id}
      onCheckedChange={(e) =>
        setValue(name, e as PathValue<T, Path<T>>, {
          shouldValidate: true,
          shouldDirty: true,
        })
      }
      className={className}
    />
  );
};

// *switch
interface FormSwitchProps<T extends FieldValues> {
  name: Path<T>;
  useForm: UseFormReturn<T, any, undefined>;
  className?: string;
}
const FormSwitch = <T extends FieldValues>({
  name,
  useForm,
  className,
}: FormSwitchProps<T>) => {
  const { setValue } = useForm;
  // useEffect(() => {
  //   setValue(name, false as PathValue<T, Path<T>>);
  // }, []);

  return (
    <Switch
      onCheckedChange={(e) =>
        setValue(name, e as PathValue<T, Path<T>>, {
          shouldValidate: true,
          shouldDirty: true,
        })
      }
      className={className}
    />
  );
};

// *radio group
interface FormRadioGroupProps<T extends FieldValues> {
  name: Path<T>;
  useForm: UseFormReturn<T, any, undefined>;
  className?: string;
  items: ItemList[];
}
const FormRadioGroup = <T extends FieldValues>({
  name,
  useForm,
  className,
  items,
}: FormRadioGroupProps<T>) => {
  const { setValue } = useForm;
  return (
    <RadioGroup
      className={className}
      onValueChange={(v) =>
        setValue(name, v as PathValue<T, Path<T>>, {
          shouldValidate: true,
          shouldDirty: true,
        })
      }
      defaultValue={
        items[0].value !== "label-separator" ? items[0].value : items[1].value
      }
    >
      {items.map(
        (item) =>
          item.value !== "label-separator" && (
            <div className="flex items-center space-x-2" key={item.value}>
              <RadioGroupItem value={item.value} />
              <Label>{item.label}</Label>
            </div>
          )
      )}
    </RadioGroup>
  );
};

Form.RadioGroup = FormRadioGroup;
Form.Switch = FormSwitch;
Form.Checkbox = FormCheckbox;
Form.DatePicker = FormDatePicker;
Form.SubmitButton = FormSubmitButton;
Form.Select = FormSelect;
Form.Input = FormInput;
Form.TextArea = FormTextArea;
export default Form;
