import { useState } from "react";
import React from "react";

function SideBar({ setSelectedSound }) {
    const handleSelect = (e) => {
        setSelectedSound(e.target.value);
    };

    const [sounds, setSounds] = useState([
        { name: "Beep", url: "/audio/Beep.mp3"},
        { name: "Fast beep", url: "/audio/Fast beep.mp3"},
        { name: "Digital", url: "/audio/Digital.mp3"}
    ]);

    const handleUpload = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();

        reader.onload = () => {
            const fileData = reader.result; // base64 audio

            // Ambil sound user sebelumnya
            const stored = JSON.parse(localStorage.getItem("uploadedSounds") || "[]");

            const newSound = {
                name: file.name.replace(/\.[^/.]+$/, ""),  // nama tanpa extension
                fileData: fileData
            };

            localStorage.setItem("uploadedSounds", JSON.stringify([...stored, newSound]));

            if (stored) {
                alert("Sound berhasil ditambahkan!");
            } else {
                alert("Sound gagal ditambahkan!");
            }

            // Kirim ke MainTimer agar masuk dropdown
            setSounds((prev) => [
                ...prev,
                {
                    name: newSound.name,
                    url: newSound.fileData
                }
            ]);

            // Auto select sound
            setSelectedSound(newSound.fileData);
        };

        reader.readAsDataURL(file); // convert ke Base64
    };

    return (
        <div className="w-full sm:w-[300px] md:w-[350px] h-full bg-[#222222] flex flex-col p-4 sm:p-5 gap-10 sm:gap-20 overflow-y-auto">

            {/* SOUND LIST */}
            <div className="flex flex-col gap-2">
                <span className="text-white text-sm sm:text-base">Choose timer sound:</span>
                <select
                    className="bg-[#333333] text-white p-2 sm:p-3 rounded-lg text-sm sm:text-base"
                    onChange={handleSelect}
                >
                    {sounds.map((sound, index) => (
                        <option key={index} value={sound.url}>
                            {sound.name}
                        </option>
                    ))}
                </select>
            </div>

            {/* FILE UPLOAD */}
            <div className="flex flex-col gap-2 flex-1">
                <span className="text-white text-sm sm:text-base">Import sound file:</span>
                <div className="relative w-full h-48 sm:h-full flex flex-col justify-center items-center border-2 border-dashed border-white rounded-lg px-3">

                    <input
                        type="file"
                        accept="audio/*"
                        onChange={handleUpload}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-0"
                    />

                    <div className="flex flex-col justify-center items-center pointer-events-none z-10">
                        <img src="/images/cloud-computing.png" alt="" className="w-12 h-12 sm:w-24 sm:h-24 lg:w-1/3" />
                        <span className="text-white text-xs sm:text-sm text-center mt-2">Choose file or drop your file here</span>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default SideBar;
