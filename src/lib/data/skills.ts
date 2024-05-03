import Assets from './assets';
import type { Skill, SkillCategory } from '../types';
import { omit, type StringWithAutoComplete } from '@riadh-adrani/utils';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'Programming Languages', slug: 'pro-lang' }),
	defineSkillCategory({ name: 'Frameworks', slug: 'framework' }),
	defineSkillCategory({ name: 'Libraries', slug: 'library' }),
	defineSkillCategory({ name: 'Langauges', slug: 'lang' }),
	defineSkillCategory({ name: 'Databases', slug: 'db' }),
	defineSkillCategory({ name: 'ORMs', slug: 'orm' }),
	defineSkillCategory({ name: 'DevOps', slug: 'devops' }),
	defineSkillCategory({ name: 'Testing', slug: 'test' }),
	defineSkillCategory({ name: 'Dev Tools', slug: 'devtools' }),
	defineSkillCategory({ name: 'Markup & Style', slug: 'markup-style' }),
	defineSkillCategory({ name: 'Design', slug: 'design' }),
	defineSkillCategory({ name: 'Soft Skills', slug: 'soft' })
] as const;

const defineSkill = <S extends string>(
	skill: Omit<Skill<S>, 'category'> & {
		category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
	}
): Skill<S> => {
	const out: Skill<S> = omit(skill, 'category');

	if (skill.category) {
		out.category = categories.find((it) => it.slug === skill.category);
	}

	return out;
};

