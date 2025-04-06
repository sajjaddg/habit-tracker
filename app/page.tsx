import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col p-4">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-px">
          <h1>My challenges</h1>
          <span>Wed, 18</span>
        </div>
        <ModeToggle />
        <Button variant="ghost" size="icon">
          <Plus className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}
