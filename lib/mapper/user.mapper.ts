import { User } from "@/type";

export const mapUser = (doc: any): User => ({
  name: doc.name,
  email: doc.email,
  avatar: doc.avatar
});
