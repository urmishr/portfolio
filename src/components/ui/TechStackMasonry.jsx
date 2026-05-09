import {
  SiDocker,
  SiExpo,
  SiMongodb,
  SiNodedotjs,
  SiTypescript,
} from 'react-icons/si';
import {
  TbBrandReact,
  TbBrandReactNative,
  TbBrandSupabase,
} from 'react-icons/tb';
import { SiAmazonwebservices } from 'react-icons/si';

const techStack = [
  {
    name: 'React',
    icon: TbBrandReact,
    note: 'Frontend interfaces and component systems',
    iconClass: 'text-cyan-500',
  },
  {
    name: 'TypeScript',
    icon: SiTypescript,
    note: 'Typed UI, shared contracts, and safer refactors',
    iconClass: 'text-blue-600',
  },
  {
    name: 'React Native',
    icon: TbBrandReactNative,
    note: 'Cross-platform mobile apps',
    iconClass: 'text-cyan-500',
  },
  {
    name: 'Node.js',
    icon: SiNodedotjs,
    note: 'APIs, services, and backend tooling',
    iconClass: 'text-emerald-500',
  },
  {
    name: 'AWS',
    icon: SiAmazonwebservices,
    note: 'Deployment, infrastructure, and cloud services',
    iconClass: 'text-orange-500',
  },
  {
    name: 'MongoDB',
    icon: SiMongodb,
    note: 'Document data and flexible schemas',
    iconClass: 'text-green-600',
  },
  {
    name: 'Expo',
    icon: SiExpo,
    note: 'Fast mobile workflows and device previews',
    iconClass: 'text-slate-900 dark:text-slate-100',
  },
  {
    name: 'Supabase',
    icon: TbBrandSupabase,
    note: 'Auth, database, storage, and realtime',
    iconClass: 'text-emerald-500',
  },
  {
    name: 'Docker',
    icon: SiDocker,
    note: 'Portable local environments and consistent builds',
    iconClass: 'text-sky-500',
  },
];

export default function TechStackMasonry() {
  return (
    <div className="w-full">
      <div className="flex gap-3 overflow-x-auto pb-2 sm:hidden [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {techStack.map((tech) => (
          <div
            key={tech.name}
            className="flex min-w-fit flex-none items-center gap-2 rounded-full border border-dark-200/10 bg-white px-4 py-2 shadow-sm transition-transform duration-300 hover:-translate-y-0.5 dark:border-light-400/10 dark:bg-dark-300"
          >
            <tech.icon className={`size-4 shrink-0 opacity-90 ${tech.iconClass}`} />
            <span className="whitespace-nowrap text-sm font-bold leading-tight">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
      <div className="hidden sm:block columns-1 gap-3 sm:columns-2 lg:columns-3">
        {techStack.map((tech) => (
          <div
            key={tech.name}
            className="mb-3 inline-block w-full break-inside-avoid rounded-2xl border border-dark-200/10 bg-white p-4 shadow-sm transition-transform duration-300 hover:-translate-y-0.5 dark:border-light-400/10 dark:bg-dark-300"
          >
            <p className="flex items-center gap-2 text-base font-bold leading-tight">
              <tech.icon className={`size-4 shrink-0 opacity-90 ${tech.iconClass}`} />
              <span>{tech.name}</span>
            </p>
            <p className="mt-2 text-sm font-medium leading-relaxed opacity-90">
              {tech.note}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
