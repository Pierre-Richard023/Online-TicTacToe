import React, {useState} from "react";

const Player = () => {

    const [playerName, setPlayerName] = useState<string>("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return (
        <>

            <div className="w-96">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="player-name" className="block mb-2 text-2xl font-medium text-gray-900">
                        Entrez votre nom :
                    </label>
                    <input type="text" id="player-name"
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                           value={playerName} onChange={e => setPlayerName(e.target.value)}
                    />

                    <div className="mt-2.5 flex justify-end">
                        <button type="submit"
                                className="mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none ">
                            Envoyer
                        </button>
                    </div>
                </form>
            </div>

        </>
    )
}

export default Player