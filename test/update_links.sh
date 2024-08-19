#!/bin/bash

# Move to the correct directory first
cd ./packages/scratchauth-turbowarp-supabase

# Check if the directory exists before linking
if [ -f "package.json" ]; then
    sudo npm link
else
    echo "Error: package.json not found in ./packages/scratchauth-turbowarp-supabase"
    exit 1
fi

# Move back to the server directory
cd ../../server

# Link the package in the server directory
npm link @scratchauth-turbowarp/supabase

# Move back to the original directory (optional, depending on your needs)
cd ../

# sh test/update_links.sh
