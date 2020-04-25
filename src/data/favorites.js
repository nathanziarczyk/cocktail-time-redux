import axios from "axios";
/* INITIAL STATE */
export const initialState = {
  ids: [],
  data: [],
};

/* TYPES */
const SUCCESS_SEARCH_ID = "SUCCESS_SEARCH_ID";
const REMOVE_FAVORITE = "REMOVE_FAVORITE";

/* ACTION CREATORS */
export const searchById = (id) => (dispatch) => {
  axios
    .get(" https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + id)
    .then((response) => {
      dispatch(successSearch(id, response.data.drinks[0]));
    })
    .catch((error) => {
      console.log(error);
    });
};

export const removeFavorite = (id) => ({
  type: REMOVE_FAVORITE,
  payload: id,
});

const successSearch = (id, data) => ({
  type: SUCCESS_SEARCH_ID,
  payload: { id, data },
});

/* REDUCER */
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SUCCESS_SEARCH_ID:
      return {
        ids: [...state.ids, payload.id],
        data: [...state.data, payload.data],
      };
    case REMOVE_FAVORITE:
      return {
        data: state.data.filter((item) => {
          return item.idDrink === payload ? false : true;
        }),
        ids: state.ids.filter((id) => {
          return id === payload ? false : true;
        }),
      };
    default:
      return state;
  }
};
