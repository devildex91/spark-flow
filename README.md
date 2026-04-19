

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)


https://spark-flow.netlify.app/
# SPARKFLOW
## Amplify your creative sound
1. ### UX

- Primary Goals
- Business Goals
- User Goals
- User Stories
- Design Choices
- Wireframes

2. ### Features

- Existing Features
- Features left to implement

3. ### Technologies used

4. ### Testing

5. ### Deployment

- How to run this project

6. ### Credits

- Content
- Media
- Code
- Acknoledgements


        
<details>
<summary> 1. UX </summary>

---

#### Primary Goals
---

Here at sparkflow we aim to Spark your listening to life. We will do this by providing you with the soundtrack to success. We have created an inclusive app aimed at taking your current listening and amplifying it to new volumes,How? you may ask. Well the only thing we ask to do this is a little inspiration from you. All we need is either your current mood,a genre of music or even an artist you love.You tell us this and in return we promise to give you LOADS of new artists and songs as well a little taster of this music for you to wrap your ears around and enjoy.So if you enjoy music but are looking for something new then you are our audience. Take a journey with us and lets see what we can do together.



[back to top](#SPARKFLOW)

#### Business Goals

---

.

[back to top](#SPARKFLOW)

#### User Goals



[back to top](#SPARKFLOW)

#### User Stories

---

- For full Acceptance Criteria and tasks please follow [this link]() to the project board for SPARKFLOW




[back to top](#SPARKFLOW)

#### Design Choices

---

- I have chosen to use bootstrap grid for my responsive design and where possible use bootstrap components for the bare bones.
- Within my responsive layout I intend to keep everything centred as w ll as possible so it all follows the same flow.
- My reasoning for centring most components is to keep things simple for the user, so they know where everything is going to be and like a workout you dont need to do anything flashy, just keep it simple yet effective and you will see the results you want.
- A responsive navbar that uses the avaliable space whilst keeping things minimalist for the best user experience.
- Footers will be kept consistent throughout so that it is intuitive for the user and key information is allways in the same place regardless of what device is used.
- I will put all Membership options as cards rather than a table to make them stand out and make them clear and consise to the user what the differences are. Because if I include too much information it will distract and overload the user into looking elsewhere, having the opposite effect of what we are aiming for.
- All sections where applicable will have a clear title to show the user what that section is about so it is easy for the user to navigate their way around the site.
- Headers and footers will follow the same colour format and layouts no matter the page you are on so that the key information needed is allways accesible and exactly where the user expects it to be.

[back to top](#SPARKFLOW)

##### Fonts
---
<details>
<summary>Fonts</summary>
---

- Geologica bold for titles to match the logo
- Geologica normal to match the company moto in the logo

</details>

- This font in its different forms has been chosen as it stands out quite nicely in Bold for the titles. The same font has been chosen for the rest of the site to keep the site uniform and keep with its modern look and feel We found that using anything too italic or free flowing although in keeps with how music makes people feel felt a bit too old fashioned for the feel of the site.

[back to top](#SPARKFLOW)

##### Colours

---

- #121211
- #F24901
- #FBF9F9



[back to top](#SPARKFLOW)

##### Styling

---
- The company logo has been designed to look like a record/cd to help show the users that the company is music focused in everything we do
- The colour scheme running throughout the website has taken inspiration from the company logo with mainly blacks, dark greys and oranges used for a mixture of borders, font colours and opaque backgrounds where needed to keep the contrast ratio high for all different users to the site.
- Following on from the almost neon colours used for the design this is to not only ensure contrast like monetioned above but also to give it a sleek modern almost nightclub or gig type feel to help relate users to happy memories of music and our website. 

[back to top](#SPARKFLOW)

##### Background

---
On a phone screen the background will be an image taking up full viewport height. As the screen gets larger the background will change so the same image used for the phone background will take up the top half of the screen on tablets with a lighting effect bottom half with computer screen and larger using the original background photo as a smaller picture and the background being the same lightning effect used for the bottom half of the tablet screens. 

[back to top](#SPARKFLOW)

##### Images

---



[back to top](#SPARKFLOW)

##### Wireframes

---

<details>
<summary>Wireframe for screens < 579px </summary>

- ![wireframe for screens < 576px](./assets/images/readme-images/Ironclad-Fitness-phoneframe.webp)
</details>
<details>
<summary>Wireframe for screens >=768px</summary>

- ![wireframe for screens >=768px](./assets/images/readme-images/Ironclad-fitness-tabletframe.webp)
</details>
<details>
<summary>Wireframe for screens >=992px</summary>

- ![wireframe for screens >=992px](./assets/images/readme-images/Ironclad-Fitness-desktopframe.png)
</details>

</details>

[back to top](#SPARKFLOW)

<details>
 <summary> 2. Features </summary>

---

#### Existing Features

---



 
 <summary>Pages screenshots showing all features mentioned above</summary>
 
 





#### Features left to implement

---


</details>

[back to top](#SPARKFLOW)

<details>
 <summary>3. Technologies used </summary>
 
  ---
  + Visual Studios used as the primary IDE. 
  + vite and React used for frontend build 
  + react-router-7 used to provide the multipage layout 
  + API used for makeshift backend as well as a AI api for results from search.
 </details>

[back to top](#SPARKFLOW)

<details>
 <summary>4. Testing</summary>
 
 ---

<details>
<summary>Lighthouse tests screenshots</summary>


</details>

<details>
<summary>html tests</summary>



</details>

- HTML code tested at [validator.w3](https://validator.w3.org/) all pages passed with no errors or warnings.

- CSS tested at[jigsaw.w3](https://jigsaw.w3.org/css-validator/) and the css validates as CSS level 3 + SVG.
 <p>
    <a href="https://jigsaw.w3.org/css-validator/check/referer">
        <img style="border:0;width:88px;height:31px"
            src="https://jigsaw.w3.org/css-validator/images/vcss"
            alt="Valid CSS!" />
    </a>
</p> 
<p>
 <a href="https://jigsaw.w3.org/css-validator/check/referer">
        <img style="border:0;width:88px;height:31px"
            src="https://jigsaw.w3.org/css-validator/images/vcss-blue"
            alt="Valid CSS!" />
    </a>
</p>
<details>
<summary>  Contrast testing screenshots</summary>

![navbar/footer colours](./assets/images/readme-images/navbar-contrast-checker.png)
![header contrast](./assets/images/readme-images/header-contrast-check.png)
![main contrast](./assets/images/readme-images/main-contrast-check.png)

</details>



</details>

[back to top](#SPARKFLOW)

<details>
<summary> 5 . Deployment</summary>

---

[To view site](https://spark-flow.netlify.app/)

<details>
<summary>Site has been pushed to github and then with continuous deployment through netlify to better use Vite and React by:</summary>

---

1.  Making sure you have a github repository
2. MAke sure you have added a _redirects file in your public folder with the contents of /* /index.html 200. and have also run npm run build to create a dist folder otherwise  the following steps will ultimatley fail.
3.  Navigate to netlify and follow the instructions to set up an account.
4.  Once account has been set up click on add new project
5.  Next select import a Git repository and if not already done so follow the instructions to link your github account.
6.  Once this is complete you can select the repository you want netlify to use
7. Once you have selected your repository give your netlify deployment a name that it will use for your website URL.
8. Next when you get to Build Settings if using Vite you will need to select the build command to vite build and the public directory to dist.
9. Click continue and netlify will do the rest and will detect whenever you push anything to github and will update your site as needed. 

</details>
<details>
<summary> To download and work on the code yourself locally. </summary>

---

1.  Navigate to [devildex91/spark-flow](https://github.com/devildex91/spark-flow)
2.  Click on the green code button
3.  Select download zip  (This will save a copy of of the repository on your device).
4.  Once downloaded unpack zipped file to a location of your choosing and you can work on and run the code in an IDE of your choosing(Have fun).
 </details>
 <details>
<summary> To fork a repository.</summary>

---

- please see [github docs](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo) for more detailed and an easier to follow guide than I can produce but remember to navigate to [devildex91/ironclad-fitness](https://github.com/devildex91/ironclad-fitness) to fork this repository.

</details>

- ##### Note for anybody working on this code that bootstrap 5.3 has been used to create much of the page and should be reused by yourself to ensure it all works as intended.
</details>

[back to top](#SPARKFLOW)

<details>
<summary> 6. Credits</summary>

---

#### Content

---

- fonts imported from [google fonts.](https://fonts.google.com/selection/embed)

- 
- 
- 

[back to top](#SPARKFLOW)

#### Media

---

- Company Icon and favicon made using [logo.com](https://logo.com/)
- background image created using Google Gemini
- 

[back to top](#SPARKFLOW)

#### Code

---


#### Acknoledgements

freepik for background image

[back to top](#SPARKFLOW)






        