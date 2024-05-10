import axios from "axios";

export const allUsers = () => async (dispatch) => {
  try {
    dispatch({ type: "REQUEST_ALL_USERS" });

    const { data } = await axios.get("http://localhost:5000/users");
    dispatch({ type: "GET_ALL_USERS", payload: data });
  } catch (error) {
    dispatch({ type: "REQUEST_ALL_FAILED" });
    console.log(error);
  }
};

export const addUser = (user) => async (dispatch) => {
  try {
    const res = await axios.post("http://localhost:5000/users", user);
    dispatch({ type: "ADD_NEW_USER", payload: res.data });
  } catch (error) {
    console.log(error);
  }
};

export const editProfile = (id, obj) => async (dispatch) => {
  try {
    // const res =await axios.put(`http://localhost:5000/users/${id}`,obj)
    const { data } = await axios.patch(
      `http://localhost:5000/users/${id}`,
      obj
    );
    dispatch({ type: "GET_USER", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getUser = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`http://localhost:5000/users/${id}`);
    dispatch({ type: "GET_USER", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = (id) => async (dispatch) => {
  try {
   const x = await axios.delete(`http://localhost:5000/users/${id}`);
    dispatch({ type: "DELETE_USER", payload: id });
  } catch (error) {
    console.log("Error in deleting the User", error);
  }
};
