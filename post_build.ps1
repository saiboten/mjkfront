Remove-Item "C:\utv\workspace-2014\musikkjulekalender\src\main\resources\resources\static\js\*" -Recurse -force
mv "build/static/js/main*.js" "build/static/js/main.min.js"
mv "build/static/js/runtime-main*.js" "build/static/js/runtime-main.min.js"
mv "build/static/js/2*.js" "build/static/js/2.min.js"
Copy-Item "./build/*" -Destination "C:\utv\workspace-2014\musikkjulekalender\src\main\resources\resources\static\js" -Recurse -force