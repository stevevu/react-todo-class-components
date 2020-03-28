import React, {Component} from 'react';

class InputTodo extends Component {
    
    handleTitleSubmit = (e) => {
        e.preventDefault();
        const title = document.querySelector("#title").value;
        this.props.handleSubmitProps(title);
        document.querySelector("#title").value = ""; // reset the title when form is submitted
    }

    render() {
        return (
            <form className="form-container" onSubmit={this.handleTitleSubmit}>
                <input className="input-text" id="title" name="title" type="text" placeholder="add todo ..." />
                <input className="input-submit" type="submit" />
            </form>
        )
    }
}

export default InputTodo;