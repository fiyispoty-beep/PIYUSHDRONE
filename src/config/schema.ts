import { z } from 'zod';

export const enquirySchema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  shootType: z.string().min(1, 'Please select a shoot type'),
  package: z.string().min(1, 'Please select a package'),
  date: z.string().optional(),
  location: z.string().optional(),
  message: z.string().min(10, 'Please share a brief message (min 10 characters)'),
  consent: z.boolean().refine((val) => val === true, {
    message: 'Please accept the privacy policy to submit',
  }),
  botField: z.string().max(0, 'Spam detected').optional(),
});

export type EnquiryFormData = z.infer<typeof enquirySchema>;
