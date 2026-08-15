export interface FunnelQuestion {
  id: number;
  text: string;
  options: string[];
}

export const GENDER_OPTIONS = [
  'Male',
  'Female',
  'Non-binary',
  'Prefer not to say',
];

export const AGE_OPTIONS = ['18–24', '25–34', '35–44', '45–54', '55–64', '65+'];

// Questions are numbered 2–9 in the funnel (step 1 is the name/gender/age
// intro). Index into this array with `questionNumber - 2`.
export const QUESTIONS: FunnelQuestion[] = [
  {
    id: 2,
    text: 'How would you describe your home right now?',
    options: [
      'Cluttered but functional',
      'Overwhelming',
      'Embarrassing to have guests over',
      'A constant battle',
    ],
  },
  {
    id: 3,
    text: 'Who else lives in this chaos with you?',
    options: ['Just me', 'Partner or roommate', 'Kids', 'A full house'],
  },
  {
    id: 4,
    text: 'Which areas stress you out most?',
    options: ['Kitchen', 'Bedroom', 'Living room', 'The whole house'],
  },
  {
    id: 5,
    text: "What's really behind the mess?",
    options: [
      'Not enough time',
      'Too many decisions, no idea where to start',
      "I'm the only one who tidies",
      'I get overwhelmed and give up halfway',
    ],
  },
  {
    id: 6,
    text: 'How have you tried to fix it before?',
    options: [
      "Occasional deep clean that doesn't last",
      'Ignore it until guests are coming',
      'Small tidying that never sticks',
      "I've stopped trying",
    ],
  },
  {
    id: 7,
    text: 'How does the mess make you feel?',
    options: ['Stressed', 'Ashamed', 'Anxious', 'Numb to it at this point'],
  },
  {
    id: 8,
    text: 'What would actually change for you?',
    options: [
      'Finally inviting people over without panicking',
      'Being able to find things when I need them',
      'Feeling calm at home again',
      'My family actually helping without a fight',
    ],
  },
  {
    id: 9,
    text: 'How much time can you realistically give this?',
    options: ['5 minutes', '15 minutes', '30+ minutes'],
  },
];
