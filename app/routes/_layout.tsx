import type { LayoutHandler } from "@sonikjs/preact";

const handler: LayoutHandler = ({ children, head }) => {
	return (
		<html lang="en">
			<head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				{import.meta.env.PROD ? (
					<>
						<link href="/static/style.css" rel="stylesheet" />
						<script type="module" src="/static/client.js" />
					</>
				) : (
					<>
						<link href="/app/style.css" rel="stylesheet" />
						<script type="module" src="/app/client.ts" />
					</>
				)}
				{head.createTags()}
			</head>
			<body>
				<div class="wrapper">
					<header>
						<h1>
							<a href="/">Top</a>
						</h1>
					</header>
					{children}
					<footer className="mt-2">
						<small>© 2023 your name</small>
					</footer>
				</div>
			</body>
		</html>
	);
};

export default handler;
