import axios from "axios";
import PopupView from "./PopupView";
import { useEffect, useState } from "react";

const PopupController = ({ userName, setShowPopup }) => {
  const [data, setData] = useState(null);

  // kullanıyca ait postları al ve state'e aktar
  useEffect(() => {
    axios
      .get(`http://localhost:3000/posts?user=${userName}`)
      .then((res) => setData(res.data));
  }, []);

  return (
    <PopupView userName={userName} data={data} setShowPopup={setShowPopup} />
  );
};

export default PopupController;
