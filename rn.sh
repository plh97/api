
#!/bin/bash
#Auth: Zz
#Script: Rename
i=0;
for loop in `ls ~/Desktop/img/`
do
i=`expr $i + 1`
# newName=`echo $fileName | sed 's/tzg/tuzhigang/g'`
# echo $loop
echo "=========================="
mv  "`echo $loop | sed 's/#/ /g' `"  "`echo $loop |sed 's/#//g' `"  2> /dev/null 

# mv ~/Desktop/img/$fileName ~/Desktop/img/jpg
done