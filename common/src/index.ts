import z from "zod";

export const signupInput = z.object({
  username: z.string().email(),
  password: z.string().min(8),
  name: z.string().optional(),
});

export const signinInput = z.object({
  username: z.string().email(),
  password: z.string().min(8),
});

export const createblogInput = z.object({
  title: z.string(),
  content: z.string(),
});

export const updateblogInput = z.object({
  title: z.string(),
  content: z.string(),
  id: z.number()
});


// below will be needed by fe
export type SignupInput = z.infer<typeof signupInput>;
export type SigninInput = z.infer<typeof signinInput>;
export type CreateBlogInput = z.infer<typeof createblogInput>;
export type UpdateBlogInput = z.infer<typeof updateblogInput>;
