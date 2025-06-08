'use client'; 

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ticketEditPath, ticketPath } from '@/paths';
import Link from 'next/link';
import { TICKET_ICONS } from '../constants';
import { LucidePencil, LucideSquareArrowOutUpRight, LucideTrash } from 'lucide-react';
import { Button } from '@/components/ui/button';
import clsx from 'clsx';
import { Ticket } from '@prisma/client';
import { deleteTicket } from '../actions/delete-ticket';

type TicketItemProps = {
	ticket: Ticket;
	isDetail?: boolean;
};

const TicketItem = ({ ticket, isDetail }: TicketItemProps) => {
	// if (!ticket) return null;


	const editButton = (
		<Button asChild size="icon" variant="outline">
			<Link prefetch href={ticketEditPath(ticket.id)} className="text-sm underline">
				<LucidePencil className="h-4 w-4" />
			</Link>
		</Button>
	)

	const detailButton = (
		<Button asChild size="icon" variant="outline">
			<Link prefetch href={ticketPath(ticket.id)} className="text-sm underline">
				<LucideSquareArrowOutUpRight className="h-4 w-4" />
			</Link>
		</Button>
	);

	const handleDeleteTicket = async () => {
		await deleteTicket(ticket.id);
	};

	const deleteButton = (
		<Button size="icon" variant="outline" onClick={handleDeleteTicket}>
			<LucideTrash className="h-4 w-4" />
		</Button>
	)


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

			<div className="flex flex-col gap-y-1">
				{isDetail ? <>
					{deleteButton}
					{editButton}
				</> : <>
					{detailButton}
					{editButton}
				</>}
			</div>
		</div>
	);
};

export { TicketItem };
