import { Heading } from '@/components/heading';
import Spinner from '@/components/spinner';
import { CardCompact } from '@/components/ui/card-compact';
import { TicketCreateForm } from '@/features/ticket/components/ticket-create-form';
import { TicketList } from '@/features/ticket/components/ticket-list';
import { Suspense } from 'react';

// export const dynamic = 'force-dynamic';
// export const revalidate = 0;

const TicketsPage = async () => {
	return (
		<div className="flex flex-1 flex-col gap-y-8">
			<Heading title="Tickets" description="All your tickets at one place" />

			<CardCompact 
				className="w-full max-w-[420px] self-center"
				title="Create Ticket" 
				description="A new ticket will be created" 
				content={<TicketCreateForm />} />

				<Suspense fallback={<Spinner />}>
					<TicketList />
				</Suspense>
		</div>
	);
};

export default TicketsPage;
