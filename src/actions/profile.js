import * as api from "../api";

export const getProfile = (id) => async (dispatch) => {
  try {
    dispatch({ type: "LOADING" });
    const { data } = await api.fetchProfile(id);

    dispatch({ type: "FETCH_PROFILE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const addProfile = (profile) => async (dispatch) => {
  try {
    const { data } = await api.addProfile(profile);

    dispatch({ type: "CREATE_PROFILE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
