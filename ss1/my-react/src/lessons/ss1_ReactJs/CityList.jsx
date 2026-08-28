import React from "react";

function CityList() {
    return React.createElement(
        "ul",
        null,
        React.createElement("li", null, "Hà Nội"),
        React.createElement("li", null, "Đà Nẵng"),
        React.createElement("li", null, "Hải Phòng"),
        React.createElement("li", null, "Hồ Chí Minh")
    );
}
export default CityList;