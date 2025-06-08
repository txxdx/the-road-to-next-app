import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@radix-ui/react-label"
import { createTicket } from "../actions/create-ticket"

export const TicketCreateForm = () => {

  return (
    <form action={createTicket} className="flex flex-col gap-y-2">
      <Label htmlFor="title">Title</Label>
      <Input type="text" id="title" name="title" />
      <Label htmlFor="content">Content</Label>
      <Textarea id="content" name="content" />
      <Button type="submit">Create</Button>
    </form>
  )
}