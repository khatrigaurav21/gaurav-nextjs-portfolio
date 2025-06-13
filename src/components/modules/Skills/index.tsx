import Link from 'next/link';
import Image from 'next/image';

const skills = [
	'Agile & Waterfall Project Management',
	'Risk & Compliance Oversight',
	'Process Automation',
	'Cross-Functional Leadership',
	'Stakeholder & Vendor Management',
	'CRM Tools (Salesforce, Zoho)',
	'BI Tools: Power BI, Tableau',
	'Client Strategy & Account Retention',
	'Team Coaching & Mentoring',
];

const Skills = () => {
	return (
		<section className="py-10 lg:py-20 bg-red-500">
			<div className="container max-w-4xl mx-auto">
				<h2 className="text-3xl font-bold mb-6">Skills</h2>
				<ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
					{skills.map((skill, index) => (
						<li
							key={index}
							className="bg-gray-100 text-gray-800 p-4 rounded-lg shadow-sm text-center"
						>
							{skill}
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};

export default Skills;
