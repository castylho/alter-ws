import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface GraphData {
  firstTemperature: number;
  secondTemperature: number;
  firstData: number;
  secondData: number;
}

export interface GraphState {
  data: GraphData[];
}

export const initialState: GraphState = {
  data: [],
};

export const graphSlice = createSlice({
  name: "graph",
  initialState,
  reducers: {
    updateGraph: (state, action: PayloadAction<GraphData>) => {
      state.data = [...state.data, action.payload];
    },
  },
});

export const { updateGraph } = graphSlice.actions;
export const selectGraph = (state: RootState) => state.graph;

export default graphSlice.reducer;
