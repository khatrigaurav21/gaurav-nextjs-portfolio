'use client';

import { useForm as useFormspree } from '@formspree/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Recaptcha from 'react-google-recaptcha';
import * as z from 'zod';
import { cn } from 'lib/utils';

const formSchema = z.object({
	name: z.string().min(1, 'Full name is required'),
	email: z.string().email('Invalid email').min(1, 'Email is required'),
	message: z.string().min(1, 'Message is required'),
	recaptcha:
		process.env.NODE_ENV !== 'development'
			? z.string().min(1, 'Please verify you are human')
			: z.string().optional(),
});

type ContactFormData = z.infer<typeof formSchema>;

const Contact = () => {
	const [state, formspreeSubmit] = useFormspree(process.env.NEXT_PUBLIC_FORM as string);

	const {
		register,
		handleSubmit,
		setValue,
		formState: { errors, isSubmitting },
		reset,
	} = useForm<ContactFormData>({
		resolver: zodResolver(formSchema),
	});

	const onSubmit = async (data: ContactFormData) => {
		try {
			await formspreeSubmit(data);
			if (!state.errors) {
				setTimeout(() => reset(), 4000);
			}
		} catch (err) {
			alert('Something went wrong, please try again!');
		}
	};

	return (
		<section className="py-10 lg:py-20 bg-gray-100">
			<div className="container max-w-2xl mx-auto">
				<h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
				<p className="mb-6 text-gray-700">
					I’m currently open to freelance, contract, or full-time project leadership roles — especially those involving
					digital transformation, compliance, or customer operations. Feel free to send a message through the form, or
					reach out directly:
				</p>
				<div className="mb-6 text-gray-800">
					<p>Email: <a href="mailto:khatri.gaurav@outlook.com" className="underline">khatri.gaurav@outlook.com</a></p>
					<p>Phone: +61 420 339 500</p>
					<p>Location: Darwin, Northern Territory</p>
				</div>

				<form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-red-500 p-6 rounded shadow">
					<div>
						<input
							type="text"
							placeholder="Full Name*"
							className={cn('input', { 'input-error': errors.name })}
							{...register('name')}
						/>
						{errors.name && <span className="text-red-600">{errors.name.message}</span>}
					</div>

					<div>
						<input
							type="email"
							placeholder="Email*"
							className={cn('input', { 'input-error': errors.email })}
							{...register('email')}
						/>
						{errors.email && <span className="text-red-600">{errors.email.message}</span>}
					</div>

					<div>
						<textarea
							rows={5}
							placeholder="Message*"
							className={cn('input', { 'input-error': errors.message })}
							{...register('message')}
						/>
						{errors.message && <span className="text-red-600">{errors.message.message}</span>}
					</div>

					{process.env.NODE_ENV !== 'development' && (
						<div>
							<Recaptcha
								sitekey={process.env.NEXT_PUBLIC_PORTFOLIO_RECAPTCHA_KEY || ''}
								onChange={(value) => setValue('recaptcha', value || '')}
							/>
							{errors.recaptcha && <span className="text-red-600">{errors.recaptcha.message}</span>}
						</div>
					)}

					{state.succeeded && (
						<div className="text-green-600 font-medium">
							Your message has been sent successfully. I’ll get back to you soon!
						</div>
					)}

					<button type="submit" disabled={isSubmitting} className="button button-secondary">
						Send Message
					</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;
