"use server";

import { exampleFormFactory } from "@/app/_components/exampleFormFactory";
import { schema } from "@/lib/zod/schema";

export default async function validateAction(
  prev: unknown,
  formData: FormData
) {
  schema.safeParse(formData);
  return await exampleFormFactory.validateFormData(formData);
}
