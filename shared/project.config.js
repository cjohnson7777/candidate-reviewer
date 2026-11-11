// =============================================================
// YOUR TEAM AND PROJECT: fill this in first!
// The web page AND the AI agent both read this file, so the app
// introduces your team and the agent knows what problem it serves.
// Anything still starting with "TODO" shows up highlighted on the page.
// =============================================================

export const project = {
  teamName: 'Me',
  appName: 'Candidate Reviewer',
  tagline: 'Find local politicians running and their policies.',

  // One or two sentences. Who is hurting, and how?
  problemStatement:
    'Voters in Nashville struggle to find the policies of local politicians because the information is scattered and hard to find.',

  // One specific person. Give them a name, an age, and a situation.
  targetUser: 'Jan, 18, newly able to vote but has no idea where who to vote for.',

  community: 'Nashville, TN',
  theme: 'Education Access',

  // How you will know it works. Make it measurable.
  successMeasure: 'A voter can look at the app and find who is running and their policies in an easy to read format.',

  teamMembers: [
    { name: 'Christina', role: 'Product owner (writes tickets)' },
    { name: 'Christina', role: 'Front end (React)' },
    { name: 'Christina', role: 'Back end (API + database)' },
    { name: 'Christina', role: 'AI agent and skills' },
  ],

  // The personality of your AI agent. Used in its system prompt.
  agent: {
    name: 'Compass',
    voice: 'warm, factual, and plain-spoken, like an educator',
    readingLevel: '6th grade',
  },
};

// True if a value still needs to be filled in.
export const isTodo = (value) => typeof value === 'string' && value.trim().startsWith('TODO');
