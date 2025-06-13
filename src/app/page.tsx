'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const HomePage = () => (
	<div className="space-y-16">
		{/* Hero Section - Similar to target */}
		<section className="space-y-8">
			{/* Profile Image */}
			<motion.div
				className="flex justify-center"
				initial={{ opacity: 0, scale: 0.8 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.6 }}
			>
				<Image
					src="/assets/profile-photo.jpg" // You'll need to add your photo
					alt="Gaurav Khatri"
					width={200}
					height={200}
					className="rounded-full shadow-lg"
					priority
				/>
			</motion.div>

			{/* Name and Intro */}
			<div className="space-y-6">
				<motion.h1
					className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white flex items-center justify-center gap-2"
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					Gaurav Khatri
					<motion.span
						className="inline-block origin-bottom"
						initial={{ rotate: 0 }}
						animate={{ rotate: [0, 20, -10, 20, -5, 0] }}
						transition={{ duration: 1.4, repeat: Infinity, repeatDelay: 6 }}
					>
						👋
					</motion.span>
				</motion.h1>

				<div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						I'm a results-driven <strong>project leader</strong> based in Darwin, NT. With over a decade of experience across customer
						operations, credit risk, compliance, and IT-enabled transformations, I specialise in executing enterprise-scale
						initiatives in regulated industries.
					</motion.p>

					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.4 }}
					>
						I currently lead a customer service team at <strong>Betfair</strong> and am preparing for PMP certification in 2025.
						My goal? To connect business needs with digital solutions that drive results.
					</motion.p>

					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.6 }}
					>
						You can connect with me on <Link href="https://linkedin.com/in/yourprofile"
							className="text-blue-600 hover:underline dark:text-blue-400">LinkedIn</Link>.
					</motion.p>
				</div>
			</div>
		</section>

		{/* Projects Section - Using your real project data */}
		<motion.section
			className="space-y-8"
			initial={{ opacity: 0, y: 40 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6, delay: 0.8 }}
		>
			<h2 className="text-2xl font-bold text-gray-900 dark:text-white">Featured Projects</h2>

			<div className="space-y-10">
				{/* Betfair Project */}
				<motion.article
					className="space-y-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg border-l-4 border-blue-500"
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5, delay: 1.0 }}
				>
					<div className="space-y-2">
						<h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400">
							Operational Excellence
						</h3>
						<p className="text-gray-600 dark:text-gray-400 text-sm">
							Cross-functional system upgrade improving team efficiency • Betfair • 2024
						</p>
					</div>

					<h4 className="text-xl font-medium text-gray-900 dark:text-white">
						Cross-Functional Telbet System Upgrade
					</h4>

					<p className="text-gray-600 dark:text-gray-400 leading-relaxed">
						Led the rollout of a new telephone platform and Slack bot to improve team coordination and troubleshooting efficiency.
						<strong className="text-gray-700 dark:text-gray-300"> Reduced resolution time by 20% and improved operational UX.</strong>
					</p>
				</motion.article>

				{/* Sportsbet Project */}
				<motion.article
					className="space-y-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg border-l-4 border-green-500"
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5, delay: 1.2 }}
				>
					<div className="space-y-2">
						<h3 className="text-lg font-semibold text-green-600 dark:text-green-400">
							Data-Driven Improvements
						</h3>
						<p className="text-gray-600 dark:text-gray-400 text-sm">
							Analytics implementation for service optimization • Sportsbet • 2023-2024
						</p>
					</div>

					<h4 className="text-xl font-medium text-gray-900 dark:text-white">
						Analytics-Driven Service Uplift
					</h4>

					<p className="text-gray-600 dark:text-gray-400 leading-relaxed">
						Implemented feedback loop mechanisms that <strong className="text-gray-700 dark:text-gray-300">boosted first-call resolution by 15%
							and cut down handling time by 20%, leading to a 10% gain in CSAT scores.</strong>
					</p>
				</motion.article>

				{/* Illion Project */}
				<motion.article
					className="space-y-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg border-l-4 border-purple-500"
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5, delay: 1.4 }}
				>
					<div className="space-y-2">
						<h3 className="text-lg font-semibold text-purple-600 dark:text-purple-400">
							Client Retention Strategy
						</h3>
						<p className="text-gray-600 dark:text-gray-400 text-sm">
							Enterprise transformation for key financial accounts • Illion • 2022-2023
						</p>
					</div>

					<h4 className="text-xl font-medium text-gray-900 dark:text-white">
						Enterprise Client Transformation
					</h4>

					<p className="text-gray-600 dark:text-gray-400 leading-relaxed">
						Spearheaded retention-focused transformation for NAB and other key accounts. Introduced strategic dashboards and
						<strong className="text-gray-700 dark:text-gray-300"> retained 30% more clients through predictive account health checks.</strong>
					</p>
				</motion.article>

				{/* RBS Project */}
				<motion.article
					className="space-y-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg border-l-4 border-red-500"
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5, delay: 1.6 }}
				>
					<div className="space-y-2">
						<h3 className="text-lg font-semibold text-red-600 dark:text-red-400">
							Compliance & Risk Management
						</h3>
						<p className="text-gray-600 dark:text-gray-400 text-sm">
							Automation tools for regulatory compliance • RBS UK • 2021-2022
						</p>
					</div>

					<h4 className="text-xl font-medium text-gray-900 dark:text-white">
						KYC & AML Automation Tools
					</h4>

					<p className="text-gray-600 dark:text-gray-400 leading-relaxed">
						Directed the creation of onboarding and credit review automation tools for RBS UK.
						<strong className="text-gray-700 dark:text-gray-300">Achieved a 40% reduction in fraud-related losses and trained 200+ staff
							to operate new systems.</strong>
					</p>
				</motion.article>
			</div>
		</motion.section>
	</div>
);

export default HomePage;