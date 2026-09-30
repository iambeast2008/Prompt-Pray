import { getSubject } from '../data/subjects';
import { missedClasses } from '../data/missed';
import { getResourcesByTopic } from '../data/resources';

function ResourceTypeIcon({ type }: { type: string }) {
  switch (type) {
    case 'lecture':
      return (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
        </svg>
      );
    case 'notes':
      return (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
        </svg>
      );
    case 'practice':
      return (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
        </svg>
      );
    default:
      return null;
  }
}

export default function CatchUp() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold text-primary-text">Catch up on what you missed</h1>
        <p className="text-sm text-secondary-text mt-1">
          Review topics from classes you were absent for
        </p>
      </div>

      {missedClasses.map(mc => {
        const subject = getSubject(mc.subjectId);
        return (
          <section key={mc.id} className="bg-surface border border-border rounded-lg">
            <div className="px-5 py-4 border-b border-border">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-base font-semibold text-primary-text">{subject?.name}</p>
                  <p className="text-xs text-muted-text mt-0.5">
                    Missed on {mc.date} · {mc.time}
                  </p>
                </div>
                <span className="inline-flex px-2 py-0.5 bg-red-50 text-danger-red rounded text-xs font-medium">
                  Missed
                </span>
              </div>
            </div>

            <div className="divide-y divide-border">
              {mc.topics.map(topic => {
                const topicResources = getResourcesByTopic(topic.topicId);
                return (
                  <div key={topic.id} className="px-5 py-4">
                    <p className="text-sm font-medium text-primary-text mb-3">{topic.name}</p>
                    {topicResources.length > 0 ? (
                      <div className="space-y-2">
                        {topicResources.map(res => (
                          <a
                            key={res.id}
                            href={res.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 p-3 rounded-md border border-border hover:bg-muted-surface/50 transition-colors group"
                          >
                            <div className="w-8 h-8 rounded-md bg-muted-surface flex items-center justify-center text-secondary-text group-hover:text-primary-blue">
                              <ResourceTypeIcon type={res.type} />
                            </div>
                            <div className="min-w-0 flex-1">
                              <p className="text-sm font-medium text-primary-text group-hover:text-primary-blue">
                                {res.title}
                              </p>
                              <p className="text-xs text-muted-text capitalize">
                                {res.type} · {res.duration}
                              </p>
                            </div>
                            <svg className="w-4 h-4 text-muted-text group-hover:text-primary-blue shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                            </svg>
                          </a>
                        ))}
                      </div>
                    ) : (
                      <p className="text-xs text-muted-text">No resources available yet.</p>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}
