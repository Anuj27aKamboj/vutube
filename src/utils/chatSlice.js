import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_CHAT } from "./constants";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      // state.messages.splice(OFFSET_LIVE_CHAT, 5);
      state.messages.unshift(action.payload);
      if (state.messages.length > OFFSET_LIVE_CHAT){
        state.messages.pop();
      }
    }
  },
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;
