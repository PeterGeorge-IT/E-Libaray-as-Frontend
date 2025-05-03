
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Book } from "@/types/book";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { Check, CreditCard, ShoppingCart } from "lucide-react";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  book: Book;
  mode: 'borrow' | 'buy';
}

const CheckoutModal = ({ isOpen, onClose, book, mode }: CheckoutModalProps) => {
  const [currentStep, setCurrentStep] = useState<'details' | 'payment' | 'confirmation'>('details');
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();

  const handleSubmitDetails = () => {
    setCurrentStep('payment');
  };

  const handleSubmitPayment = async () => {
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setCurrentStep('confirmation');
    }, 1500);
  };

  const handleFinish = () => {
    toast({
      title: "Success!",
      description: mode === 'borrow' 
        ? `You've borrowed "${book.title}". It will be available in your dashboard.`
        : `You've purchased "${book.title}". It will be available in your dashboard.`,
      duration: 5000,
    });
    onClose();
  };

  const stepVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, x: -20, transition: { duration: 0.2 } },
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>
            {mode === 'borrow' ? 'Borrow Book' : 'Purchase Book'}
          </DialogTitle>
          <DialogDescription>
            {mode === 'borrow' 
              ? 'Complete the checkout process to borrow this book.' 
              : 'Complete the checkout process to purchase this book.'}
          </DialogDescription>
        </DialogHeader>

        <div className="py-4">
          <AnimatePresence mode="wait">
            {currentStep === 'details' && (
              <motion.div
                key="details"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={stepVariants}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <img 
                    src={book.coverImage} 
                    alt={book.title} 
                    className="w-20 h-auto rounded-md"
                  />
                  <div>
                    <h3 className="font-semibold">{book.title}</h3>
                    <p className="text-sm text-gray-500">by {book.author}</p>
                    {mode === 'buy' && <p className="font-bold mt-1">$9.99</p>}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john.doe@example.com" />
                  </div>
                  {mode === 'borrow' && (
                    <div className="space-y-2">
                      <Label htmlFor="duration">Borrow Duration</Label>
                      <RadioGroup defaultValue="14days">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="14days" id="14days" />
                          <Label htmlFor="14days">14 Days</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="30days" id="30days" />
                          <Label htmlFor="30days">30 Days</Label>
                        </div>
                      </RadioGroup>
                    </div>
                  )}
                </div>

                <div className="mt-6 flex justify-end">
                  <Button onClick={handleSubmitDetails}>
                    Continue to {mode === 'borrow' ? 'Confirmation' : 'Payment'}
                  </Button>
                </div>
              </motion.div>
            )}

            {currentStep === 'payment' && (
              <motion.div
                key="payment"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={stepVariants}
              >
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="cardName">Name on Card</Label>
                    <Input id="cardName" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="expiry">Expiry Date</Label>
                      <Input id="expiry" placeholder="MM/YY" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cvc">CVC</Label>
                      <Input id="cvc" placeholder="123" />
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex justify-between">
                  <Button variant="outline" onClick={() => setCurrentStep('details')}>
                    Back
                  </Button>
                  <Button onClick={handleSubmitPayment} disabled={isProcessing}>
                    {isProcessing ? 'Processing...' : `Pay $9.99`}
                  </Button>
                </div>
              </motion.div>
            )}

            {currentStep === 'confirmation' && (
              <motion.div
                key="confirmation"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={stepVariants}
                className="flex flex-col items-center text-center py-6"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Check className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {mode === 'borrow' 
                    ? 'Book Borrowed Successfully!' 
                    : 'Purchase Complete!'}
                </h3>
                <p className="text-gray-500 mb-6">
                  {mode === 'borrow'
                    ? `You can now access "${book.title}" in your dashboard.`
                    : `Thank you for purchasing "${book.title}". It's now yours forever!`}
                </p>
                <Button onClick={handleFinish}>Go to Dashboard</Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CheckoutModal;
