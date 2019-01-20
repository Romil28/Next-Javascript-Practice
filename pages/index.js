import Link from 'next/link';

const Index = () => (
	<div>
	 	<ul>
	 		<li><Link href="/"><a>Gangstu</a></Link></li>
	 		<li><Link href="/basic"><a>Basic</a></Link></li>
	 	</ul>
		<h1>Hello Gangstu!</h1>
	</div>
);

export default Index;