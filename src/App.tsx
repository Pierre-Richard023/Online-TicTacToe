import {Provider} from "react-redux";
import Game from "./components/game/game.tsx";
import {store} from "./store/store.ts";

const App = () => {

    return (
        <>
            <Provider store={store}>
                <main className="bg-gray-100 text-gray-800">
                    <Game/>
                </main>
            </Provider>

        </>
    )
}

export default App
