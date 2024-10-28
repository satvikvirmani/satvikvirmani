'use client';

import React, { FormEvent, useState } from 'react';

const Contact = () => {
    const [sending, setSending] = useState(false);

    interface FormElements extends HTMLFormControlsCollection {
        name: HTMLInputElement;
        email: HTMLInputElement;
        message: HTMLTextAreaElement;
    }

    interface ContactForm extends HTMLFormElement {
        readonly elements: FormElements;
    }

    async function handleSubmit(event: FormEvent<ContactForm>) {
      setSending(true);

        event.preventDefault();

        const formData = new FormData(event.target as ContactForm)
        try {
  
            const response = await fetch('/api/contact', {
                method: 'post',
                body: formData,
            });

            if (!response.ok) {
                console.log("falling over")
                throw new Error(`response status: ${response.status}`);
            }
            const responseData = await response.json();
            console.log(responseData['message'])
            setSending(false);
            alert('Message successfully sent');
        } catch (err) {
            console.error(err);
            setSending(false);
            alert("Error, please try resubmitting the form");
        }
    };

  return (
    <section id="contact" className="w-full">
      <div className="mx-auto max-w-md">
        <h1 className="py-8 text-5xl text-center font-bold">Contact</h1>

        <form onSubmit={handleSubmit}>
          <div className="mt-4 flex flex-col gap-2">
            <label className="text-sm text-gray-400" htmlFor="name">Name</label>
            <input className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg placeholder:text-sm" type="text" name="name" id="name" placeholder="Your Name" />
          </div>
          <div className="mt-4 flex flex-col gap-2">
            <label className="text-sm text-gray-400" htmlFor="email">Email</label>
            <input className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg placeholder:text-sm"
              type="text"
              name="email"
              id="email"
              placeholder="Your Email"
            />
          </div>
          <div className="mt-4 flex flex-col gap-2">
            <label className="text-sm text-gray-400" htmlFor="message">Message</label>
            <textarea
            className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg placeholder:text-sm"
              name="message"
              id="message"
              rows={4}
              placeholder="Your message..."
            />
          </div>
          {
            sending ? <input className="mt-4 p-2 cursor-pointer w-full rounded-lg bg-gray-500 text-gray-100 text-sm font-bold text-center" type="submit" disabled={true} value={"Submitting"} /> : <input className="mt-4 p-2 cursor-pointer w-full rounded-lg bg-gray-800 text-gray-100 text-sm font-bold text-center" type="submit" value={"Submit"} />
          }
          
        </form>
      </div>
    </section>
  );
};

export default Contact;
