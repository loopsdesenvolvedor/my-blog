import { Prisma } from "@/generated/prisma/client";

export type BlogWithUsers = Prisma.BlogGetPayload<{
  include: {
    users: true;
  };
}>;

export type BlogUsersWitUsers = Prisma.BlogUserGetPayload<{
  include: {
    user: true;
  };
}>;