export const items = [
	defineSkill({
		slug: 'js',
		color: 'yellow',
		description:
			'I am a passionate JavaScript developer with expertise in frontend development using React.js and Vue.js. I specialize in creating responsive and user-friendly web applications, leveraging modern technologies like Redux, TypeScript, and Tailwind CSS. My portfolio showcases a range of projects where I have demonstrated my skills in building interactive UI components, optimizing performance, and integrating APIs to deliver seamless user experiences.',
		logo: Assets.JavaScript,
		name: 'Javascript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'java',
		color: 'slate',
		description:
			'Experienced Java developer proficient in building scalable and robust backend applications using Java SE and Java EE frameworks like Spring Boot. Skilled in database integration, RESTful API development, and multithreading.',
		logo: Assets.Java,
		name: 'Java',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'ts',
		color: 'blue',
		description:
			'Skilled TypeScript developer with expertise in type-safe JavaScript development. Proficient in using TypeScript for frontend and backend projects, ensuring code reliability, and improving developer productivity with strong typing.',
		logo: Assets.TypeScript,
		name: 'Typescript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'cpp',
		color: 'blue',
		description:
			'Experienced C++ developer proficient in building high-performance and scalable software applications. Skilled in object-oriented programming, data structures, algorithms, and memory management. Experienced in developing applications for systems programming, game development, and performance-critical tasks. Proficient in using C++ libraries and frameworks to optimize code efficiency and achieve optimal resource utilization.',
		logo: Assets.Cpp,
		name: 'C++',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'css',
		color: 'blue',
		description:
			'Experienced in CSS for styling web pages and applications. Proficient in CSS3 features like Flexbox, Grid Layout, animations, transitions, and responsive design techniques. Skilled in writing clean and scalable CSS code for consistent and visually appealing user interfaces.',
		logo: Assets.CSS,
		name: 'CSS',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'html',
		color: 'orange',
		description:
			'Proficient in HTML5 for building structured and semantically meaningful web pages. Skilled in HTML elements, forms, multimedia integration, and accessibility best practices.',
		logo: Assets.HTML,
		name: 'HTML',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'sass',
		color: 'pink',
		description:
			'Proficient in Sass (Syntactically Awesome Style Sheets) for efficient and maintainable CSS development. Skilled in using variables, mixins, nesting, and inheritance to streamline stylesheets, improve code organization, and enhance reusability.',
		logo: Assets.Sass,
		name: 'Sass',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'reactjs',
		color: 'cyan',
		description:
			'Seasoned React.js developer adept at crafting dynamic and interactive user interfaces for web applications. Proficient in state management with Redux, creating reusable components, and optimizing performance for better user experiences.',
		logo: Assets.ReactJs,
		name: 'React Js',
		category: 'library'
	}),
	defineSkill({
		slug: 'svelte',
		color: 'orange',
		description: ' Skilled Svelte developer proficient in building reactive and efficient web applications. Experienced in component-based architecture, state management with Svelte stores, and optimizing rendering performance.',
		logo: Assets.Svelte,
		name: 'Svelte',
		category: 'library'
	}),
	defineSkill({
		slug: 'Next',
		color: 'white',
		description: 'Experienced Next.js developer adept at building server-side rendered and statically generated React applications. Proficient in routing, data fetching, and optimizing performance for SEO and user experience.',
		logo: Assets.Nextjs,
		name: 'Next JS',
		category: 'framework'
	}),
	defineSkill({
		slug: 'Angular',
		color: 'red',
		description: 'Experienced Angular developer proficient in building dynamic and scalable web applications. Skilled in TypeScript, Angular CLI, RxJS for state management, and Angular Material for UI components. Experienced in creating SPA (Single Page Applications) with routing, lazy loading modules, and optimizing performance.',
		logo: Assets.Angular,
		name: 'Angular JS',
		category: 'framework'
	}),
	defineSkill({
		slug: 'Figma',
		color: 'red',
		description: 'Proficient in Figma for designing and prototyping user interfaces. Skilled in creating interactive prototypes, collaborating with teams, and translating designs into responsive web layouts.',
		logo: Assets.Figma,
		name: 'Figma',
		category: 'design'
	}),
	defineSkill({
		slug: 'Tailwind CSS',
		color: 'blue',
		description: 'Experienced in Tailwind CSS for creating modern and responsive UI designs. Proficient in utility-first styling, custom component theming, and optimizing CSS for faster load times.',
		logo: Assets.Tailwind,
		name: 'Tailwind',
		category: 'framework'
	}),
	defineSkill({
		slug: 'Node js',
		color: 'blue',
		description: 'Experienced Node.js developer proficient in building scalable and performant server-side applications. Skilled in asynchronous programming, RESTful API development, and integrating with databases like MongoDB and PostgreSQL.',
		logo: Assets.NodeJs,
		name: 'Node JS',
		category: 'framework'
	}),
	defineSkill({
		slug: 'Express',
		color: 'blue',
		description: 'Skilled Express.js developer adept at building RESTful APIs and web applications. Proficient in middleware integration, route handling, authentication, and session management.',
		logo: Assets.ExpressJs,
		name: 'Express JS',
		category: 'framework'
	}),
	defineSkill({
		slug: 'MongoDB',
		color: 'green',
		description: 'Experienced MongoDB developer proficient in designing and implementing NoSQL database solutions. Skilled in data modeling, querying, indexing, and performance optimization for large-scale applications.',
		logo: Assets.MongoDB,
		name: 'MongoDB Database',
		category: 'db'
	}),
	defineSkill({
		slug: 'PostgreSQL',
		color: 'white',
		description: ' Proficient in PostgreSQL for relational database management. Experienced in SQL querying, transaction management, data integrity, and database optimization for efficient data storage and retrieval.',
		logo: Assets.PostgreSQL,
		name: 'PostgresSQL Database',
		category: 'db'
	}),
] as const;

export const title = 'Skills';

export const getSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => items.filter((it) => slugs.includes(it.slug));

export const groupByCategory = (
	query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
	const out: ReturnType<typeof groupByCategory> = [];

	const others: Array<Skill> = [];

	items.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

		// push to others if item does not have a category
		if (!item.category) {
			console.log(item.category);
			others.push(item);
			return;
		}

		// check if category exists
		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };

			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		out.push({ category: { name: 'Others', slug: 'Others' }, items: others });
	}

	return out;
};
