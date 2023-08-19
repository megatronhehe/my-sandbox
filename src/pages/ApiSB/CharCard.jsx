import React, { useEffect, useState } from "react";

import {
	RiDeleteBin2Fill,
	RiCheckboxBlankCircleLine,
	RiEditBoxLine,
	RiCheckFill,
	RiCloseLine,
} from "react-icons/ri";

const CharCard = ({ char, setCharData }) => {
	const { id, name, faction, altMode, isDeleting, isEditing } = char;

	const [enableEdit, setEnableEdit] = useState(false);
	const [toggleDelete, setToggleDelete] = useState(false);

	const deleteChar = (id) => {
		setCharData((prev) =>
			prev.map((char) =>
				char.id === id ? { ...char, isDeleting: true } : char
			)
		);
		fetch(`http://localhost:8000/characters/${id}`, {
			method: "DELETE",
		})
			.then((res) => {
				if (!res.ok) {
					console.log("error");
				}
				setCharData((prev) => prev.filter((char) => char.id !== id));
			})
			.finally(() => {
				setToggleDelete(false);
			});
	};

	const editChar = (e) => {
		const { value, name } = e.target;
		setCharData((prev) =>
			prev.map((prevChar) =>
				prevChar.id === id ? { ...prevChar, [name]: value } : prevChar
			)
		);
	};

	const submitEdit = (id) => {
		setCharData((prev) =>
			prev.map((char) => (char.id === id ? { ...char, isEditing: true } : char))
		);
		fetch(`http://localhost:8000/characters/${id}`, {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ ...char, name, altMode }), //
		}).finally(() => {
			setCharData((prev) =>
				prev.map((char) =>
					char.id === id ? { ...char, isEditing: false } : char
				)
			);
			setEnableEdit(false);
		});
	};

	return (
		<li className="relative w-full p-4 bg-white rounded-xl">
			<form className="flex flex-col gap-2">
				<input
					type="text"
					disabled={!enableEdit}
					name="name"
					value={name || ""}
					onChange={editChar}
				/>
				<input
					type="text"
					disabled={!enableEdit}
					name="altMode"
					value={altMode || ""}
					onChange={editChar}
				/>
			</form>
			<div className="absolute flex gap-2 top-2 right-2">
				<div className="flex flex-col gap-2">
					<button
						onClick={() => setToggleDelete((prev) => !prev)}
						className="flex items-center justify-center w-8 h-8 text-white bg-red-300 rounded-full"
					>
						{toggleDelete ? <RiCloseLine /> : <RiDeleteBin2Fill />}
					</button>
					{toggleDelete && (
						<button
							onClick={() => deleteChar(id)}
							className="flex items-center justify-center w-8 h-8 text-white bg-red-300 rounded-full"
						>
							{isDeleting ? (
								<RiCheckboxBlankCircleLine />
							) : (
								<RiDeleteBin2Fill />
							)}
						</button>
					)}
				</div>
				<div className="flex flex-col gap-2">
					<button
						onClick={() => setEnableEdit((prev) => !prev)}
						className="flex items-center justify-center w-8 h-8 text-lg text-white bg-gray-300 rounded-full"
					>
						{enableEdit ? <RiCloseLine /> : <RiEditBoxLine />}
					</button>
					{enableEdit && (
						<button
							onClick={() => submitEdit(id)}
							className="flex items-center justify-center w-8 h-8 text-lg text-white bg-gray-300 rounded-full"
						>
							{isEditing ? <RiCheckboxBlankCircleLine /> : <RiCheckFill />}
						</button>
					)}
				</div>
			</div>
		</li>
	);
};

{
	/* <button
					onClick={(e) => {
						e.preventDefault();
						submitEdit(id);
					}}
					className="flex items-center justify-center w-8 h-8 text-lg text-white bg-gray-300 rounded-full"
				>
					<RiCheckFill />
				</button> */
}

export default CharCard;
