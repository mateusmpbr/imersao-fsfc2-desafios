#!/bin/bash

if [ ! -d "node_modules" ]; then
    npm install
fi

npm start

tail -f /dev/null