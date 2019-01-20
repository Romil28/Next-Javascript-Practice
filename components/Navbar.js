import Link from 'next/link';

const Navbar = () => (
	<div>
		<ul>
		 	<li><Link href="/"><a>Gangstu</a></Link></li>
		 	<li><Link href="/basic"><a>Basic</a></Link></li>
		 </ul>

		<style jsx>{`

			ul {

				background: #5555;
				color: #ffff;
				list-style: none;
				display: flex;
			}

			ul li {
				font-size: 25px;
				margin-right: 30px;
			}

			ul li a {

				color: #gggg;
				text-decoration: none;
			}


		`}

		</style>
	</div>
);


export default Navbar;