'use server';

import { ticketsPath } from "@/paths";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

export const updateTicket = async (id: string, formData: FormData) => {

  const title = formData.get('title') as string;
  const content = formData.get('content') as string;

  const data = {title, content}

  await prisma.ticket.update({
    where: {id},
    data,
  })

  revalidatePath(ticketsPath())
  redirect(ticketsPath())
}