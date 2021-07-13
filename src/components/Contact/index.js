import * as React from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

export default function Contact() {
  let [form, setForm] = React.useState({
    from_name: "",
    from_email: "",
    message: ""
  });

  const handleSend = (e) => {
    e.preventDefault();

    emailjs.send('service_s2skodh', 'template_bi440sr', form, 'user_gVWlfXTl436bwKQ1qzy8L')
    .then(function(response) {
        Swal.fire({
            icon: 'success',
            title: 'Your email has been sent',
            showConfirmButton: false,
            timer: 1000
          })
     })
     .catch(function(error) {
        Swal.fire({
            icon: 'error',
            title: 'Sorry, something went wrong :(',
            showConfirmButton: false,
            timer: 1000
          })
     })
     .finally(() => {
         setForm({
         from_name: "",
         from_email: "",
         message: ""})
     });

  }

  return (
    <div id="contact" className="md:col-span-2 py-20 md:py-40">
      <div className="grid grid-cols-1 md:grid-cols-12 ">
        <div className="formcontrol md:col-start-3 md:col-end-11">
            <div className="font-black p-4 text-2xl md:text-3xl text-cust-cyan text-center font-sans" data-aos="zoom-in">
            Contact Me
            </div>

            <div className="form" onSubmit={handleSend}>
                <form>
                    <div className="m-4">
                        <label className="block text-cust-cyan text-xl font-bold mb-2" htmlFor="from_name">
                            Name
                        </label>
                        <input required className="bg-white focus:outline-none ring-4 ring-purple-500 focus:ring-yellow-300 rounded-lg py-2 px-4 block w-full leading-normal text-purple-900 font-semibold" type="text" id="from_name" value={form.from_name} placeholder="Sender's name" 
                        onChange={e => setForm({...form, from_name: e.target.value})}/>
                    </div>

                    <div className="m-4">
                        <label className="block text-cust-cyan text-xl font-bold mb-2" htmlFor="from_email">
                            Email
                        </label>
                        <input required className="bg-white focus:outline-none ring-4 ring-purple-500 focus:ring-yellow-300 rounded-lg py-2 px-4 block w-full leading-normal text-purple-900 font-semibold" type="email" placeholder="Sender's email" id="from_email" value={form.from_email} onChange={e => setForm({...form, from_email: e.target.value})}/>
                    </div>

                    <div className="m-4">
                        <label className="block text-cust-cyan text-xl font-bold mb-2" htmlFor="message">
                            Message
                        </label>
                        <textarea required rows={5} data-gramm_editor="false" className="bg-white focus:outline-none ring-4 ring-purple-500 focus:ring-yellow-300 rounded-lg py-2 px-4 block w-full leading-normal text-purple-900 font-semibold" type="text" placeholder="Message" id="message" value={form.message} onChange={e => setForm({...form, message: e.target.value})}/>
                    </div>

                    <div className="m-4 flex justify-center items-center font-mont">
                        <button className="h-10 px-5 transition-colors duration-150 border-2 border-purple-600 rounded-lg focus:shadow-outline bg-yellow-300 font-semibold text-purple-700" type="submit">Send</button>
                    </div>
                </form>
            </div>
        </div>

      </div>
    </div>
  );
}
