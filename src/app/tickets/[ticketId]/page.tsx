import { Placeholder } from '@/components/placeholder';
import { Button } from '@/components/ui/button';
import { initialTickets } from '@/data';
import { TicketItem } from '@/features/ticket/components/ticket-item';
import { ticketsPath } from '@/paths';
import Link from 'next/link';

type TicketPageProps = {
	params: {
		ticketId: string;
	};
};

const TicketPage = async ({ params }: TicketPageProps) => {
	const { ticketId } = await params;
	const ticket = initialTickets.find((ticket) => ticket.id === ticketId);
	console.log(ticket);

	if (!ticket) {
		return (
			<div className="flex-1 flex">
				<Placeholder
					label="Ticket not found"
					button={
						<Button asChild variant="outline">
							<Link href={ticketsPath()}>Go To Tickets</Link>
						</Button>
					}
				/>

				<Placeholder label="Ticket not found" />
			</div>
		);
	}

	return (
		<div className="flex justify-center animate-fade-in-from-top ">
			<TicketItem ticket={ticket} isDetail />
		</div>
	);
};

export default TicketPage;
