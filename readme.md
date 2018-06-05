# Klick Meeting Room Finder

Live version: <http://rooms.klick.com>

AWS: 
cognito role: arn:aws:iam::975056330565:role/Cognito_MeetingRoomsUnauth_Role 
bucket: arn:aws:s3:::meetingroom-pics
dynamodb: arn:aws:dynamodb:us-east-1:975056330565:table/meetingrooms



# Development
- Install boot
- run `boot dev`

# Deployment
- Make sure the pictures are in the correct format and size: `html/resources/pics/prepare-photos.sh`
- Lint the json to make sure that didn't get messed up: `jsonlint html/resources/rooms.json`
- Build the clojurescript: `boot build`
- Deploy to S3: `./deploy.sh`
