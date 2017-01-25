jhead -autorot *.jpg
for i in *.jpg; do convert  -resize 1000x  ;done
mogrify -strip *
