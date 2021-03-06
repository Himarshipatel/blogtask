import axios from "axios";
import { toast } from "react-toastify";

export const Allpost = () => {
  // const tokenn = localStorage.getItem("token");
  // const authtoken = {
  //   headers: {
  //     Authorization: `Bearer ${tokenn}`,
  //   },
  // };
  return (dispatch) => {
    dispatch({ type: "ALL_POST_PENDING" });

    axios
      .get("https://infblogdemo.herokuapp.com/posts")

      .then((res) => {
        dispatch({
          type: "ALL_POST_SUCCESS",
          allpost: res.data,
        });
      })
      .catch((error) => {
        toast.error("error.response.data.error", {
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
