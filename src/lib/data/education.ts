import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'Primary school (Grade 1 - Grade 6)',
		description: '',
		location: 'Rwanda',
		logo: Assets.Unknown,
		name: '',
		organization: 'NYAKAYAGA SECONDARY SCHOOL',
		period: { from: new Date(2012, 0, 1), to: new Date(2018, 5, 1) },
		shortDescription: '',
		slug: '',
		subjects: ['General Education']
	},
	{
		degree: 'Ordinary Level (Grade 7- Grade 9)',
		description: '',
		location: 'Rwanda',
		logo: Assets.Unknown,
		name: '',
		organization: 'KAGARAMA SECONDARY SCHOOL',
		period: { from: new Date(2019, 0, 1), to: new Date(2022, 5, 1) },
		shortDescription: '',
		slug: '',
		subjects: ['Math', 'Physics', 'ICT', 'Entreprenuership']
	},
	{
		degree: 'Advanced Level (Grade 10- Grade 12)',
		description: '',
		location: 'Rwanda',
		logo: Assets.Unknown,
		name: '',
		organization: 'Rwanda Coding Academy',
		period: { from: new Date(2022, 0, 1)},
		shortDescription: '',
		slug: '',
		subjects: ['Javascript', 'Java', 'Database management', 'Typescript', 'React JS' ,'PHP', 'HTML', '+' ]
	}
];

export const title = 'Education';
