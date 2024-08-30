import Book from "./props"
 

function Booker(){
    return(
        <Book bookname = "Eloquent JavaScript" authorname = "Marijn Haverbeke" authorinformation = "Freelance, web dev" authordescription = "Marijn is an independent programmer and author based in Berlin. His main contributions have been the book Eloquent JavaScript and major work on open-source projects like CodeMirror, Acorn, and the Rust compiler."
        alert = {function(){console.log( "Eloquent JavaScript,", "Marijn Haverbeke")}} writer = 'https://2017.websummercamp.com/var/ezflow_site/storage/images/netgen-legacy/summer-camp/web-summer-camp-2017/all-speakers/marijn-haverbeke/28756-1-eng-GB/Marijn-Haverbeke_ng_image_full.jpg' bookimage = 'https://www.blog.sindibad.tn/wp-content/uploads/2021/05/Eloquent-JavaScript-A-Modern-Introduction-to-Programming-3rd-Edition-Book-PDF-1600x1234.jpg' information = "This is a book about JavaScript, programming, and the wonders of the digital." description = "This much anticipated and thoroughly revised third edition of Eloquent JavaScript dives deep into the JavaScript language to show you how to write beautiful, effective code. It has been updated to reflect the current state of Java¬Script and web browsers and includes brand-new material on features like class notation, arrow functions, iterators, async functions, template strings, and block scope. A host of new exercises have also been added to test your skills and keep you on track."/>
    )
}

export default Booker;