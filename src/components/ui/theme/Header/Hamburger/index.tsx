'use client';

import { cn } from 'lib/utils';

type HamburgerProps = {
	sidebar?: boolean;
	toggle: (value: boolean) => void;
};

const Hamburger = ({ sidebar, toggle }: HamburgerProps) => (
	<div
		className={cn('z-20 top-[1.6rem] right-[1.8rem] cursor-pointer burger-transition absolute block lg:hidden', {
			'right-[66%] md:right-[35%] lg:fixed lg:right-[18%] top-[1.4rem]': sidebar,
		})}
		onClick={() => toggle(!sidebar)}
	>
		<div
			className={cn('w-6 h-0.5 mb-1.5 burger-bar-transition bg-brand-primary', {
				'translate-y-2 -rotate-[135deg] dark:bg-red-500': sidebar,
			})}
		/>
		<div
			className={cn('w-6 h-0.5 mb-1.5 bg-brand-primary burger-bar-transition', {
				'scale-0': sidebar,
			})}
		/>
		<div
			className={cn('w-6 h-0.5 mb-1.5 bg-brand-primary burger-bar-transition', {
				'bg-brand-primary dark:bg-red-500 -translate-y-[7px] -rotate-45': sidebar,
			})}
		/>
	</div>
);

export default Hamburger;
