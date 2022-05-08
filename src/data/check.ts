export interface ICheckValues {
  label: string;
  checked: boolean;
  required: boolean;
}

export const checkValues: ICheckValues[] = [
  {
    label: 'Do you pick your nose?',
    checked: false,
    required: true,
  },
  {
    label: 'Does your breath smell nice?',
    checked: false,
    required: false,
  },
  {
    label:
      'Do you approve pull requests without checking if the code actually works?',
    checked: false,
    required: false,
  },
  {
    label: 'Did you enjoy this filling in this form?',
    checked: false,
    required: true,
  },
  {
    label: 'Do you approve of this message?',
    checked: false,
    required: false,
  },
];

export const LinksValues = ['Harry', 'Wizard', "You're", 'A'];
