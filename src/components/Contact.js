const Contact = () => {
  return (
    <div className="pt-24">
      <h1 className="font-bold text-xl m-4 p-2">Contact Us</h1>
      <form>
        <input
          type="text"
          placeholder="name"
          className="border border-blue-400 p-2 m-2 rounded"
        />
        <input
          type="text"
          placeholder="message"
          className="border border-blue-400 p-2 m-2 rounded"
        />
        <button className=" border border-blue-400 bg-blue-400 rounded p-2 m-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
