import Form from "@shadcn/simplify/form";
import { Card, CardContent, CardHeader, CardTitle } from "@shadcn/ui/card";
import { z } from "zod";

const ValidUser = z.object({
  name: z.string().min(1, "Name is required").default(""),
  password: z.string().min(8, "Password must be at least 8 characters"),
  age: z.number({ required_error: "Age is required" }),
  gender: z.enum(["male", "female"]),
  date: z.date().min(new Date(), "Date must be in the future"),
  agree: z.boolean(),
});
const ValidateForm = () => {
  const Items = [
    { label: "Gender", value: "label-separator" },
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Other", value: "other" },
  ];
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <Card className=" w-[380px]">
        <CardHeader>
          <CardTitle>Example Form</CardTitle>
        </CardHeader>
        <CardContent>
          <Form
            className="flex flex-col gap-4"
            validator={ValidUser}
            onValid={(data) => console.log(data)}
            onInvalid={(errorFields) => console.log(errorFields)}
            fields={({ form }) => (
              <>
                <Form.Input
                  useForm={form}
                  name="age"
                  type="number"
                ></Form.Input>
                <Form.Input useForm={form} name="password" type="password" />
                <Form.TextArea useForm={form} name="name" />
                <Form.Select
                  useForm={form}
                  name="gender"
                  placeholder="Pick one"
                  items={Items}
                />

                <Form.DatePicker useForm={form} name="date" />

                <div className="flex gap-2 items-center">
                  <Form.Checkbox useForm={form} name="agree" />
                  <label>I agree to the terms </label>
                </div>

                <div className="flex gap-2 items-center">
                  <Form.Switch useForm={form} name="agree" />
                  <label>I agree to conditions</label>
                </div>

                <Form.RadioGroup
                  useForm={form}
                  name="gender"
                  items={Items}
                  className="flex"
                />
                <Form.SubmitButton useForm={form}>Submit</Form.SubmitButton>
              </>
            )}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default ValidateForm;
