import { Prisma } from "@/generated/prisma/client";

export type PostWithUser = Prisma.PostGetPayload<{
  include: {
    User: true;
  };
}>;
