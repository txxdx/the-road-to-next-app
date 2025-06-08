import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@radix-ui/react-label"
import { updateTicket } from "../actions/update-ticket"
import { Ticket } from "@prisma/client"

type TicketEditFormProps = {
  ticket: Ticket;
}

export const TicketEditForm = ({ticket}: TicketEditFormProps) => {

  return (
    <form action={updateTicket.bind(null, ticket.id)} className="flex flex-col gap-y-2">
      <Input type="hidden" name="id" value={ticket.id} />
      <Label htmlFor="title">Title</Label>
      <Input type="text" id="title" name="title" defaultValue={ticket.title} />
      <Label htmlFor="content">Content</Label>
      <Textarea id="content" name="content" defaultValue={ticket.content} />
      <Button type="submit">Update</Button>
    </form>
  )
}