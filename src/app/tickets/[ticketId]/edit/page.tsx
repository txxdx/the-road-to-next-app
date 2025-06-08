import { CardCompact } from "@/components/ui/card-compact";
import { TicketEditForm } from "@/features/ticket/components/ticket-edit-form";
import { getTicket } from "@/features/ticket/queries/get-ticket";
import { notFound } from "next/navigation";

type TicketEditPageProps = {
  params: Promise<{
    ticketId: string;
  }>;
};

const TicketEditPage = async ({ params }: TicketEditPageProps) => {
  const { ticketId } = await params;

  const ticket = await getTicket(ticketId);

  if (!ticket) {
    notFound();
  }

  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <CardCompact 
        title="Edit Ticket" 
        description="Edit an existing ticket" 
        className="w-full max-w-[420px] animate-fade-in-from-top"
        content={<TicketEditForm ticket={ticket} />} />
    </div>
  )
}

export default TicketEditPage;