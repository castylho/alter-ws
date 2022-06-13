import React from "react";
import "./App.css";
import Snackbar from "./features/snackbar/Snackbar";
import Graph from "./features/graph/Graph";
import useWebSocket from "react-use-websocket";
import { updateGraph } from "./features/graph/graphSlice";
import { useAppDispatch } from "./app/hooks";
import { updateSnackbar } from "./features/snackbar/snackbarSlice";
import Appbar from "./components/AppBar";

const WS_URL = "ws://localhost:8999";
const RECONNECT_INTERVAL = 3000;

type WSData = {
  id: number;
  temperature: number;
  timestamp: number;
  data: number;
};

function App() {
  const dispatch = useAppDispatch();
  const { lastJsonMessage }: { lastJsonMessage: WSData[] } = useWebSocket(
    WS_URL,
    {
      filter: (message) => {
        const parsedMessage = JSON.parse(message.data);
        const firstData = parsedMessage[0].data;
        const secondData = parsedMessage[1].data;

        return firstData < 100 && secondData < 100;
      },
      onOpen: () => {
        dispatch(
          updateSnackbar({
            isOpen: true,
            message: "Connected to Web Socket",
            severity: "success",
          })
        );
      },
      onMessage: () => {
        if (lastJsonMessage) {
          const [first, second] = lastJsonMessage;
          dispatch(
            updateGraph({
              firstTemperature: first.temperature,
              firstData: first.data,
              secondTemperature: second.temperature,
              secondData: second.data,
            })
          );
        }
      },
      onError: (event) => {
        dispatch(
          updateSnackbar({
            isOpen: true,
            message: "Something went wrong",
            severity: "error",
          })
        );
      },
      shouldReconnect: () => true,
      reconnectInterval: RECONNECT_INTERVAL,
    }
  );

  return (
    <div className="App">
      <Appbar />
      <Graph />
      <Snackbar />
    </div>
  );
}

export default App;
