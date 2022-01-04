import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";
import {useRef} from 'react';
function NewMeetupForm(props){
    const titleInputRef = new useRef();
    const imageInputRef = new useRef();
    const addressInputRef = new useRef();
    const descriptionRef = new useRef();

    function submitHandler(event){
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionRef.current.value;

        const meetupData={
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription
        };
        props.onAddMeetup(meetupData);

    }
        
    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
              <div className={classes.control}>
                    <label htmlFor="title">Meetup Title</label>
                    <input type="text" required id="title" ref={titleInputRef}/>
                </div>  
                <div className={classes.control}>
                    <label htmlFor="image">Meetup Image</label>
                    <input type="url" required id="image" ref={imageInputRef} />
                </div>  
                <div className={classes.control}>
                    <label htmlFor="address">Meetup Address</label>
                    <input type="text" required id="address" ref={addressInputRef}/>
                </div>  
                <div className={classes.control}>
                    <label htmlFor="description">Meetup Description</label>
                    <textarea row="5" required id="description" ref={descriptionRef}></textarea>
                </div> 
                <div className={classes.actions}>
                    <button>Add Meetup</button>
                </div> 
            </form>
        </Card>
    )
}
export default NewMeetupForm;