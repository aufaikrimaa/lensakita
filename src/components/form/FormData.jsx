import axios from "axios";
import { useState } from "react";

function FormData({ id, title, pack, price }) {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [noTelp, setNoTelp] = useState("");
  const [forDate, setForDate] = useState("");

  const API_GSHEET = import.meta.env.VITE_REACT_APP_API_URL;

  const d = new Date();
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
      console.log(response);
      setNama("");
      setEmail("");
      setNoTelp("");
      setForDate("");
    });
    // console.log(bookDate, nama, email, noTelp, forDate, id, title, pack, price);
  };

  return (
    <div>
      <div>Order Data</div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nama Pemesan</label>
          <input
            type="name"
            placeholder=""
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            placeholder=""
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Nomor HP</label>
          <input
            type="text"
            placeholder=""
            value={noTelp}
            onChange={(e) => setNoTelp(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Untuk tanggal</label>
          <input
            type="text"
            placeholder=""
            value={forDate}
            onChange={(e) => setForDate(e.target.value)}
            required
          />
        </div>
        <div>
          <div>Nama paket yang dipesan : {title}</div>
        </div>
        <div>
          <div>Kategori paket: {pack}</div>
        </div>
        <div>
          <div>Harga paket: {price}</div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormData;
