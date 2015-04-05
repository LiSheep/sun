#! /bin/sh
netstat -pnt | awk '{print $4}' | grep ":$1$" | wc -l
