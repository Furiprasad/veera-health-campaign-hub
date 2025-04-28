
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface BookingFormModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  packageName: string;
}

export function BookingFormModal({ open, onOpenChange, packageName }: BookingFormModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-auto p-0">
        <div className="bg-veera-blue text-white p-4">
          <h2 className="text-xl font-bold">Book {packageName}</h2>
          <p className="text-sm">Please complete the form below to schedule your appointment</p>
        </div>
        <div className="w-full h-[80vh]">
          <iframe 
            src="https://docs.google.com/forms/d/e/1FAIpQLSd60uNnBpbQZ6A9myuYeAnz2YHQ0jsyFEF2WQQ7kT3wL2Q5EA/viewform?embedded=true" 
            width="100%" 
            height="100%" 
            style={{ border: "none" }}
            title="Booking Form"
          >
            Loading...
          </iframe>
        </div>
      </DialogContent>
    </Dialog>
  );
}
