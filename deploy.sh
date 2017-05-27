#!/bin/bash

case $1 in
	"all")
		scp -r -i ../../mnoims_aws_keypair.pem * ubuntu@35.161.8.190:~/bots/mwc-demo-vfbot/
		;;
	*)
		scp -r -i ../../mnoims_aws_keypair.pem $2 ubuntu@35.161.8.190:~/bots/mwc-demo-vfbot/
		;;
esac

