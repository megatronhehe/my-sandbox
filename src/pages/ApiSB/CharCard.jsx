import React, { useEffect, useState, useRef } from "react";

import {
	RiDeleteBin2Fill,
	RiCheckboxBlankCircleLine,
	RiEditBoxLine,
	RiCheckFill,
	RiCloseLine,
} from "react-icons/ri";

const CharCard = ({ char, setCharData, setError, setShowNotif }) => {
	const { id, name, faction, altMode, isDeleting, isEditing } = char;

	const [enableEdit, setEnableEdit] = useState(false);
	const [toggleDelete, setToggleDelete] = useState(false);

	const ref = useRef(null);

	useEffect(() => {
		if (enableEdit) {
			ref.current.focus();
		}
	}, [enableEdit]);

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
					setError(`${res.status}:${res.statusText}`);
					setShowNotif(true);
				} else {
					setCharData((prev) => prev.filter((char) => char.id !== id));
				}
			})
			.finally(() => {
				setCharData((prev) =>
					prev.map((char) =>
						char.id === id ? { ...char, isDeleting: false } : char
					)
				);
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
			body: JSON.stringify({ ...char, name, faction, altMode }),
		})
			.then((res) => {
				if (!res.ok) {
					setError(`${res.status}:${res.statusText}`);
					setShowNotif(true);
				}
			})
			.finally(() => {
				setCharData((prev) =>
					prev.map((char) =>
						char.id === id ? { ...char, isEditing: false } : char
					)
				);
				setEnableEdit(false);
			});
	};

	return (
		<li className="relative flex w-full p-4 bg-white rounded-xl">
			<form className="flex flex-col w-4/5 gap-2">
				<input
					type="text"
					ref={ref}
					disabled={!enableEdit}
					name="name"
					value={name || ""}
					onChange={editChar}
					className="w-full p-2 text-center bg-gray-100 border-b rounded-lg outline-none disabled:bg-white"
				/>
				<div className="flex w-full gap-2">
					<input
						type="text"
						disabled={!enableEdit}
						name="altMode"
						value={altMode || ""}
						onChange={editChar}
						className="w-1/2 p-2 text-center bg-gray-100 rounded-lg outline-none disabled:bg-white"
					/>
					<input
						type="text"
						disabled={!enableEdit}
						name="faction"
						value={faction || ""}
						onChange={editChar}
						className="w-1/2 p-2 text-center bg-gray-100 rounded-lg outline-none disabled:bg-white"
					/>
				</div>
				<button
					onClick={(e) => {
						e.preventDefault();
						submitEdit(id);
					}}
					className="absolute invisible"
				></button>
			</form>

			<div className="flex flex-col w-1/5 gap-2">
				<div className="flex flex-row-reverse gap-2">
					<button
						onClick={() => setEnableEdit((prev) => !prev)}
						className="flex items-center justify-center w-8 h-8 text-lg text-white bg-gray-300 rounded-md"
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
				<div className="flex flex-row-reverse gap-2">
					<button
						onClick={() => setToggleDelete((prev) => !prev)}
						className="flex items-center justify-center w-8 h-8 text-white bg-red-300 rounded-md"
					>
						{toggleDelete ? <RiCloseLine /> : <RiDeleteBin2Fill />}
					</button>
					{toggleDelete && (
						<button
							onClick={() => deleteChar(id)}
							className="flex items-center justify-center w-8 h-8 text-white bg-red-300 rounded-full"
						>
							{isDeleting ? <RiCheckboxBlankCircleLine /> : <RiCheckFill />}
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
