import { server } from "../store";
import axios from "axios";

export const studentlogin = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: "loginRequest" });

    const { data } = await axios.post(`${server}/student/login`, {
      email,
      password,
    });
    console.log(data);
    dispatch({ type: "loginSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "loginFail", payload: error.response.data.message });
  }
};
export const studentregister = (formdata) => async (dispatch) => {
  // console.log("data1", formdata);
  try {
    dispatch({ type: "registerRequest" });

    const res = await axios.post(`${server}/student/register`, formdata);
    // console.log("data2", res);
    dispatch({ type: "registerSuccess", payload: res.data });
    console.log(res.data);
  } catch (error) {
    dispatch({ type: "registerFail", payload: error.response.data.message });
  }
};

export const studentloadUser = () => async (dispatch) => {
  try {
    dispatch({ type: "loadUserRequest" });

    const { data } = await axios.get(`${server}/studentprofile`);
    console.log(data);
    dispatch({ type: "loadUserSuccess", payload: data.user });
  } catch (error) {
    dispatch({ type: "loadUserFail", payload: error.response.data.message });
  }
};

// export const studentlogout = () => async (dispatch) => {
//   try {
//     dispatch({ type: "logoutRequest" });

//     const { data } = await axios.get(`${server}/studentprofile`, {
//       withCredentials: true,
//     });
//     console.log(data);
//     dispatch({ type: "logoutSuccess", payload: data.message });
//   } catch (error) {
//     dispatch({ type: "logoutFail", payload: error.response.data.message });
//   }
// };

export const professionallogin = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: "loginRequest" });

    const { data } = await axios.post(`${server}/professional/login`, {
      email,
      password,
    });
    console.log(data);
    dispatch({ type: "loginSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "loginFail", payload: error.response.data.message });
  }
};
export const professionalregister = (formdata) => async (dispatch) => {
  try {
    dispatch({ type: "registerRequest" });

    const { data } = await axios.post(
      `${server}/professional/register`,
      formdata
    );

    dispatch({ type: "registerSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "registerFail", payload: error.response.data.message });
  }
};

// export const professionalloadUser = () => async (dispatch) => {
//   try {
//     dispatch({ type: "loadUserRequest" });

//     const { data } = await axios.get(
//       `${server}/professionalprofile`,

//       {
//         withCredentials: true,
//       }
//     );
//     console.log(data);
//     dispatch({ type: "loadUserSuccess", payload: data.user });
//   } catch (error) {
//     dispatch({ type: "loadUserFail", payload: error.response.data.message });
//   }
// };

// export const professionallogout = () => async (dispatch) => {
//   try {
//     dispatch({ type: "logoutRequest" });

//     const { data } = await axios.get(`${server}/professional/logout`, {
//       withCredentials: true,
//     });
//     console.log(data);
//     dispatch({ type: "logoutSuccess", payload: data.message });
//   } catch (error) {
//     dispatch({ type: "logoutFail", payload: error.response.data.message });
//   }
// };

export const employerlogin = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: "loginRequest" });

    const { data } = await axios.post(`${server}/employer/login`, {
      email,
      password,
    });
    console.log(data);
    dispatch({ type: "loginSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "loginFail", payload: error.response.data.message });
  }
};

export const employerregister = (formdata) => async (dispatch) => {
  try {
    dispatch({ type: "registerRequest" });

    const { data } = await axios.post(`${server}/employer/register`, formdata);

    dispatch({ type: "registerSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "registerFail", payload: error.response.data.message });
  }
};

// export const employerloadUser = () => async (dispatch) => {
//   try {
//     dispatch({ type: "loadUserRequest" });

//     const { data } = await axios.get(
//       `${server}/employerprofile`,

//       {
//         withCredentials: true,
//       }
//     );
//     console.log(data);
//     dispatch({ type: "loadUserSuccess", payload: data.user });
//   } catch (error) {
//     dispatch({ type: "loadUserFail", payload: error.response.data.message });
//   }
// };

// export const employerlogout = () => async (dispatch) => {
//   try {
//     dispatch({ type: "logoutRequest" });

//     const { data } = await axios.get(`${server}/employer/logout`, {
//       withCredentials: true,
//     });
//     console.log(data);
//     dispatch({ type: "logoutSuccess", payload: data.message });
//   } catch (error) {
//     dispatch({ type: "logoutFail", payload: error.response.data.message });
//   }
// };

export const mentorlogin = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: "loginRequest" });

    const { data } = await axios.post(`${server}/mentor/login`, {
      email,
      password,
    });
    console.log(data);
    dispatch({ type: "loginSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "loginFail", payload: error.response.data.message });
  }
};

export const mentorregister = (formdata) => async (dispatch) => {
  try {
    dispatch({ type: "registerRequest" });

    const { data } = await axios.post(`${server}/mentor/register`, formdata);

    dispatch({ type: "registerSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "registerFail", payload: error.response.data.message });
  }
};

// export const mentorloadUser = () => async (dispatch) => {
//   try {
//     dispatch({ type: "loadUserRequest" });

//     const { data } = await axios.get(
//       `${server}/mentorprofile`,

//       {
//         withCredentials: true,
//       }
//     );
//     console.log(data);
//     dispatch({ type: "loadUserSuccess", payload: data.user });
//   } catch (error) {
//     dispatch({ type: "loadUserFail", payload: error.response.data.message });
//   }
// };

// export const mentorlogout = () => async (dispatch) => {
//   try {
//     dispatch({ type: "logoutRequest" });

//     const { data } = await axios.get(`${server}/mentor/logout`, {
//       withCredentials: true,
//     });
//     console.log(data);
//     dispatch({ type: "logoutSuccess", payload: data.message });
//   } catch (error) {
//     dispatch({ type: "logoutFail", payload: error.response.data.message });
//   }
// };
