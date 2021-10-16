const Error = ({ message }) => {
  return (
    <div>
      <p className="my-3 p-2 text-center alert-primary alert">{message}</p>
    </div>
  );
};

export default Error;
