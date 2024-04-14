"use server";

import { exampleFormFactory } from "@/app/_components/exampleFormFactory";

export default async function validateAction(
  prev: unknown,
  formData: FormData
) {
  return await exampleFormFactory.validateFormData(formData);
}
