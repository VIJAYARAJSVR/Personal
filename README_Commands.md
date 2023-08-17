
<h1 align="center">
  Gatsby GitPages
</h1>

## 🚀 Important:
        Make sure that your repository’s settings has the gh-pages branch set as the source to deploy from.
        # open the repository in github.com
        # click respository(eg:personal) settings
        # in "settings" page, under "Build and deployment" section 
        # under "Branch", click the drop-down and select "gh-pages"

1.  **Configuration_1.**
    ```
    # Add the below code inside gatsby-config
    
        module.exports = {
        pathPrefix: "/Personal",
        }
    ```
    ### 🚀 Note: 
            Above "Personal" is github repository name.

2.  **Configuration_2**

    ```
    # Append the below code inside Package.json inside "scripts"
    
        "start": "gatsby develop",
        "build": "gatsby build",
        "clean": "gatsby clean",
    
        "predeploy": "npm run build",
        "deploy": "gatsby build --prefix-paths && gh-pages -d public",
    
        "serve": "gatsby serve"
    
    ```
    

3. **Run the below commands in Terminal one by one**

    ```
    cd [your project root folder]

    npm run clean

    npm run deploy

    ```




