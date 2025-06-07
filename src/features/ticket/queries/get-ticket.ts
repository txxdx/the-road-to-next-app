import { prisma } from '@/lib/prisma';

export const getTicket = async (id: string) => {
	const ticket = await prisma.ticket.findUnique({
		where: {
			id,
		},
	});

	return ticket;
};