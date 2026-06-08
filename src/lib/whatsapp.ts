import { siteConfig } from "./config";

export function getWhatsAppUrl(message?: string): string {
  const defaultMessage = `Hi ${siteConfig.name}, I would like to inquire about your properties.`;
  const encodedMessage = encodeURIComponent(message || defaultMessage);
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodedMessage}`;
}

export function getPropertyWhatsAppUrl(propertyName: string): string {
  const message = `Hi ${siteConfig.name}, I would like more information about ${propertyName}.`;
  return getWhatsAppUrl(message);
}

export function getPhoneUrl(): string {
  return `tel:${siteConfig.phone}`;
}

export function getEmailUrl(subject?: string): string {
  const defaultSubject = "Inquiry - Maple & Key";
  return `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject || defaultSubject)}`;
}
