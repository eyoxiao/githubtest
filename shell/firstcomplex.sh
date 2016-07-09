#!/bin/sh

# we have less than 3 arguments, print the help text

#remember the space after if [ and before ]
if [ $# -lt 3 ];then
cat <<HELP
     ren -- renames a number of files using sed regular expressions
  
     USAGE: ren 'regexp' 'replacement' files
     EXAMPLE: rename all *.HTM files in *.html:
     ren 'HTM$' 'html' *.HTM

HELP
   exit 0
fi

#echo $1

OLD="$1"
NEW="$2"

shift 2

for file in $*;do
echo "$file"
if [ -f "$file" ];then
   newfile=`echo "$file" | sed "s/${OLD}/${NEW}/g"`
   echo "$newfile"
   if [ -f "$newfile" ];then
     echo "ERROR:$newfile exists already"
   else
     echo "rename $file to $newfile...."
     mv "$file" "$newfile"
   fi
fi
done
