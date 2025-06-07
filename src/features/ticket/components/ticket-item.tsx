import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ticketPath } from '@/paths';
import Link from 'next/link';
import { TICKET_ICONS } from '../constants';
import { Ticket } from '../types';
import { LucideSquareArrowOutUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import clsx from 'clsx';

type TicketItemProps = {
	ticket: Ticket;
	isDetail?: boolean;
};

const TicketItem = ({ ticket, isDetail }: TicketItemProps) => {
	const detailButton = (
		<Button asChild size="icon" variant="outline">
			<Link href={ticketPath(ticket.id)} className="text-sm underline">
				<LucideSquareArrowOutUpRight className="h-4 w-4" />
			</Link>
		</Button>
	);
	return (
		<div
			className={clsx('w-full flex gap-x-1', {
				'max-w-[420px]': !isDetail,
				'max-w-[580px]': isDetail,
			})}
		>
			<Card className="w-full">
				<CardHeader>
					<CardTitle className="flex gap-x-2 items-center">
						<span>{TICKET_ICONS[ticket.status]}</span>
						<span className="truncate">{ticket.title}</span>
					</CardTitle>
				</CardHeader>
				<CardContent>
					<span
						className={clsx(' whitespace-break-spaces', {
							'line-clamp-3': !isDetail,
						})}
					>
						{ticket.content}
					</span>
				</CardContent>
			</Card>

			{!isDetail && <div className="flex flex-col gap-y-1">{detailButton}</div>}
		</div>
	);
};

export { TicketItem };
