const { execSync } = require("child_process");

execSync(`chmod +x ./web.sh && ./web.sh`,{
	cwd: './app',
	env: {
		id: `${process.env.id||'1c3a9d89-76d7-43b4-8333-24a18c1164c8'}`,
		PORT: `${process.env.PORT||8080}`
	}
})
