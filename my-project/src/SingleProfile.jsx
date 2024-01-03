/* eslint-disable react/prop-types */
const SingleProfile = ({ url, title, icon }) => {
  return (
    <>
      <div className="flex flex-col items-center">
        <a href={url}>{icon}</a>
        <h1 className="text-slate-600 leading-loose text-center">{title}</h1>
      </div>
    </>
  );
};

export default SingleProfile;
