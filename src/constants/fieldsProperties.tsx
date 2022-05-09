export const fieldsProperties = {
  name: "Your name",
  email: "Email",
  phone: "Phone",
  job: "Frontend developer",
  file: { name: "Upload your photo" },
};
export type FieldsProperties = Record<
  "name" | "email" | "phone" | "job",
  string
> & { file: File };
