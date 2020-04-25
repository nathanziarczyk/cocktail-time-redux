import axios from "axios";

/* INITIAL STATE */
export const initialState = {
  loading: false,
  error: {
    message: "",
    bool: false,
  },
  data: [],
};

/* TYPES */
const START_SEARCH = "START_SEARCH";
const SUCCESS_SEARCH = "SUCCESS_SEARCH";
const ERROR_SEARCH = "ERROR_SEARCH";

/* ACTION CREATORS */
export const searchCocktails = (str) => (dispatch) => {
  dispatch(startSearch());
  axios
    .get("//www.thecocktaildb.com/api/json/v1/1/search.php?s=" + str)
    .then((response) => {
      if (response.data.drinks === null) {
        dispatch(errorSearch("Nothing found"));
      } else {
        dispatch(successSearch(response.data.drinks));
      }
    })
    .catch((error) => {
      dispatch(errorSearch("Network error"));
    });
};

export const getRandom = () => (dispatch) => {
  dispatch(startSearch());
  axios
    .get("//www.thecocktaildb.com/api/json/v1/1/random.php")
    .then((response) => {
      if (response.data.drinks === null) {
        dispatch(errorSearch("Nothing found"));
      } else {
        dispatch(successSearch(response.data.drinks));
      }
    })
    .catch((error) => {
      dispatch(errorSearch("Network error"));
    });
};

export const startSearch = () => ({
  type: START_SEARCH,
});

export const successSearch = (data) => ({
  type: SUCCESS_SEARCH,
  payload: data,
});

export const errorSearch = (message) => ({
  type: ERROR_SEARCH,
  payload: message,
});

/* REDUCER */
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case START_SEARCH:
      return {
        ...state,
        loading: true,
        error: {
          bool: false,
          message: "",
        },
      };
    case SUCCESS_SEARCH:
      return {
        ...state,
        loading: false,
        data: payload,
      };
    case ERROR_SEARCH:
      return {
        ...state,
        loading: false,
        error: {
          bool: true,
          message: payload,
        },
      };
    default:
      return state;
  }
};
