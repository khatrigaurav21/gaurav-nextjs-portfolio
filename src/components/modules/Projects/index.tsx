import { Suspense } from 'react';
import getRepos from 'lib/getRepos';
import Repository from 'components/ui/Repository';
import { Skeleton } from 'components/ui/skeleton';

const projects = [
	{
		title: 'Betfair | Cross-Functional Telbet System Upgrade',
		description:
			'Led the rollout of a new telephone platform and Slack bot to improve team coordination and troubleshooting efficiency. Reduced resolution time by 20% and improved operational UX.',
	},
	{
		title: 'Sportsbet | Analytics-Driven Service Uplift',
		description:
			'Implemented feedback loop mechanisms that boosted first-call resolution by 15% and cut down handling time by 20%, leading to a 10% gain in CSAT scores.',
	},
	{
		title: 'Illion | Enterprise Client Transformation',
		description:
			'Spearheaded retention-focused transformation for NAB and other key accounts. Introduced strategic dashboards and retained 30% more clients through predictive account health checks.',
	},
	{
		title: 'RBS | KYC & AML Automation Tools',
		description:
			'Directed the creation of onboarding and credit review automation tools for RBS UK. Achieved a 40% reduction in fraud-related losses and trained 200+ staff to operate new systems.',
	},
];

const Projects = () => {
	return (
		<section className="py-10 lg:py-20 bg-gray-100">
			<div className="container max-w-4xl mx-auto">
				<h2 className="text-3xl font-bold mb-6">Projects</h2>
				<ul className="space-y-6">
					{projects.map((project, index) => (
						<li key={index} className="bg-red-500 p-6 rounded shadow">
							<h3 className="text-xl font-semibold mb-2">{project.title}</h3>
							<p className="text-gray-700">{project.description}</p>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};

export default Projects;
