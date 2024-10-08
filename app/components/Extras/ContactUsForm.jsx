const ContactUsForm = () => {
  return (
    // Contact Us form
    // Form not attached to any database, function, hence submit button does nothing
    <section class="bg-gray-900">
      <div class="py-24 lg:py-32 px-4 mx-auto max-w-screen-md">
        {/* <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-white"> */}
        <h2 class="text-3xl text-center lg:text-4xl text-white font-semibold sm:leading-[55px] sm:tracking-tight mb-4">
          Contact Us
        </h2>
        <p class="mb-8 lg:mb-16 font-light text-center text-gray-300 sm:text-xl">
          Got an issue? Want to send feedback? <br></br>
          I'm one message away
        </p>
        <form action="#" class="space-y-8">
          <div>
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-300"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              class="shadow-sm bg-gray-900 border border-gray-300 text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div>
            <label
              for="subject"
              class="block mb-2 text-sm font-medium text-gray-300"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              class="block p-3 w-full text-sm text-white bg-gray-900 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 "
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div class="sm:col-span-2">
            <label
              for="message"
              class="block mb-2 text-sm font-medium text-gray-300"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="6"
              class="block p-2.5 w-full text-sm text-white bg-gray-900 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
            type="submit"
            class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUsForm;
