#! /bin/sh
/bin/netstat -pnt | grep :"$1" | wc -l
