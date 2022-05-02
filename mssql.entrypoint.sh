#!/bin/bash

# Run init-script with long timeout - and make it run in the background
echo "Kicking out the init script"
/opt/mssql-tools/bin/sqlcmd -S localhost -l 60 -U SA -P "MasteryDevelopment1" -i mssql.init.sql &

# Start SQL server
/opt/mssql/bin/sqlservr