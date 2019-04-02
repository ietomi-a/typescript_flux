import * as React from "react";
import {Actions} from "./actions";
import {nameStore, messageStore} from "./stores";

type TypeMyViewProps = {};
type TypeMyViewState = { name: string, message: string };
export class AppView extends React.Component<TypeMyViewProps,TypeMyViewState> {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      message: ""
    };
    nameStore.onChange = () => {
      this.setState({name: nameStore.name});
    };
    messageStore.onChange = () => {
      this.setState({message: messageStore.message});
    };
  }

  render() {
    console.log( "View.render" );
    return (<div>
	      <div>
		<input value={this.state.name}
		       onChange={ (e) => Actions.changeName(e.target.value) } />
		<button onClick={(e) => Actions.submitName()}> submit </button>
	      </div>
	      <div> {this.state.message} </div>
	    </div>);
  }
}

