/* eslint-disable react/prop-types */
const SingleProfile = ({
  url,
  title,
  icon,
  rating_icon,
  participated_icon,
  totalsolve_icon,
  rating,
  participated,
  totalsolve,
}) => {
  return (
    <>
      <a href={url} className="overflow-hidden border rounded-xl shadow">
        <div className="flex flex-col justify-between gap-y-2 hover:scale-[1.01] ease-out transition-transform px-5 py-3">
          <div className="flex flex-col gap-y-2 text-slate-800 leading-loose">
            <div className="flex items-center space-x-2">
              {icon}
              <span className="text-xl font-medium">{title}</span>
            </div>

            <div>
              <div className="flex items-center space-x-2">
                {rating_icon}
                <span >
                  {`Top Rating ${rating}`}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                {participated_icon}
                <span>
                  {`Paticipated in ${participated}+ contest`}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                {totalsolve_icon}
                <span >
                  {`Total ${totalsolve}+ problem solved`}
                </span>
              </div>
            </div>
          </div>
        </div>
      </a>
      {/* <h1 className="text-slate-600 leading-loose text-center">{title}</h1> */}
    </>
  );
};

export default SingleProfile;
