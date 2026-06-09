"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { properties } from "@/data/properties";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  propertyInterested: z.string().optional(),
  checkInDate: z.string().optional(),
  checkOutDate: z.string().optional(),
  numberOfGuests: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

interface ContactFormProps {
  disabled?: boolean;
}

export function ContactForm({ disabled = false }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [inquiryId, setInquiryId] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    if (disabled) return;
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          numberOfGuests: data.numberOfGuests
            ? parseInt(data.numberOfGuests)
            : undefined,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSuccess(true);
        setInquiryId(result.inquiryId);
        reset();
      }
    } catch {
      // Handle error silently, user can retry or call directly
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-ivory border border-beige rounded-sm p-8 text-center shadow-luxury">
        <CheckCircle className="h-12 w-12 text-forest mx-auto mb-4" />
        <h3 className="font-heading text-2xl text-forest mb-2">Thank You!</h3>
        <p className="text-charcoal/70 mb-2">
          We have received your inquiry and will respond within 24 hours.
        </p>
        {inquiryId && (
          <p className="text-sm text-saffron">Reference: {inquiryId}</p>
        )}
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => setIsSuccess(false)}
        >
          Send Another Inquiry
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-ivory border border-beige rounded-sm p-8 shadow-luxury space-y-5"
      noValidate
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <Label htmlFor="name">Name *</Label>
          <Input id="name" {...register("name")} className="mt-1.5" disabled={disabled} />
          {errors.name && (
            <p className="text-red-600 text-xs mt-1">{errors.name.message}</p>
          )}
        </div>
        <div>
          <Label htmlFor="email">Email *</Label>
          <Input id="email" type="email" {...register("email")} className="mt-1.5" disabled={disabled} />
          {errors.email && (
            <p className="text-red-600 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <Label htmlFor="phone">Phone *</Label>
          <Input id="phone" type="tel" {...register("phone")} className="mt-1.5" disabled={disabled} />
          {errors.phone && (
            <p className="text-red-600 text-xs mt-1">{errors.phone.message}</p>
          )}
        </div>
        <div>
          <Label htmlFor="property">Property Interested In</Label>
          <Select onValueChange={(v) => setValue("propertyInterested", v)} disabled={disabled}>
            <SelectTrigger className="mt-1.5" disabled={disabled}>
              <SelectValue placeholder="Select a property" />
            </SelectTrigger>
            <SelectContent>
              {properties.map((p) => (
                <SelectItem key={p.slug} value={p.name}>
                  {p.name}, {p.city}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div>
          <Label htmlFor="checkIn">Check-in Date</Label>
          <Input
            id="checkIn"
            type="date"
            {...register("checkInDate")}
            className="mt-1.5"
            disabled={disabled}
          />
        </div>
        <div>
          <Label htmlFor="checkOut">Check-out Date</Label>
          <Input
            id="checkOut"
            type="date"
            {...register("checkOutDate")}
            className="mt-1.5"
            disabled={disabled}
          />
        </div>
        <div>
          <Label htmlFor="guests">Number of Guests</Label>
          <Input
            id="guests"
            type="number"
            min="1"
            {...register("numberOfGuests")}
            className="mt-1.5"
            disabled={disabled}
          />
        </div>
      </div>

      <div>
        <Label htmlFor="message">Message *</Label>
        <Textarea
          id="message"
          rows={5}
          {...register("message")}
          className="mt-1.5"
          placeholder="Tell us about your travel plans..."
          disabled={disabled}
        />
        {errors.message && (
          <p className="text-red-600 text-xs mt-1">{errors.message.message}</p>
        )}
      </div>

      <Button
        type="submit"
        disabled={disabled || isSubmitting}
        className="w-full md:w-auto"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : disabled ? (
          "Coming Soon"
        ) : (
          "Send Inquiry"
        )}
      </Button>
    </form>
  );
}
