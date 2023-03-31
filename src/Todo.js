import React from "react";
import {ListItem, ListItemText, InputBase, Checkbox, ListItemSecondaryAction, IconButton} from "@material-ui/core";
import DeleteOutlined from "@material-ui/icons/DeleteOutline";

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {item: props.item, readOnly: true}; // 매개변수 item의 변수 값을 item에 대입
        this.delete = props.delete;
    }

    deleteEventHandler = () => {
        this.delete(this.state.item);
    }

    offReadOnlyMode = () => {
        console.log("Event!", this.state.readOnly);
        this.setState({readOnly: false}, () => {
            console.log("ReadOnly?", this.state.readOnly)
        });
    }

    enterKeyEventHandler = (e) => {
        if (e.key === "ENter") {
            this.setState({readOnly: true})
        }
    }

    editEventHandler = (e) => {
        const thisItem = this.state.item;
        thisItem.title = e.target.value;
        this.setState({item: thisItem});
    }

    checkboxEventHandler = (e) => {
        console.log("check box event call");
        const thisItem = this.state.item;
        thisItem.done = thisItem.done ? false : true; // thisItem.done = !thisItem.done
        this.setState({itme: thisItem});
    }

    render() {
        const item = this.state.item;
        return (
            <ListItem>
                <Checkbox
                checked = {item.done}
                onChange = {this.CheckboxEventHandler}
                />
                <ListItemText>
                    <InputBase
                    inputProps={{"aria-label" : "naked", readOnly: this.state.readOnly}}
                    type = "text"
                    id = {item.id}
                    name = {item.id}
                    value = {item.title}
                    multiline = {true}
                    fullWidth = {true}
                    onClick = {this.offReadOnlyMode}
                    onChange = {this.editEventHandler}
                    onKeyPress = {this.enterKeyEventHandler}
                    />
                </ListItemText>

                <ListItemSecondaryAction>
                    <IconButton aria-label = "Delete"
                    onClick = {this.deleteEventHandler}>
                        <DeleteOutlined />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        );
    }
}

export default Todo;