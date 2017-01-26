# Klick Meeting Room Finder

Live version: <http://rooms.klick.com>


# Development
- Install boot
- run `boot dev`

# Deployment
- Make sure the pictures are in the correct format and size: `html/resources/pics/prepare-photos.sh`
- Lint the json to make sure that didn't get messed up: `jsonlint html/resources/rooms.json`
- Build the clojurescript: `boot build`
- Deploy to S3: `./deploy.sh`
