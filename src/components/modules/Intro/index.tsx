'use client';

import { motion } from 'framer-motion';

const Intro = () => {
	return (
		<section className="bg-red-500 py-10 text-white">
			<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.h1
					className="text-4xl sm:text-5xl font-bold mb-6 flex items-center gap-2"
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					Hi, I'm Gaurav Khatri
					<motion.span
						className="inline-block origin-bottom"
						initial={{ rotate: 0 }}
						animate={{ rotate: [0, 20, -10, 20, -5, 0] }}
						transition={{ duration: 1.4, repeat: Infinity, repeatDelay: 6 }}
					>
						👋
					</motion.span>
				</motion.h1>

				<motion.p
					className="text-lg leading-relaxed dark:text-gray-300"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
				>
					I'm a results-driven project leader based in Darwin, NT. With over a decade of experience across customer
					operations, credit risk, compliance, and IT-enabled transformations, I specialise in executing enterprise-scale
					initiatives in regulated industries.
				</motion.p>

				<motion.p
					className="text-lg leading-relaxed mt-4 dark:text-gray-300"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.4 }}
				>
					I currently lead a customer service team at Betfair and am preparing for PMP certification in 2025. My goal?
					To connect business needs with digital solutions that drive results.
				</motion.p>
			</div>
		</section>
	);
};

export default Intro;
