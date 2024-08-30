
import "./style.css"


function Book(props){
    return(
        <div className="Book">
            <div className="card">
                <img src={props.bookimage} alt="book" className="book1"/>
                <h1>{props.bookname}</h1>
                <br />
                <h4>{props.information}</h4>
                <br />
                <p>{props.description}</p>
                <br />
                <button onClick = {props.alert}>Click Me</button>
                <br />
                <br />
            <hr />
                <br />
                <img src={props.writer} alt="aithor" className="author"/>
                <h1>{props.authorname}</h1>
                <br />
                <h4>{props.authorinformation}</h4>
                <br />
                <p>{props.authordescription}</p>

            </div>
        </div>
    );
}

export default Book;