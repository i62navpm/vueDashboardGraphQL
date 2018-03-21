# Dashboard Code Habitat

## Docker

 1. **Build** images
	- Build **dev** image:
		``` bash
		$ docker build -t dashboard-habitat .
		```
	- Build **production** image:
		``` bash
		$ docker build -t dashboard-habitat-pro . --build-arg app_env=production
		```
 2. **Run** images
	- Run **dev** image:
		``` bash
		$ docker run -it -p 4000:4000 -v $(pwd)/src:/usr/src/app/src dashboard-habitat
		```
	- Run **production** image:
		``` bash
		$ docker run -it -p 4000:4000 dashboard-habitat-pro
		```
		