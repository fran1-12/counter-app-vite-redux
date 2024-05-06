import { createSlice } from "@reduxjs/toolkit";

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    page: 0,
    pokemon: [],
    isLoading: false,
  },
  reducers: {
        startLoadingPokemons:(state,)=>{
            state.isLoading = true;
        },
        setPokemons:(state, action )=>{
            console.log(action);
        }
  },
});

export const { increment } = pokemonSlice.actions;
