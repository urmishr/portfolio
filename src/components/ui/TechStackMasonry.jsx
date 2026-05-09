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
    accent: 'border-cyan-500/20 bg-cyan-500/5 text-cyan-700 dark:text-cyan-200',
  },
  {
    name: 'TypeScript',
    icon: SiTypescript,
    note: 'Typed UI, shared contracts, and safer refactors',
    accent:
      'border-sky-500/20 bg-sky-500/5 text-sky-700 dark:text-sky-200',
  },
  {
    name: 'React Native',
    icon: TbBrandReactNative,
    note: 'Cross-platform mobile apps',
    accent:
      'border-violet-500/20 bg-violet-500/5 text-violet-700 dark:text-violet-200',
  },
  {
    name: 'Node.js',
    icon: SiNodedotjs,
    note: 'APIs, services, and backend tooling',
    accent:
      'border-emerald-500/20 bg-emerald-500/5 text-emerald-700 dark:text-emerald-200',
  },
  {
    name: 'AWS',
    icon: SiAmazonwebservices,
    note: 'Deployment, infrastructure, and cloud services',
    accent:
      'border-amber-500/20 bg-amber-500/5 text-amber-700 dark:text-amber-200',
  },
  {
    name: 'MongoDB',
    icon: SiMongodb,
    note: 'Document data and flexible schemas',
    accent:
      'border-green-500/20 bg-green-500/5 text-green-700 dark:text-green-200',
  },
  {
    name: 'Expo',
    icon: SiExpo,
    note: 'Fast mobile workflows and device previews',
    accent:
      'border-fuchsia-500/20 bg-fuchsia-500/5 text-fuchsia-700 dark:text-fuchsia-200',
  },
  {
    name: 'Supabase',
    icon: TbBrandSupabase,
    note: 'Auth, database, storage, and realtime',
    accent:
      'border-teal-500/20 bg-teal-500/5 text-teal-700 dark:text-teal-200',
  },
  {
    name: 'Docker',
    icon: SiDocker,
    note: 'Portable local environments and consistent builds',
    accent:
      'border-slate-500/20 bg-slate-500/5 text-slate-700 dark:text-slate-200',
  },
];

export default function TechStackMasonry() {
  return (
      <div className="w-full">
      <div className="flex gap-3 overflow-x-auto pb-2 sm:hidden [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {techStack.map((tech) => (
          <div
            key={tech.name}
            className={`flex min-w-fit flex-none items-center gap-2 rounded-full border px-4 py-2 shadow-sm transition-transform duration-300 hover:-translate-y-0.5 ${tech.accent}`}
          >
            <tech.icon className="size-4 shrink-0 opacity-90" />
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
            className={`mb-3 inline-block w-full break-inside-avoid rounded-2xl border p-4 shadow-sm transition-transform duration-300 hover:-translate-y-0.5 ${tech.accent}`}
          >
            <p className="flex items-center gap-2 text-base font-bold leading-tight">
              <tech.icon className="size-4 shrink-0 opacity-90" />
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
