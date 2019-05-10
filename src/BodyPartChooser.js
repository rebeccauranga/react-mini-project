import React from 'react';

function BodyPartChooser() {
    return (
        <div>
            <select>
                <option selected="selected">Choose Workout Type</option>
                <option value="Lower Body">Lower Body</option>
                <option value="Upper Body">Upper Body</option>
                <option value="Cardio">Cardio</option>
            </select>


        </div>
    );
}

export default BodyPartChooser;