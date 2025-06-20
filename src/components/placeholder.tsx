import { LucideMessageSquareWarning } from 'lucide-react';
import { cloneElement } from 'react';

type PlaceholderProps = {
	label: string;
	icon?: React.ReactElement<React.ComponentPropsWithoutRef<"svg">>;
	button?: React.ReactElement;
};

const Placeholder = ({
	label,
	icon = <LucideMessageSquareWarning />,
	button = <div />,
}: PlaceholderProps) => {
	return (
		<div className="flex-1  self-center flex flex-col items-center justify-center gap-y-2">
			{cloneElement(icon, { className: 'w-4 h-4' })}
			<h2 className="text-lg text-center">{label}</h2>
			{cloneElement(button)}
		</div>
	);
};

export { Placeholder };
