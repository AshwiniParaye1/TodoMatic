//we can use connect method to connect this component with redux store
import React, { Component } from "react"
import { connect } from "react-redux"
import { addTodos } from "../redux/reducer"
import { GoPlus } from "react-icons/go";


const mapStateToProps = (state) => {
  return {
    todos: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj))
  }
}


class Todos extends Component {

  state = {
    todo: ""

  } 

  handleChange = (e) => {
    this.setState({ todo: e.target.value })
    }
   
  add = () => {
    if (this.state.todo === "") {
      alert("Input is Empty")
    } else {
      this.props.addTodo({
        id: Math.floor(Math.random() * 1000),
        item: this.state.todo,
        completed: false,
        })
      this.setState({ todo: "" })
     
    }

  }



  render(props) {
    return (
      <div className="addTodos">
        <input
          type="text"
          onChange={(e) => this.handleChange(e)}
          className="todo-input"
          value={this.state.todo}
        />

        <button
          whilehover={{ scale: 1.1 }}
          whiletap={{ scale: 0.9 }}
          className="add-btn"
          onClick={() => this.add()}
        >
          <GoPlus />
        </button>
        <br />
      </div>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Todos)
