
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { BookingFormModal } from "./BookingFormModal";

interface HealthPackageProps {
  title: string;
  tests: string[];
  originalPrice: number;
  offerPrice: number;
}

export function HealthPackageCard({ title, tests, originalPrice, offerPrice }: HealthPackageProps) {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Card className="w-full overflow-hidden transition-all duration-300 hover:shadow-lg animate-fade-in">
        <CardHeader className={`${title.includes('Gold') ? 'bg-yellow-50' : title.includes('Platinum') ? 'bg-gray-50' : 'bg-blue-50'}`}>
          <CardTitle className="text-veera-blue">{title}</CardTitle>
          <CardDescription>
            <span className="font-semibold text-veera-green">Full health assessment</span>
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          {!isDetailsOpen ? (
            <p className="text-gray-600 mb-4">
              Comprehensive health checkup package including essential tests.
            </p>
          ) : (
            <div className="space-y-2 mb-4">
              <h4 className="font-medium text-veera-blue">Includes:</h4>
              <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                {tests.map((test, index) => (
                  <li key={index}>{test}</li>
                ))}
              </ul>
            </div>
          )}
          
          <div className="flex items-center justify-between mt-4">
            <div>
              <span className="text-gray-400 line-through text-sm">₹{originalPrice}</span>
              <p className="font-bold text-xl text-veera-blue">₹{offerPrice}</p>
            </div>
            <Button 
              variant="link" 
              onClick={() => setIsDetailsOpen(!isDetailsOpen)}
              className="text-veera-blue hover:text-veera-green"
            >
              {isDetailsOpen ? "Show Less" : "Read More"}
            </Button>
          </div>
        </CardContent>
        <CardFooter className="bg-gray-50">
          <Button 
            className="w-full bg-veera-green hover:bg-veera-blue" 
            onClick={() => setIsModalOpen(true)}
          >
            Book Now
          </Button>
        </CardFooter>
      </Card>
      <BookingFormModal open={isModalOpen} onOpenChange={setIsModalOpen} packageName={title} />
    </>
  );
}
