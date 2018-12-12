#!/bin/bash
set -ex
npm run build
cd ../Alchemint-official-web-dist
rm ./static -fr
rm ./index.html -fr
cp ../Alchemint-official-web/dist/* ./ -r
git status
git add -A
git commit -m "update"
git push
echo "success"
