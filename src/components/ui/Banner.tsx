"use client"
import Button from './Button';

const Banner = () => {
    return (
        <div>
             <Button onClick={() => { console.log("Button clicked") }}>
          Go to Courses
        </Button>
        </div>
    );
};

export default Banner;