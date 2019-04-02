import {appDispatcher} from  "./appDispatcher";
import {ActionType} from "./actions";

type TypeNameStore = { name: string, onChange: (() => void) | null };
export const nameStore: TypeNameStore = { name: "", onChange: null };

type TypeMessageStore = { message: string, onChange: (() => void) | null };
export const messageStore: TypeMessageStore = { message: "", onChange: null };


// Action と Store を結びつける.
appDispatcher.register( (payload: any) => {
  if ( payload.actionType === ActionType.CHANGE_NAME ){
    nameStore.name = payload.value;
    if( nameStore.onChange ){
      nameStore.onChange();
    }
  }
});

appDispatcher.register( (payload: any) => {
  if ( payload.actionType === ActionType.SUBMIT_NAME ){
    messageStore.message = "Mr. " + nameStore.name + ", hello.";
    if( messageStore.onChange ){
      messageStore.onChange();
    }
  }
});
