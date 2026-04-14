import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { cn } from '#/lib/utils'
import {
  fetchProjects,
  fetchExperiences,
  fetchSkillCategories,
  fetchSiteConfig,
  supabase
} from '#/lib/supabase'

export const Route = createFileRoute('/admin/')({
  loader: async () => {
    // In a real app, this would check auth session
    const [projects, experiences, skillCategories, siteConfig, { data: messages }] = await Promise.all([
      fetchProjects(true),
      fetchExperiences(),
      fetchSkillCategories(),
      fetchSiteConfig(),
      supabase.from('contact_messages').select('*').order('created_at', { ascending: false })
    ])
    return { projects, experiences, skillCategories, siteConfig, messages: messages || [] }
  },
  component: AdminDashboard,
})

function AdminDashboard() {
  const { projects, experiences, messages } = Route.useLoaderData()
  const [activeTab, setActiveTab] = useState<'projects' | 'experiences' | 'messages'>('messages')

  return (
    <div className="min-h-screen bg-portfolio-bg text-portfolio-cream p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12 border-b border-portfolio-border pb-6">
          <h1 className="text-3xl font-bold uppercase tracking-wider" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            Portfolio <span className="text-portfolio-gold">Admin</span>
          </h1>
          <a href="/" className="text-xs uppercase tracking-[0.2em] text-portfolio-cream-dim hover:text-portfolio-gold transition-colors">
            ← Back to Site
          </a>
        </div>

        <div className="flex gap-12">
          {/* Sidebar */}
          <div className="w-64 flex flex-col gap-2">
            {[
              { id: 'messages', label: `Messages (${messages.length})` },
              { id: 'projects', label: `Projects (${projects.length})` },
              { id: 'experiences', label: `Experience (${experiences.length})` },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={cn(
                'w-full text-left px-4 py-3 text-sm uppercase tracking-widest font-semibold rounded',
                activeTab === tab.id
                  ? 'bg-[rgba(200,151,58,0.1)] text-portfolio-gold border-l-2 border-portfolio-gold'
                  : 'text-portfolio-cream-dim hover:bg-portfolio-border hover:text-portfolio-cream',
              )}
              >
                {tab.label}
              </button>
            ))}
            
            <div className="mt-12 pt-8 border-t border-portfolio-border">
              <p className="text-xs text-portfolio-text-muted leading-relaxed">
                To add or modify content, please use the 
                <a href="https://supabase.com/dashboard" target="_blank" rel="noreferrer" className="text-portfolio-gold ml-1 hover:underline">
                  Supabase Dashboard
                </a>.
              </p>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 bg-portfolio-bg border border-portfolio-border rounded-lg p-8">
            {activeTab === 'messages' && (
              <div>
                <h2 className="text-xl font-bold mb-6 text-portfolio-gold">Recent Messages</h2>
                <div className="flex flex-col gap-4">
                  {messages.map(msg => (
                    <div key={msg.id} className="p-6 border border-portfolio-border rounded bg-[rgba(6,6,12,0.5)]">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-bold text-portfolio-cream">{msg.name}</h3>
                          <a href={`mailto:${msg.email}`} className="text-sm text-portfolio-gold hover:underline">{msg.email}</a>
                        </div>
                        <span className="text-xs text-portfolio-text-muted">
                          {new Date(msg.created_at).toLocaleDateString()}
                        </span>
                      </div>
                      <p className="text-sm text-portfolio-cream-dim whitespace-pre-wrap leading-relaxed">{msg.message}</p>
                    </div>
                  ))}
                  {messages.length === 0 && (
                    <p className="text-portfolio-text-muted text-sm">No messages yet.</p>
                  )}
                </div>
              </div>
            )}

            {activeTab === 'projects' && (
              <div>
                <h2 className="text-xl font-bold mb-6 text-portfolio-gold">Projects</h2>
                <div className="grid gap-4">
                  {projects.map(p => (
                    <div key={p.id} className="p-4 border border-portfolio-border rounded flex items-center justify-between">
                      <div>
                        <h3 className="font-bold">{p.name_en}</h3>
                        <p className="text-xs text-portfolio-cream-dim line-clamp-1">{p.description_en}</p>
                      </div>
                      <div className="flex gap-2">
                        <span
                          className={cn(
                            'text-xs px-2 py-1 rounded',
                            p.display
                              ? 'bg-portfolio-border text-portfolio-text-muted'
                              : 'bg-red-500/10 text-red-500',
                          )}
                        >
                          {p.display ? 'Visible' : 'Hidden'}
                        </span>
                        <span className="text-xs px-2 py-1 bg-portfolio-border rounded text-portfolio-text-muted">
                          {p.is_featured ? 'Featured' : 'Standard'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'experiences' && (
              <div>
                <h2 className="text-xl font-bold mb-6 text-portfolio-gold">Work History</h2>
                <div className="grid gap-4">
                  {experiences.map(e => (
                    <div key={e.id} className="p-4 border border-portfolio-border rounded flex items-center justify-between">
                      <div>
                        <h3 className="font-bold">{e.title_en}</h3>
                        <p className="text-xs text-portfolio-cream-dim">{e.company}</p>
                      </div>
                      <span className="text-xs text-portfolio-gold">{e.year_label}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
