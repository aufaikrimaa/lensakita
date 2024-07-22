import axios from "axios";
import { useState, useEffect } from "react";

function FormData({ id, title, pack, price, isID, close }) {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [noTelp, setNoTelp] = useState("");
  const [forDate, setForDate] = useState("");
  const [minDate, setMinDate] = useState("");

  const d = new Date();
  const API_GSHEET = import.meta.env.VITE_REACT_APP_API_URL;

  useEffect(() => {
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, "0"); // Bulan dimulai dari 0
    const dd = String(d.getDate()).padStart(2, "0");
    setMinDate(`${yyyy}-${mm}-${dd}`);
  }, []);

  const bookDate =
    d.getDate() +
    "-" +
    (d.getMonth() + 1) +
    "-" +
    d.getFullYear() +
    " (" +
    d.getHours() +
    ":" +
    d.getMinutes() +
    ")";

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      "Tanggal Pesan": bookDate,
      "Nama Pemesan": nama,
      Email: email,
      "No HP": noTelp,
      "Tanggal Event": forDate,
      "ID Paket": id,
      "Nama Paket": title,
      Kategori: pack,
      "Harga Paket": price,
    };
    axios.post(API_GSHEET, data).then((response) => {
      // console.log(response);
      alert("Berhasil mengirim data pesanan!");
      setNama("");
      setEmail("");
      setNoTelp("");
      setForDate("");
    });
    // console.log(bookDate, nama, email, noTelp, forDate, id, title, pack, price);
  };

  return (
    <div className="h-full grid content-between">
      <div className="flex justify-center">
        <img
          src="https://lensakita-images.vercel.app/images/logo-lk-green.png"
          className="w-2/5"
        />
      </div>

      <form onSubmit={handleSubmit} className="grid gap-y-4 content-end">
        <div className="flex items-center">
          <label className="w-1/3 mr-4">{isID ? "Atas Nama" : "Name"}</label>
          <input
            type="name"
            className="w-2/3 px-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-buttonPrimary"
            placeholder=""
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center">
          <label className="w-1/3 mr-4">Email</label>
          <input
            type="email"
            className="w-2/3 px-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-buttonPrimary"
            placeholder=""
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center">
          <label className="w-1/3 mr-4">
            {isID ? "Nomor WhatsApp" : "WhatsApp Number"}
          </label>
          <input
            type="tel"
            className="w-2/3 px-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-buttonPrimary"
            placeholder=""
            value={noTelp}
            pattern="[0-9]*"
            onChange={(e) => setNoTelp(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center">
          <label className="w-1/3 mr-4">
            {isID ? "Untuk Tanggal" : "Event Date"}
          </label>
          <input
            type="date"
            className="w-2/3 px-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-buttonPrimary"
            placeholder=""
            value={forDate}
            onChange={(e) => setForDate(e.target.value)}
            min={minDate}
            required
          />
        </div>
        <div className="bg-lightGray rounded-lg text-xs p-2 italic mt-2">
          <div>
            {isID
              ? "** Isi data dengan benar, data yang anda kirim akan masuk ke list pesanan kami dan akan kami hubungi sesegera mungkin, atau anda juga dapat mengonfirmasi pesanan anda dan berdiskusi dengan kami (termasuk metode pembayaran) di nomor WhatsApp yang tertera"
              : "** Please fill in the data correctly. The information you provide will be added to our order list, and we will contact you as soon as possible. Alternatively, you can confirm your order and discuss it with us (including payment methods) via the WhatsApp number provided."}
          </div>
        </div>
        <div className="2xl:mt-6 mt-4 flex justify-end gap-2 text-white">
          <button
            type="button"
            onClick={close}
            className="rounded-full w-1/3 bg-buttonSecondary py-2"
          >
            {isID ? "Batal" : "Cancel"}
          </button>
          <button
            type="submit"
            className="rounded-full w-1/3 bg-buttonPrimary py-2"
          >
            {isID ? "Kirim" : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormData;
