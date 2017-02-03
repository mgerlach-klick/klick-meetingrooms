jhead -autorot *.jpg
for i in *.jpg; do convert $i -resize 1000x $i ;done
mogrify -strip *.jpg
