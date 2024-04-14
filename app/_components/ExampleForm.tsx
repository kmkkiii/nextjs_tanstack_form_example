"use client";

import { exampleFormFactory } from "@/app/_components/exampleFormFactory";
import { FormApi, mergeForm, useTransform } from "@tanstack/react-form";
import { useFormState } from "react-dom";
import validateAction from "../_actions/validateAction";
import { schema } from "@/lib/zod/schema";

const ExampleForm = () => {
  const [state, action] = useFormState(
    validateAction,
    exampleFormFactory.initialFormState
  );

  const { useStore, Subscribe, Field, handleSubmit } =
    exampleFormFactory.useForm({
      transform: useTransform(
        (baseForm: FormApi<any, any>) => mergeForm(baseForm, state),
        [state]
      ),
      validators: { onChange: schema },
      onSubmit: async ({ value, formApi }) => {
        console.log(value, formApi);
      },
      onSubmitInvalid: ({ value, formApi }) => {
        console.error(value, formApi);
      },
    });

  const formErrors = useStore((formState) => formState.errors);

  return (
    <>
      <form action={action} onSubmit={() => handleSubmit()}>
        {formErrors.map((error) => (
          <p className="text-red-600" key={error as string}>
            {error}
          </p>
        ))}

        <Field name="name">
          {(field) => (
            <div className="flex flex-col">
              <label htmlFor="email">名前</label>
              <input
                className="text-black border border-gray p-2 mb-4 w-1/3"
                name="name"
                type="text"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
              />
            </div>
          )}
        </Field>
        <Field name="email">
          {(field) => (
            <div className="flex flex-col">
              <label htmlFor="email">メールアドレス</label>
              <input
                className="text-black border border-gray p-2 mb-4 w-1/3"
                name="email"
                type="email"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
              />
            </div>
          )}
        </Field>
        <Subscribe
          selector={(formState) => [
            formState.canSubmit,
            formState.isSubmitting,
          ]}
        >
          {([canSubmit, isSubmitting]) => (
            <button
              type="submit"
              disabled={!canSubmit}
              className="text-white bg-blue-700 hover:bg-blue-800 px-4 py-2 mt-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "..." : "送信"}
            </button>
          )}
        </Subscribe>
      </form>
    </>
  );
};
export default ExampleForm;
