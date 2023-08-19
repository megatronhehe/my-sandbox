import React from "react";

const NotifModal = ({ error }) => {
	return (
		<div className="fixed p-4 text-gray-400 bg-white border rounded-xl top-2 right-2">
			Error! {error}
		</div>
	);
};

export default NotifModal;
