#!/bin/bash
tail -F /logs/mongosqld.log
# mongosqld --config=/mongosqld.conf &
# touch /logs/mongosqld.log