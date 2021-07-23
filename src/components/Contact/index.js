import * as React from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import svg from '../../asset/spinner.svg';

export default function Contact() {
  let [form, setForm] = React.useState({
    from_name: "",
    from_email: "",
    message: ""
  });

  let [isFetching, setIsFetching] = React.useState(false);

  const handleSend = (e) => {
    e.preventDefault();

    setIsFetching(true);
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
         message: ""});
         setIsFetching(false);
     });

  }

  return (
    <div id="contact" className="md:col-span-2 py-20 md:py-52">
      <div className="grid grid-cols-1 md:grid-cols-12 ">
        <div className="formcontrol md:col-start-3 md:col-end-11">
            <div className="font-black p-4 text-2xl md:text-3xl text-cust-cyan text-center font-sans">
            Contact Me
            </div>

            <div className="form" onSubmit={handleSend}>
                <form>
                    <div className="m-4">
                        <label className="block text-cust-cyan text-xl font-bold mb-2" htmlFor="from_name">
                            Name
                        </label>
                        <input required className="bg-white focus:outline-none ring-4 ring-yellow-300 focus:ring-red-500 rounded-lg py-2 px-4 block w-full leading-normal text-purple-900 font-semibold" type="text" id="from_name" value={form.from_name} placeholder="Your name" 
                        onChange={e => setForm({...form, from_name: e.target.value})}/>
                    </div>

                    <div className="m-4">
                        <label className="block text-cust-cyan text-xl font-bold mb-2" htmlFor="from_email">
                            Email
                        </label>
                        <input required className="bg-white focus:outline-none ring-4 ring-yellow-300 focus:ring-red-500 rounded-lg py-2 px-4 block w-full leading-normal text-purple-900 font-semibold" type="email" placeholder="Your email" id="from_email" value={form.from_email} onChange={e => setForm({...form, from_email: e.target.value})}/>
                    </div>

                    <div className="m-4">
                        <label className="block text-cust-cyan text-xl font-bold mb-2" htmlFor="message">
                            Message
                        </label>
                        <textarea required rows={5} data-gramm_editor="false" className="bg-white focus:outline-none ring-4 ring-yellow-300 focus:ring-red-500 rounded-lg py-2 px-4 block w-full leading-normal text-purple-900 font-semibold" type="text" placeholder="Message" id="message" value={form.message} onChange={e => setForm({...form, message: e.target.value})}/>
                    </div>

                    <div className="m-4 flex justify-center items-center font-mont">
                        <button className="h-10 px-5 border-2 border-purple-600 rounded-lg focus:outline-none bg-button-yellow font-semibold text-purple-700 flex justify-center items-center" type="submit" disabled={isFetching}>
                          <div className={`animate-spin mr-1 ${!isFetching && 'hidden'}`}>
                            <img src={svg} alt="" />
                          </div>
                          <div>
                            {isFetching ? 'Sending' : 'Send'}
                          </div>
                        </button>
                    </div>
                </form>
            </div>
        </div>

      </div>
    </div>
  );
}
