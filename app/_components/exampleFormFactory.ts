import { createFormFactory } from "@tanstack/react-form";
import { zodValidator } from "@tanstack/zod-form-adapter";

export const exampleFormFactory = createFormFactory({
  validatorAdapter: zodValidator,
  defaultValues: {
    name: "",
    email: "",
  },
});
