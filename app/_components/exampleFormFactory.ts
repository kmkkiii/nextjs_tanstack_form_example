import { createFormFactory } from "@tanstack/react-form";
import { zodValidator } from "@tanstack/zod-form-adapter";

export const exampleFormFactory = createFormFactory({
  validatorAdapter: zodValidator,
  defaultValues: {
    name: "",
    email: "",
    w,
  },
  onServerValidate({ value }) {
    let errors = [];

    if (value.name == "test") {
      errors.push("Server validation: すでに登録されている名前です");
    }
    if (value.email == "test@example.com") {
      errors.push("Server validation: すでに登録されているメールアドレスです");
    }

    return errors.join(", ");
  },
});
