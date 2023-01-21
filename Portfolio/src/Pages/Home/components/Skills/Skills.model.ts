
type SkillLevelType = 1 | 2 | 3;

type SkillData = {
  skillName: string,
  skillLevel: SkillLevelType,
  subSkillList: string[]
}

export const skillsList: SkillData[] = [
	{
		skillLevel: 3,
		skillName: "UI",
		subSkillList:[
			"CSS/SASS/SCSS",
			"Material UI",
			"Custom Design Library",
			"Cross Platform Design",
			"Cross browser Design",
			"Adaptive Design",
			"TSS"
		]
	},
	{
		skillLevel: 2,
		skillName: "Quality Maintenance",
		subSkillList:[
			"Jest (Unit testing)",
			"React Test Library (Integration Testing)",
			"Eslint/Tslint (Airbnb2)",
			"Typescript",
			"Prettier",
			"Husky with lint-staged",
			"Code Review",
			"Code rules documentation"
		]
	},
	{
		skillLevel: 2,
		skillName: "Architecture",
		subSkillList:[
			"Kiss",
			"Dry",
			"Feature Sliced Design",
			"Solid",
			"Gangs of Four (OOP Patterns)",
		]
	},
	{
		skillLevel: 2,
		skillName: "CICD",
		subSkillList:[
			"Docker",
			"Gitlab CI",
			"Webpack",
			"Pipelines",
			"Babel",
			"TSC",
			"Uglify",
		]
	},
	{
		skillLevel: 3,
		skillName: "Project maintenance",
		subSkillList:[
			"Business analysis",
			"Task decomposition",
			"Task estimation",
			"Planning",
			"Task distribution",
			"Agile, Scrum"
		]
	},
	{
		skillLevel: 3,
		skillName: "JavaScript",
		subSkillList:[
			"ES6",
			"Scope, Closer, Context",
			"Iterators",
			"Types",
			"Functional Programming"
		]
	},
	{
		skillLevel: 3,
		skillName: "React",
		subSkillList:[
			"Hooks",
			"ReactContext",
			"Redux",
			"Swr",
			"React-hook-forms",
			"Formik",
			"Redux-Form",
			"High Order Components",
			"Redux Toolkit",
			"React Reconciliation",
			"Memoization",
			"Next"
		]
	},
	{
		skillLevel: 3,
		skillName: "Optimization",
		subSkillList:[
			"Memoization",
			"Lazy loading",
			"Bundle size optimization",
			"Image Optimization",
			"Compression",
			"Performance optimization"
		]
	},
	{
		skillLevel: 3,
		skillName: "Computer Scince",
		subSkillList:[
			"Algorithms",
			"Data Structures",
			"Performance",
			"Readability",
			"Complexity Analysis",
		]
	},
	{
		skillLevel: 2,
		skillName: "Network",
		subSkillList:[
			"Rest",
			"React Query",
			"Axios, Fetch",
			"Cors",
			"BFF",
			"websockets",
			"WebRtc",
			"Traffic optimization",
			"Bundle Optimization",
		]
	},
	{
		skillLevel: 3,
		skillName: "Security",
		subSkillList:[
			"Cookie",
			"JWT",
			"HTTPS",
			"RSA",
			"CORS",
		]
	},
];
