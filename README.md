# Art-Those-Prototype
 Art-Those is a website or app that is made to benefit both professional artists and amateur artists


# Why?
Throughout my journey as an artist, I hit many many obstacles that I didn't know how to solve, sometimes I still do. The learning process for learning to draw in a free-to-learn environment is very flawed and lacks interactive communication with skilled artists. The purpose of this product is to make it a faster and more straight forward learning experience for beginner to intermediate artists by having real professionals assist them. In order to keep this service free, the professionals can build reputation to further expand their presence in the art industry through an upvoting and downvoting system. Reddit's current success proves that an upvote/downvote system works to push trolls away and keep credible sources intact. 

# What does it look like?

Currently, the looks of the site is still in the works, but the current prototype is this

<img width="1680" alt="Example1" src="https://user-images.githubusercontent.com/69550699/96360346-46627900-10d1-11eb-9ea5-9a46c0f664f9.png"> 



<img width="1679" alt="Screen Shot 2020-10-17 at 11 27 35 PM copy" src="https://user-images.githubusercontent.com/69550699/96360351-57ab8580-10d1-11eb-9d93-f59b63e05b00.png">





# How was this contructed?

The HTML consists of three div (boxes) stacked. In the second div, are the five tabs, made by an <a> tag. Inside the final div is the contents of each page, varying depending on which page is clicked on in the second div. The "Ask" page is made using <input> tags with the type text and type image. Javascript is used to take the user input as an object with the element. The object is then set in the local storage (in ask.js)  to be "get"-ed in the next javascript file (teach.js).

# How is it used?

Currently, the programs only has two working functions, but all the rest of the navs in the navbar are explorable. The main function is in the "Ask" and "Teach" nav. From the "Ask" nav, you can remotely type a description for help and add an image to then post to the "Teach" nav. After you press "post" you can then go to the "Teach" nav to see your post! Of course, since this is still a prototype, you will be the only one seeing it. (The "Settings" nav is currently not a page due to the current lack of use for it)
