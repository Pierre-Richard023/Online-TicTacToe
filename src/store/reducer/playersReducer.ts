import {createSlice} from "@reduxjs/toolkit";
import {Player} from "../../interface/player.ts";


interface PlayersState {
    players: Player[];
}

const initialState: PlayersState = {
    players: [],
}

export const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {}
})


export const {} = playerSlice.actions;
export default playerSlice.reducer



