import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'ISHIMWE';

export const lastName = 'Justin';

export const description =
	'I am an experienced Rwandan developer proficient in a diverse range of technologies including React.js, JavaScript, Node.js, C, C++, Java, Next.js, TypeScript, Angular.js, and adept in utilizing databases such as PostgreSQL, MongoDB, and MySQL. With over 2 years of hands-on experience, I bring a strong foundation in front-end and back-end development, coupled with expertise in UI/UX design using Figma. Passionate about creating innovative solutions and contributing to impactful projects, I thrive in collaborative environments where I can leverage my skills to drive results and make a meaningful impact.';

export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/' },
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/'
	},
	{
		platform: Platform.Twitter,
		link: 'https://twitter.com/'
	},
	{
		platform: Platform.Email,
		link: 'ishimwejustin67@gmail.com'
	},
	{
		platform: Platform.Facebook,
		link: 'https://www.facebook.com'
	}
];

export const skills = getSkills('js', 'Next', 'reactjs','ts', 'MongoDB', 'Tailwind CSS', 'PostgreSQL', 'java', 'Node js', 'Figma');
