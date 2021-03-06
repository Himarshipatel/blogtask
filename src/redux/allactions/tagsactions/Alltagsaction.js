import axios from "axios";
import { toast } from "react-toastify";

export const Alltag = () => {
  // const tokenn = localStorage.getItem("token");
  // const authtoken = {
  //   headers: {
  //     Authorization: `Bearer ${tokenn}`,
  //   },
  // };
  return (dispatch) => {
    dispatch({ type: "ALL_TAG_PENDING" });

    axios
      .get("https://infblogdemo.herokuapp.com/tags")

      .then((res) => {
        dispatch({
          type: "ALL_TAG_SUCCESS",
          alltag: res.data,
        });
      })
      .catch((error) => {
        toast.error(error.response.data.error, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };
};
