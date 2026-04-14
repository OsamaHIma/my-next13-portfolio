import * as m from '#/paraglide/messages'
import type { Project } from '#/lib/supabase'
import ProjectCard from './ProjectCard'

type Props = {
  projects: Project[]
}

export default function ProjectsSection({ projects }: Props) {
  return (
    <section
      id="work"
      className="px-4 sm:px-8 md:px-16 py-16 sm:py-24 md:py-36 max-w-7xl mx-auto w-full"
    >
      <div className="sr flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-16 md:mb-20 gb-b pb-5 sm:pb-8 gap-3 vis">
        <div>
          <div className="text-[10px] sm:text-xs tracking-widest uppercase mb-2 sm:mb-4 text-[rgba(237,234,222,0.3)]">
            {m.work_label()}
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-8xl text-portfolio-cream leading-none">
            {m.work_heading_1()}
            <br />
            <span className="ltr:font-serif rtl:font-arabic-accent italic text-portfolio-gold">
              {m.work_heading_2()}.
            </span>
          </h2>
        </div>
        <div className="text-xs tracking-widest uppercase hidden sm:block text-[rgba(237,234,222,0.2)]">
          {m.work_years()}
        </div>
      </div>

      {/* 1 col mobile → 2 col sm+ */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[rgba(237,234,222,0.07)]">
        {projects.map((project, i) => (
          <div key={project.id} className="bg-portfolio-bg">
            <ProjectCard project={project} index={i} />
          </div>
        ))}
      </div>
    </section>
  )
}
