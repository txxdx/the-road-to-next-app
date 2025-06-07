import { Heading } from '@/components/heading';
import { Placeholder } from '@/components/placeholder';
import Spinner from '@/components/spinner';
import { TicketList } from '@/features/ticket/components/ticket-list';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

const TicketsPage = async () => {
	return (
		<div className="flex flex-1 flex-col gap-y-8">
			<Heading title="Tickets" description="All your tickets at one place" />

			<ErrorBoundary fallback={<Placeholder label="Error" />}>
				<Suspense fallback={<Spinner />}>
					<TicketList />
				</Suspense>
			</ErrorBoundary>
		</div>
	);
};

export default TicketsPage;
