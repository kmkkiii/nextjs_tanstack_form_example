"use server";

import { exampleFormFactory } from "@/app/_components/exampleFormFactory";
import { schema } from "@/lib/zod/schema";

export default async function validateAction(
  prev: unknown,
  formData: FormData
) {
  return await exampleFormFactory.validateFormData(formData);
}
