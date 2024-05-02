/*
 * Copyright (c) - All Rights Reserved.
 * 
 * See the LICENSE file for more information.
 */

import React, { useState } from "react";

function NewTodoForm(props) {

    const [description, setDescription] = useState('');
    const [asssigned, setAssigned] = useState('');

    // const descriptionChange = (event) => {
    //     console.log(event.target.value);
    //     setDescription(event.target.value);
    // }

    // const assigned = (event) => {
    //     console.log(event.target.value);
    //     setAssigned(event.target.value);
    // }

    const submitTodo = () => {
        if (description !== '' && asssigned !== ''){
            props.addTodo(description, asssigned);
            setDescription('');
            setAssigned('')
        }
    }


    return (
        <div className="mt-5">
            <form>
                <div className="mb-3">
                    <label className="form-label">Assigned</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        required
                        onChange={e => setAssigned(e.target.value)}
                        value={asssigned}
                    ></input>
                </div>
                <div className="mb-3">
                    <label className="form-control">Description</label>
                    <textarea 
                        className="form-control" 
                        rows={3} 
                        required
                        onChange={e => setDescription(e.target.value)}
                        value={description}
                    ></textarea>
                </div>
                <button 
                    type="button" 
                    className="btn btn-primary mt-3" 
                    onClick={submitTodo}
                >
                    Add Todo
                </button>
            </form>
        </div>
    )
}

export default NewTodoForm