import React from "react";
import { IconButton } from "@material-ui/core";
import DeleteOutlined from "@material-ui/icons/DeleteForeverOutlined";

class DeleteTodo extends React.Component {
    constructor(props) {
        super(props);
        this.delete = props.deleteForCompleted;
    }

    deleteEventHandler = () => {
        this.delete();
    }

    render() {
        return (
            <div>Delete Completed items 
                <IconButton
                    aria-label="Delete"
                    onClick={this.deleteEventHandler}>
                        <DeleteOutlined />
                    </IconButton>
            </div>
        );
    }
}

export default DeleteTodo;