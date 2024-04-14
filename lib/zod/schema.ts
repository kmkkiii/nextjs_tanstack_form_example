import { z } from "zod";

export const schema = z.object({
  name: z.string().min(1, "Client validation: 名前を入力してください"),
  email: z
    .string()
    .min(1, "Client validation: メールアドレスを入力してください")
    .email("Client validation: メールアドレスの形式が正しくありません"),
});
