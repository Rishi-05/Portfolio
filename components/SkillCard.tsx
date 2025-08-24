import React from 'react';
import { GlareCard } from './ui/GlareCard';
import { Icons } from './Icons'; 

interface SkillCardProps {
  title: string; 
  iconName: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ title, iconName }) => {
  const IconComponent = Icons[iconName.toLowerCase() as keyof typeof Icons];

  return (
  <GlareCard className="flex flex-col items-center justify-center p-4 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg">
{IconComponent && <IconComponent className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 text-blue-200" />}
<p className="text-gray-900 font-semibold text-lg md:text-xl lg:text-2xl mt-4">{title}</p>

    </GlareCard>
  );
}

export default SkillCard;
