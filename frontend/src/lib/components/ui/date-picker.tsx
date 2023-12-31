import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@shadcn/ui/popover";
import { Button } from "../ui/button";
import { cn } from "@cn/utils";
import { Calendar } from "../ui/calendar";
interface DatePickerProps {
  className?: string;
  onSelect?: (date: Date) => any;
}
export function DatePicker({ className, onSelect }: DatePickerProps) {
  const [date, setDate] = React.useState<Date>();
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={(_, date) => {
            onSelect && onSelect(date);
            setDate(date);
          }}
          initialFocus
          className={className}
        />
      </PopoverContent>
    </Popover>
  );
}
