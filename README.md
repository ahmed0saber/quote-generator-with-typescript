# quote-generator-with-typescript


## how to create typescript app
<code>npm install typescript --save-dev</code>

<code>npx tsc</code>

<code>npx tsc --init</code>

### open tsconfig.json and make sure these lines exist
<code>{
    "include": ["src"],
    "compilerOptions": {
        "outDir": "./build"
    }
}</code>

### create empty build folder

### create src folder with index.ts

### add this to package.json
<code>"scripts": {
    "start": "tsc --watch"
}</code>

### run this command
<code>npm start</code>