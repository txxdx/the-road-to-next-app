'use server';
import { prisma } from "@/lib/prisma";
import { ticketsPath } from "@/paths";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const createTicket = async (formData: FormData) => {
  'use server';

  const title = formData.get('title') as string;
  const content = formData.get('content') as string;

  const data = {
    title,
    content,
  }

  await prisma.ticket.create({
    data,
  })

  revalidatePath(ticketsPath())
  redirect(ticketsPath())
}